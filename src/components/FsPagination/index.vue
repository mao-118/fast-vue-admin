<template>
    <div class="my-pagination">
      <el-pagination
        v-model:currentPage="pageQuery.page"
        v-model:page-size="pageQuery.pre_size"
        :page-sizes="[5, 10, 50, 100]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageQuery.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
      <el-backtop id="goBack" v-show="false" :right="100" :bottom="100" />
    </div>
</template>
<script>
export default{
    name:"FsPagination"
};
</script>
<script setup>
import {onMounted, toRef} from "vue";
import { scrollTo } from "@/utils/scroll-to";
import {usePageQuery} from "@/hooks";
const emit=defineEmits(["getTableList"]);
const pageQuery = usePageQuery();
const handleEmit=()=>{
  emit("getTableList");
  setTimeout(()=>{
    scrollTo(0,0);
  },0);
};
onMounted(()=>{
  handleEmit()
})

const handleSizeChange = (size) => {
  handleEmit()
};
const handleCurrentChange = (page) => {
  handleEmit()
};
const changeTotal=(total)=>{
  pageQuery.total=total
}
defineExpose({
  changeTotal,
  pageQuery:{
    page:toRef(pageQuery,'page'),
    pre_size:toRef(pageQuery,'pre_size')
  }
})
</script>
<style lang="scss" scoped>
.my-pagination {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>