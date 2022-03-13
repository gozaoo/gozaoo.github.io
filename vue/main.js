const app = Vue.createApp({
  //定义数据
  data(){
    return {
      appName: 'BlurLyric',
      version: '2.0',
      counter: 0,

    }
  },
  //创建后执行
  created(){
    console.log('==================================\n\n'+this.appName +' Ver.vue 启动! 当前版本' + this.version+'\n\n==================================');
  },
  //模块下的function
  methods: {
    add(){
      this.counter++
    },
    sub(){
      this.counter--
    }
  }
})

const vm = app.mount('#app')
// app.mount(document.querySelector('#app'))

