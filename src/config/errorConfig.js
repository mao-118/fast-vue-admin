import { mainStore } from '@/store'
export function errorHandler(error, instance, info) {
  console.error(error, info)
  console.dir(instance)
  mainStore.addErrorList({
    error,
    instance,
    info,
    url: window.location.href,
  })
}
