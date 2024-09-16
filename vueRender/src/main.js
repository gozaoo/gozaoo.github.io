import { createApp } from 'vue'
import './style.css'
import router from './router';
import App from './App.vue'
import routes from './assets/articlesParsed.js';
import ArticleView from './views/ArticleView.vue';
// 检查是否为生产构建
const isProduction = import.meta.env.MODE === 'production';

import './aliveDesign/style.css'
console.log(routes);

createApp(App)
.use(
    
    router.routerCreater(
        (isProduction)?'/blogs/output/':'/',
        routes.map((value)=>{
            return {
                path: value.path,
                component: ArticleView, // 对其导入 value.text
                name: value.title,
                props: route=> ({
                    article: value
                }),
                name: value.title
            }
        })
    )
)
.mount('#app')
