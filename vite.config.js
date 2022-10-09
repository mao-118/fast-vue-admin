import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import AutoImport from 'unplugin-auto-import/vite';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import viteCompression from 'vite-plugin-compression';
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
    viteCompression({
      verbose: true,
      disable: false,
      // deleteOriginFile: true, //删除源文件
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    vueSetupExtend(),
    AutoImport({
      dts: true,
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true // <-- this
      }
    }),
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
  },
  build: {
    assetsInlineLimit: 8192,
    brotliSize: true,
    chunkSizeWarningLimit: 50,
    // 清空 console.log
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    },
    // 打包后的文件整理
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/static/[name]-[hash].[ext]'
      }
    }
  }
});
