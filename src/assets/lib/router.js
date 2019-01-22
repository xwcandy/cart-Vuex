// 引入vue
import Vue from 'vue';
// 引入vue-router
import VueRouter from 'vue-router';
// 注册插件
Vue.use(VueRouter);

// 导入组件
import index from '../../components/index.vue';
import cart from '../../components/cart.vue';

//路由规则
let routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: index,
    },
    {
        path: '/cart',
        component: cart,
    }
]

// 实例化路由对象
let router = new VueRouter({
    routes
})

//暴露出去
export default router;

