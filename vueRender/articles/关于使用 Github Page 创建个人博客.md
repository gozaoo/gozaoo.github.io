---
1726456024791
1726456024791
技术
---
## 关于此博客

技术栈非常简单，以至于你也可以轻松制作出来。
至于为什么会突然想到做一个博客？主要是用别人的博客貌似不符合我的作风，我想做一个全自主可控，对我来说没有学习成本的博客*（主要是想要自己自定义全部效果和解析等等，哈哈，万一哪天做成了一个文档模板了呢？）*，所以我就写了这么一个~~简陋~~的博客，话不多说，我们从程序入口开始吧

### 启动
对于程序，我们启动分为三类情况
- 开发显示
- 构建静态页面
- markdown解析并变成前端界面

#### 开发显示
我使用vite，vue等框架，像github page这样子的静态托管，当然是要构建成静态文件才可以使用啦！所以我们分别要对我们的配置文件这么干
```
// vite.config.js
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: './index.html', // 指定入口文件
    },
    outDir: 'output', // 设置输出目录
    assetsDir: 'assets', // 设置静态资源目录
  },

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
})
```
可以看到我们没有设置 base 主要是因为我们希望我们将构建出来的文件放入网站子目录也可以正常使用，就像你现在正在访问着[关于使用 Github Page 创建个人博客](https://gozaoo.github.io/vueRender/output/) 一样

> 未完待续