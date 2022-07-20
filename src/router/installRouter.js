import NProgress from '@/plugins/nprogress';
import { whiteRouter } from '@/config';
import { mainStore } from '@/store';
const importRouter = import.meta.globEager('./modules/*.js');
export const routes = Object.keys(importRouter)
  .reduce((currentRoute, nextRoute) => {
    const route = importRouter[nextRoute].default;
    currentRoute.push(route);
    return currentRoute;
  }, [])
  .sort((a, b) => {
    if (!a.sort) a.sort = 1;
    return a.sort - b.sort;
  });
async function handleKeepAlive(to) {
  if (to.matched && to.matched.length > 2) {
    for (let i = 0; i < to.matched.length; i++) {
      const element = to.matched[i];
      if (element.components.default.name === 'Emptyout') {
        to.matched.splice(i, 1);
        await handleKeepAlive(to);
      }
      // 如果没有按需加载完成则等待加载
      if (typeof element.components.default === 'function') {
        await element.components.default();
        await handleKeepAlive(to);
      }
    }
  }
}
export const beforeResolve = (to, from, next) => {
  console.log(to);
  to.meta.matched = JSON.parse(JSON.stringify(to.matched));
  handleKeepAlive(to);
  NProgress.start();
  // 1.判断是否有token
  if (mainStore.token) {
    if (to.path === '/login') {
      NProgress.done();
      next('/');
    } else {
      next();
    }
  } else {
    // 2.过滤白名单
    if (whiteRouter.includes(to.path)) {
      next();
    } else {
      NProgress.done();
      next('/login');
    }
  }
};
export const afterEach = (to, from) => {
  NProgress.done();
};
