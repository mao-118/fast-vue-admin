import { reactive,ref } from "vue";


export const usePageQuery = () => {
  const pageQuery = reactive({
    page: 1,
    pre_size: 10,
    total: 0,
  });
  return pageQuery;
};
export const useLoading=()=>{
  return ref(false)
}
