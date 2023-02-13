export const usePageQuery = () => {
  const pageQuery = reactive({
    page: 1,
    pre_size: 10,
    total: 0,
  })
  return pageQuery
}
export const useLoading = () => {
  return ref(false)
}
//防抖ref
export const useDebounceRef = (value, delary = 200) => {
  let timer = null
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger()
        }, delary)
      },
    }
  })
}
