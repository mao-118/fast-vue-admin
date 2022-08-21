<p align="center">
<a href="https://circleci.com/gh/vuejs/vue/tree/dev" rel="nofollow"><img src="https://camo.githubusercontent.com/464affec1d056eecc08779948a1bb93bc579e4ab7637979609cd1506a43ad301/68747470733a2f2f696d672e736869656c64732e696f2f636972636c6563692f70726f6a6563742f6769746875622f7675656a732f7675652f6465762e7376673f73616e6974697a653d74727565" alt="Build Status" data-canonical-src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg?sanitize=true" style="max-width: 100%;"></a>
<a href="https://www.oscs1024.com/project/oscs/mao-118/fast-vue-admin?ref=badge_small" alt="OSCS Status"><img src="https://www.oscs1024.com/platform/badge/mao-118/fast-vue-admin.svg?size=small"/></a>
<a href="https://www.npmjs.com/package/vue" rel="nofollow"><img src="https://camo.githubusercontent.com/9cd15767dc45dd1a09a15c0751f65623b4040bc28f13875a3803250e3d95e167/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7675652e7376673f73616e6974697a653d74727565" alt="License" data-canonical-src="https://img.shields.io/npm/l/vue.svg?sanitize=true" style="max-width: 100%;"></a>
</p>

## 介绍

本项目基于 [vue3](https://staging-cn.vuejs.org/guide/introduction.html) 和 [vite2](https://vitejs.cn/) 搭建,自2022年开始 [vue3](https://staging-cn.vuejs.org/guide/introduction.html) 已经开始作为默认版本。不在建议使用 [vue2](https://cn.vuejs.org/) 的框架， [webpack](https://www.webpackjs.com/) 构建工具也替换为 [vite](https://vitejs.cn/) ，同时该项目全局状态共享从之前的 [Vuex](https://vuex.vuejs.org/) 替换为 [pinia](https://pinia.vuejs.org/introduction.html)

- [在线预览](https://mao-118.github.io/fast-vue-admin/)

- [使用文档](https://mao-118.github.io/fast-vue-admin-doc/)

- [Gitee](https://mao-118.gitee.io/fast-vue-admin/) 在线预览（国内用户可访问该地址）

- [国内访问文档](https://mao-118.gitee.io/fast-vue-admin-doc/) 文档（方便没翻墙的用户查看）

## OSCS

[![OSCS Status](https://www.oscs1024.com/platform/badge/mao-118/fast-vue-admin.svg?size=large)](https://www.oscs1024.com/project/mao-118/fast-vue-admin?ref=badge_large)

## 工具
推荐使用 `vscode` 进行开发，项目配置了 `eslint`, 这里不再使用`vuter`,选择`volar`,因为`volar`对`vue3`的支持更友好。
## 开发

```bash
# 克隆项目
git clone https://github.com/mao-118/fast-vue-admin

# 进入项目目录
cd fast-vue-admin

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:9999

## 发布

```bash
# 构建测试环境
npm run build:deve

# 构建生产环境
npm run build:prod
```
