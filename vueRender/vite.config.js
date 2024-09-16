import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vueRender/output',
  build: {
    rollupOptions: {
      input: './index.html', // 指定入口文件
    },
    outDir: 'output', // 设置输出目录
    assetsDir: 'assets', // 设置静态资源目录
    // 其他构建配置...
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
})
