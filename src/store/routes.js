import { defineStore } from 'pinia'
import { currentRoute, currentRouteParent } from '@/config'
export default defineStore('RouteStore', {
  state: () => ({
    routes: [], // 完整的路由
    currentRoute: localStorage.getItem(currentRoute) || '', // 当前路由
    currentRouteParent: localStorage.getItem(currentRouteParent) || '', // 当前路由的顶级父路由
    menuList: [], // 侧边栏渲染的路由
  }),
  actions: {
    setRoutes(routes) {
      this.routes = routes
    },
    setMenuList(routes) {
      this.menuList = routes
    },
    initMenuList() {
      this.setMenuList(this.routes)
    },
    setCurrentRoute(route) {
      this.currentRoute = route.path
      localStorage.setItem(currentRoute, this.currentRoute)
      this.setCurrentRouteParent(route.matched[0].path)
    },
    setCurrentRouteParent(path) {
      this.currentRouteParent = path
      localStorage.setItem(currentRouteParent, this.currentRouteParent)
    },
  },
})
