const importFile = import.meta.globEager('./modules/*.js')
const importComponents = import.meta.globEager('@/components/**/*.vue')
import { errorHandler } from '@/config/errorConfig'
export default (app) => {
  // 注入插件
  Object.keys(importFile).forEach((key) => {
    const usePlugin = importFile[key].default
    usePlugin(app)
  })
  // 注入组件 这里没有做额外处理，注入时组件必须定义name值
  Object.keys(importComponents).forEach((key) => {
    const name = importComponents[key].default.name
    const com = importComponents[key].default
    app.component(name, com)
  })
  // 注入处理器
  app.config.errorHandler = errorHandler
}
