<template>
  <div>
    <el-scrollbar
      :class="{ large: isLarge() }"
      id="elScrollbar"
      ref="scrollbarRef"
      @scroll="handleScroll"
    >
      <div class="tag-list" ref="tagListRef">
        <el-tag
          @click="tagClick(item)"
          @close="closeCurrentTag(item)"
          @contextmenu.prevent.native="openMenu(item, $event)"
          v-for="item in tagViewStore.tagViews"
          :key="item.path"
          class="mx-1"
          :effect="item.path == $route.path ? 'dark' : 'plain'"
          closable
        >
          {{ item.title }}
        </el-tag>
      </div>
    </el-scrollbar>
    <ul
      v-show="visible"
      :style="{ left: left + 'px', top: top + 'px' }"
      class="contextmenu"
    >
      <li @click.stop="refreshSelectedTag">刷新</li>
      <li @click.stop="closeSelectedTag">关闭</li>
      <li @click.stop="closeOthersTags">关闭其他</li>
      <li @click.stop="closeAllTags">关闭所有</li>
      <li @click.stop="closeLeftTags">关闭左边</li>
      <li @click.stop="closeRightTags">关闭右边</li>
    </ul>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import {useMainStore,useTagViewStore,useRouteStore} from "@/store";
import { useScroll } from "@/utils";
const routeStore = useRouteStore();
const tagViewStore = useTagViewStore();
const mainStore = useMainStore();
const route = useRoute();
const router = useRouter();
watch(
  route,
  (newRoute) => {
    routeStore.setCurrentRoute(newRoute);
    if (newRoute.name) {
      tagViewStore.addTagViews(newRoute);
    }
  },
  { immediate: true }
);
const isLarge = () => {
  return localStorage.getItem("elSize") == "large";
};
//点击tag并且在横屏菜单栏的情况下加载左侧菜单
const tagClick = async (item) => {
  if (item.path == route.path) return;
  await router.push(item.path);
  if (mainStore.menuMode == "horizontal") {
    let routes = [];
    routeStore.routes.forEach((route) => {
      if (routeStore.currentRouteParent == route.path && route.children) {
        routes = route.children;
      }
    });
    routeStore.setMenuList(routes);
  }
};
const closeCurrentTag = (item) => {
  tagViewStore.closeTagView(item);
  if(item.path==route.path){
      const index = tagViewStore.tagViews.findIndex((tag) => tag.path == item.path);
    //找到前一个和后一个元素
    const preTag = tagViewStore.tagViews[index - 1];
    const nextTag = tagViewStore.tagViews[index + 1];
    if (preTag) {
      tagClick(preTag);
    } else if (nextTag) {
      tagClick(nextTag);
    } else {
      location.reload();
    }
  }
};
const selectedTag = ref(null);
const visible = ref(false);
const left = ref(0);
const top = ref(0);
const openMenu = (item, e) => {
  selectedTag.value = item;
  visible.value = true;
  left.value = e.pageX;
  top.value = e.pageY;
};
const scrollbarRef = ref(null);
const scrollbarWidth = ref(0);
const scrollLeft = ref(0);
const tagListRef = ref(null);
// let elScrollbar=null
const changeVisible=()=>{
  visible.value = false;
}
onMounted(() => {
  window.addEventListener("click", changeVisible);
  const elScrollbar = document.getElementById("elScrollbar");
  scrollbarWidth.value = tagListRef.value.clientWidth;
  if (navigator.userAgent.indexOf("Firefox") >= 0) {
    // 火狐写法 添加滚轮滚动监听事件
    elScrollbar?.addEventListener("DOMMouseScroll", mouseScroll);
  } else {
    // 非火狐 添加滚轮滚动监听事件
    elScrollbar?.addEventListener("mousewheel", mouseScroll);
  }
});
onBeforeUnmount(()=>{
  window.removeEventListener("click",changeVisible);
  const elScrollbar = document.getElementById("elScrollbar");
  if (navigator.userAgent.indexOf("Firefox") >= 0) {
    // 火狐写法 添加滚轮滚动监听事件
    elScrollbar?.removeEventListener("DOMMouseScroll", mouseScroll);
  } else {
    // 非火狐 添加滚轮滚动监听事件
    elScrollbar?.removeEventListener("mousewheel", mouseScroll);
  }
})
const mouseScroll = (event) => {
  const step = useScroll(event);
  scrollLeft.value += step;
  if (scrollLeft.value <= 0) {
    scrollLeft.value = 0;
  }
  if (scrollLeft.value > scrollbarWidth.value) {
    scrollLeft.value = scrollbarWidth.value;
  }
  scrollbarRef.value.setScrollLeft(scrollLeft.value);
};
const handleScroll = (e) => {
  scrollLeft.value = e.scrollLeft;
};
const refreshSelectedTag = () => {
  router.replace({
    path: "/redirect" + selectedTag.value.fullPath,
  });
  visible.value = false;
};
const closeSelectedTag = () => {
  closeCurrentTag(selectedTag.value);
  visible.value = false;
};
const closeOthersTags = () => {
  tagViewStore.closeOthersTagViews(selectedTag.value);
  if(route.path!==selectedTag.value.path)tagClick(selectedTag.value)
  visible.value = false;
};
const closeAllTags = () => {
  tagViewStore.closeAllTagViews();
  location.reload();
  visible.value = false;
};
const closeLeftTags = () => {
  const leftTags = tagViewStore.closeLeftTagViews(selectedTag.value);
  //如果路由所在的标签被关闭就跳转到当前页面
  if(leftTags.some(item=>item.path==route.path)){
    tagClick(selectedTag.value)
  }
  visible.value = false;
};
const closeRightTags = () => {
  const rightTags = tagViewStore.closeRightTagViews(selectedTag.value);
  //如果路由所在的标签被关闭就跳转到当前页面
  if(rightTags.some(item=>item.path==route.path)){
    tagClick(selectedTag.value)
  }
  visible.value = false;
};
</script>
<style lang="scss" scoped>
.el-scrollbar {
  height: 37px;
  &.large {
    height: 45px;
  }
}
.tag-list {
  min-width: 100%;
  width: max-content;
  display: flex;
  padding: 5px 0;
  border-top: 1px solid var(--el-border-color-lighter);
  box-shadow: 0 1px 4px var(--el-border-color-lighter);
  .el-tag {
    cursor: pointer;
  }
}
.contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
