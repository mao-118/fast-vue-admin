<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Approved by">
        <el-input v-model="formInline.user" placeholder="Approved by" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="formInline.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="loading" :data="tableList" border style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column label="operate">
        <template #default="{ row }">
          <el-button type="primary" @click="showEdit(row)">edit</el-button>
          <el-button type="danger" @click="handleDelete">delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <fs-pagination
      ref="FsPageRef"
      v-show="tableList.length"
      @getTableList="getTableList"
    />
    <table-edit ref="edit" @getTableList="getTableList" />
  </div>
</template>
<script>
export default{
    name:'demo1'
}
</script>
<script setup>
import { reactive, ref } from "vue";
import TableEdit from "./components/TableEdit.vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { getList } from "@/api/demo";
import { useLoading } from "@/hooks";
const loading = useLoading();
const edit = ref(null);
const FsPageRef = ref();
const formInline = reactive({
  user: "",
  region: "",
});
const tableList = reactive([]);
const getTableList = async () => {
  const { page, pre_size } = FsPageRef.value.pageQuery;
  loading.value = true;
  const res = await getList({
    page: page.value,
    pre_size: pre_size.value,
  });
  setTimeout(() => {
    tableList.splice(0);
    FsPageRef.value.changeTotal(res.total);
    tableList.push(...res.list);
    loading.value = false;
  }, 500);
};
const onSubmit = () => {
  console.log("submit!");
};
const showEdit = (row) => {
  edit.value.showEdit(row);
};
const handleDelete = () => {
  ElMessageBox.confirm(
    "proxy will permanently delete the file. Continue?",
    "Warning",
    {
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      type: "warning",
    }
  )
    .then(() => {
      ElMessage({
        type: "success",
        message: "Delete completed",
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Delete canceled",
      });
    });
};
</script>
