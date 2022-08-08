<template>
  <div class="app-container">
    <div id="toolbar-container"></div>
    <div id="editor-container"></div>
  </div>
</template>
<script setup>
// 文档地址：https://www.wangeditor.com/
import '@wangeditor/editor/dist/css/style.css';
import { createEditor, createToolbar } from '@wangeditor/editor';
defineOptions({
  name: 'FsRichtext'
});
const props = defineProps({
  text: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['update:text']);
let editor = null;
let toolbar = null;
// 编辑器配置
const editorConfig = {};
editorConfig.placeholder = '请输入内容';
editorConfig.onChange = () => {
  // 当编辑器选区、内容变化时，即触发
  console.log('content', editor.children);
  console.log('text', editor.getText());
  console.log('html', editor.getHtml());
  emit('update:text', editor.getHtml());
};
// 工具栏配置
const toolbarConfig = {};
onMounted(() => {
  // 创建编辑器
  editor = createEditor({
    selector: '#editor-container',
    html: props.text,
    config: editorConfig,
    mode: 'default' // 或 'simple'
  });
  // 创建工具栏
  toolbar = createToolbar({
    editor,
    selector: '#toolbar-container',
    config: toolbarConfig,
    mode: 'default' // 或 'simple'
  });
});
</script>
