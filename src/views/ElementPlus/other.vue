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
    <el-row>
      <el-col :span="8">
        <div>虚拟选择器</div>
        <el-select-v2 v-model="value" :options="options" placeholder="Please select" />
      </el-col>
      <el-col :span="8">
        <div>基础树形选择器</div>
        <el-tree-select v-model="treeValue" :data="data" />
      </el-col>
      <el-col :span="8">
        <div>虚拟树形控件</div>
        <el-tree-v2 :data="treeData" :props="props" />
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const value = ref('')
const treeValue = ref('')
const options = reactive([])
const data = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const initOptions = () => {
  Array.from({ length: 1000 }).forEach((_, idx) => {
    options.push({
      value: `Option ${idx + 1}`,
      label: `${initials[idx % 10]}${idx}`,
    })
  })
}
initOptions()
const getKey = (prefix, id) => {
  return `${prefix}-${id}`
}

const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = 'node') => {
  let id = 0
  return Array.from({ length: minNodesNumber })
    .fill(deep)
    .map(() => {
      const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
      const nodeKey = getKey(key, ++id)
      return {
        id: nodeKey,
        label: nodeKey,
        children: childrenNumber ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey) : undefined,
      }
    })
}

const props = {
  value: 'id',
  label: 'label',
  children: 'children',
}
const treeData = createData(4, 30, 40)
</script>
