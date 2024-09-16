import { createRouter, createWebHistory } from 'vue-router';

const routerCreater = (baseRouterPath,routes)=>{
    return createRouter({
        history: createWebHistory(baseRouterPath),
        routes:[
            { path: '/', redirect: '/home' },
            ...routes
        ]
    })
}

export default {routerCreater};
