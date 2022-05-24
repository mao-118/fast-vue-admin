<template>
  <div class="app-container">
    <v-md-editor
      :disabled-menus="[]"
      @upload-image="handleUploadImage"
      v-model="text"
      height="500px"
    ></v-md-editor>
  </div>
</template>
<script setup>
import { ref } from "vue";
// 文档地址：https://ckang1229.gitee.io/vue-markdown-editor/zh/
import VMdEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";
// highlightjs
import hljs from "highlight.js";

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});
const text = ref("<h1>editor</h1>");
const handleUploadImage = (event, insertImage, files) => {
  // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
  console.log(files);

  // 此处只做示例
  insertImage({
    url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg",
    desc: "七龙珠",
    // width: 'auto',
    // height: 'auto',
  });
};
</script>