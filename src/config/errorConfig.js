import { mainStore } from '@/store';
export function errorHandler(error, instance, info) {
  console.error(error);
  mainStore.addErrorList({
    error,
    instance,
    info
  });
}
