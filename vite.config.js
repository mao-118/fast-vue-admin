import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  base: './',
  server: {
    port: 9999
  },
  plugins: [
    vue(),
    viteMockServe({ // https://www.npmjs.com/package/vite-plugin-mock
      mockPath: 'mock',
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
