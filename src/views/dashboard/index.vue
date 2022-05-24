<template>
  <div class="app-container">
    <div class="flex justify-between flex-wrap">
      <div class="item">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="欢迎使用 FastAdmin" name="1">
            <div>
              功能完善中...
            </div>
          </el-collapse-item>
          <el-collapse-item title="FastAdmin" name="2">
            <div>
              fast-admin 是一个后台前端解决方案，它基于 vue3 和
              element-plus实现。它使用了最新的前端技术栈，内置了 i18
              国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="item">
        <el-row class="mb-4">
          <el-button>Default</el-button>
          <el-button type="primary">Primary</el-button>
          <el-button type="success">Success</el-button>
          <el-button type="info">Info</el-button>
          <el-button type="warning">Warning</el-button>
          <el-button type="danger">Danger</el-button>
          <el-button>中文</el-button>
        </el-row>

        <el-row class="mb-4">
          <el-button plain>Plain</el-button>
          <el-button type="primary" plain>Primary</el-button>
          <el-button type="success" plain>Success</el-button>
          <el-button type="info" plain>Info</el-button>
          <el-button type="warning" plain>Warning</el-button>
          <el-button type="danger" plain>Danger</el-button>
        </el-row>

        <el-row class="mb-4">
          <el-button round>Round</el-button>
          <el-button type="primary" round>Primary</el-button>
          <el-button type="success" round>Success</el-button>
          <el-button type="info" round>Info</el-button>
          <el-button type="warning" round>Warning</el-button>
          <el-button type="danger" round>Danger</el-button>
        </el-row>
      </div>
      <div class="item">
        <el-radio-group v-model="size">
          <el-radio label="large">Large</el-radio>
          <el-radio label="default">Default</el-radio>
          <el-radio label="small">Small</el-radio>
        </el-radio-group>

        <el-descriptions
          class="margin-top"
          title="With border"
          :column="3"
          :size="size"
          border
        >
          <template #extra>
            <el-button type="primary">Operation</el-button>
          </template>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <user />
                </el-icon>
                Username
              </div>
            </template>
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <iphone />
                </el-icon>
                Telephone
              </div>
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <location />
                </el-icon>
                Place
              </div>
            </template>
            Suzhou
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <tickets />
                </el-icon>
                Remarks
              </div>
            </template>
            <el-tag size="small">School</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <office-building />
                </el-icon>
                Address
              </div>
            </template>
            No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
          </el-descriptions-item>
        </el-descriptions>

        <el-descriptions
          class="margin-top"
          title="Without border"
          :column="3"
          :size="size"
          :style="blockMargin"
        >
          <template #extra>
            <el-button type="primary">Operation</el-button>
          </template>
          <el-descriptions-item label="Username"
            >kooriookami</el-descriptions-item
          >
          <el-descriptions-item label="Telephone"
            >18100000000</el-descriptions-item
          >
          <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
          <el-descriptions-item label="Remarks">
            <el-tag size="small">School</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="Address"
            >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="item">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 500kb
            </div>
          </template>
        </el-upload>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'DashboardIndex'
};
</script>
<script setup>
import { computed, ref } from 'vue';
import { useMainStore } from '@/store';
console.log(import.meta.env);
const mainStore = useMainStore();
const activeNames = ref(['1']);
const handleChange = (val) => {
  console.log(val);
};
const size = ref(mainStore.elSize);
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px'
  };
  return {
    marginRight: marginMap[size.value] || marginMap.default
  };
});
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px'
  };
  return {
    marginTop: marginMap[size.value] || marginMap.default
  };
});
</script>
<style lang="scss" scoped>
.item {
  width: 49%;
  height: 400px;
  border: 1px solid var(--el-border-color);
  border-radius: 12px;
  margin-bottom: 10px;
  overflow: hidden;
  padding: 20px;
}
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
