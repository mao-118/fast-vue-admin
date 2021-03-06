import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import DefineOptions from 'unplugin-vue-define-options/vite';
// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  base: './',
  server: {
    port: 9999,
    proxy: {
      '/v3': {
        target: 'https://restapi.amap.com/',
        changOrigin: true
      }
    }
  },
  plugins: [
    vue(),
    DefineOptions(),
    viteMockServe({ // https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md
      mockPath: 'mock',
      prodEnabled: true,
      supportTs: false, // 如果使用 js发开，则需要配置 supportTs 为 false
      watchFiles: true // 监视文件更改
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use '@/styles/element/index.scss' as *;"
      }
    }
  }
});
