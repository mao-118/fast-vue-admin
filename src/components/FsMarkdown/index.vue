<template>
  <v-md-editor v-model="textValue" @upload-image="handleUploadImage" :disabled-menus="[]" @change="handleChange" height="600px"></v-md-editor>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

// codemirror 编辑器的相关资源
import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/vue/vue';
// edit
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';
defineOptions({
  name: 'FsMarkdown'
});
const props = defineProps({
  text: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['update:text']);
const textValue = ref('');
textValue.value = props.text;
const handleChange = (text, html) => {
  emit('update:text', html);
};

VMdEditor.Codemirror = Codemirror;
VMdEditor.use(vuepressTheme, {
  Prism
});

const handleUploadImage = (event, insertImage, files) => {
  // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
  const reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = function(readRes) {
    const url = readRes.target.result;
    // 此处只做示例
    insertImage({
      url,
      desc: files[0].name
    // width: 'auto',
    // height: 'auto',
    });
  };
};
</script>
