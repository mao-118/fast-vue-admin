import { createPinia } from 'pinia'
import useMainStore from './main'
import useRouteStore from './routes'
import useTagViewStore from './tagView'
import useUserStore from './user'
const pinia = createPinia()
export const mainStore = useMainStore(pinia)
export const routeStore = useRouteStore(pinia)
export const tagViewStore = useTagViewStore(pinia)
export const userStore = useUserStore(pinia)
