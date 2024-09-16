export default [
  {
    "path": "/home",
    "text": "---\n1726445139313\n1726445139313\n主页\n---\n## GOZAOO‘s Blogs\n\n### 在这里，我想与你\n\n- 分享**技术** \n- 分享**有意思的点子**\n- 分享**日常**\n\n联系方式：邮箱地址\n\n```\ngozaoo@outlook.com\n```",
    "tags": [
      "主页"
    ],
    "title": "home",
    "time": "1726445139313",
    "last_edit_time": "1726445139313"
  },
  {
    "path": "/关于使用 Github Page 创建个人博客",
    "text": "---\n1726456024791\n1726456024791\n技术\n---\n## 关于此博客\n\n技术栈非常简单，以至于你也可以轻松制作出来。\n至于为什么会突然想到做一个博客？主要是用别人的博客貌似不符合我的作风，我想做一个全自主可控，对我来说没有学习成本的博客*（主要是想要自己自定义全部效果和解析等等，哈哈，万一哪天做成了一个文档模板了呢？）*，所以我就写了这么一个~~简陋~~的博客，话不多说，我们从程序入口开始吧\n\n### 启动\n对于程序，我们启动分为三类情况\n- 开发显示\n- 构建静态页面\n- markdown解析并变成前端界面\n\n#### 开发显示\n我使用vite，vue等框架，像github page这样子的静态托管，当然是要构建成静态文件才可以使用啦！所以我们分别要对我们的配置文件这么干\n```\n// vite.config.js\nimport { defineConfig } from 'vite'\n\nimport vue from '@vitejs/plugin-vue'\n\nexport default defineConfig({\n  plugins: [vue()],\n  build: {\n    rollupOptions: {\n      input: './index.html', // 指定入口文件\n    },\n    outDir: 'output', // 设置输出目录\n    assetsDir: 'assets', // 设置静态资源目录\n  },\n\n  resolve: {\n    alias: {\n      'vue': 'vue/dist/vue.esm-bundler.js'\n    }\n  }\n})\n```\n可以看到我们没有设置 base 主要是因为我们希望我们将构建出来的文件放入网站子目录也可以正常使用，就像你现在正在访问着[关于使用 Github Page 创建个人博客](https://gozaoo.github.io/vueRender/output/) 一样\n\n> 未完待续",
    "tags": [
      "技术"
    ],
    "title": "关于使用 Github Page 创建个人博客",
    "time": "1726456024791",
    "last_edit_time": "1726456024791"
  }
];
