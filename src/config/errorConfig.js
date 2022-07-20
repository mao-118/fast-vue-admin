import { mainStore } from '@/store';
export function errorHandler(error, instance, info) {
  console.error(error, info);
  console.dir(instance);
  console.log('出错捕获到了吗？？？？');
  mainStore.addErrorList({
    error,
    instance,
    info,
    url: window.location.href
  });
}
