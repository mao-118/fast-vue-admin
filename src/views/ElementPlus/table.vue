<template>
  <div class="app-container">
    <el-row class="mb-8">
      <el-col class="mb-2" :span="24">
        <el-alert
          title="背景：在某些使用情况下，组件可能最终加载数万行数据。 将这么多的数据渲染至 DOM 中可能会给浏览器带来负担，从而造成性能问题。"
          type="success"
          effect="dark"
        />
      </el-col>
      <el-col :span="24">
        <el-alert
          title="Tips：虚拟化组件目前在测试当中，如果在使用中发现任何漏洞和问题，可以前往官网反馈。"
          type="warning"
          effect="dark"
        />
      </el-col>
    </el-row>
    <el-table-v2 :columns="columns" :data="data" :width="800" :height="600" fixed />
  </div>
</template>
<script lang="ts" setup>
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (columns: ReturnType<typeof generateColumns>, length = 200, prefix = 'row-') =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)
</script>
<style scoped>
.el-table-v2 {
  margin: 0 auto;
}
</style>
