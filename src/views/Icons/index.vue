<template>
  <div class="app-container">
    <el-row>
      <el-col class="flex flex-wrap" :span="24">
        <el-tooltip
          v-for="(item, index) in icons"
          :key="index"
          class="box-item"
          effect="dark"
          :content="item.title"
          placement="top"
        >
          <div
            @click="copyText(item.title)"
            class="
              w-1/6
              flex flex-col
              justify-center
              items-center
              cursor-pointer
              mb-6
            "
          >
            <el-icon :size="48">
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.icon }}</span>
          </div>
        </el-tooltip>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { copyText } from '@/utils';
const icons = reactive([
  { title: '<el-icon><AddLocation /></el-icon>', icon: 'AddLocation' },
  { title: '<el-icon><Aim /></el-icon>', icon: 'Aim' },
  { title: '<el-icon><AlarmClock /></el-icon>', icon: 'AlarmClock' },
  { title: '<el-icon><Apple /></el-icon>', icon: 'Apple' },
  { title: '<el-icon><ArrowDownBold /></el-icon>', icon: 'ArrowDownBold' },
  { title: '<el-icon><ArrowDown /></el-icon>', icon: 'ArrowDown' },
  { title: '<el-icon><ArrowLeftBold /></el-icon>', icon: 'ArrowLeftBold' },
  { title: '<el-icon><ArrowLeft /></el-icon>', icon: 'ArrowLeft' },
  { title: '<el-icon><ArrowRightBold /></el-icon>', icon: 'ArrowRightBold' },
  { title: '<el-icon><ArrowRight /></el-icon>', icon: 'ArrowRight' },
  { title: '<el-icon><ArrowUpBold /></el-icon>', icon: 'ArrowUpBold' },
  { title: '<el-icon><ArrowUp /></el-icon>', icon: 'ArrowUp' },
  { title: '<el-icon><Avatar /></el-icon>', icon: 'Avatar' },
  { title: '<el-icon><Back /></el-icon>', icon: 'Back' },
  { title: '<el-icon><Baseball /></el-icon>', icon: 'Baseball' },
  { title: '<el-icon><Basketball /></el-icon>', icon: 'Basketball' },
  { title: '<el-icon><BellFilled /></el-icon>', icon: 'BellFilled' },
  { title: '<el-icon><Bell /></el-icon>', icon: 'Bell' },
  { title: '<el-icon><Bicycle /></el-icon>', icon: 'Bicycle' },
  { title: '<el-icon><BottomLeft /></el-icon>', icon: 'BottomLeft' },
  { title: '<el-icon><BottomRight /></el-icon>', icon: 'BottomRight' },
  { title: '<el-icon><Bottom /></el-icon>', icon: 'Bottom' },
  { title: '<el-icon><Bowl /></el-icon>', icon: 'Bowl' },
  { title: '<el-icon><Box /></el-icon>', icon: 'Box' },
  { title: '<el-icon><Briefcase /></el-icon>', icon: 'Briefcase' },
  { title: '<el-icon><BrushFilled /></el-icon>', icon: 'BrushFilled' },
  { title: '<el-icon><Brush /></el-icon>', icon: 'Brush' },
  { title: '<el-icon><Burger /></el-icon>', icon: 'Burger' },
  { title: '<el-icon><Calendar /></el-icon>', icon: 'Calendar' },
  { title: '<el-icon><CameraFilled /></el-icon>', icon: 'CameraFilled' },
  { title: '<el-icon><Camera /></el-icon>', icon: 'Camera' },
  { title: '<el-icon><CaretBottom /></el-icon>', icon: 'CaretBottom' },
  { title: '<el-icon><CaretLeft /></el-icon>', icon: 'CaretLeft' },
  { title: '<el-icon><CaretRight /></el-icon>', icon: 'CaretRight' },
  { title: '<el-icon><CaretTop /></el-icon>', icon: 'CaretTop' },
  { title: '<el-icon><Cellphone /></el-icon>', icon: 'Cellphone' }
]);
</script>
