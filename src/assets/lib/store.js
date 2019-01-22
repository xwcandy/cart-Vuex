import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
//注册插件vuex
Vue.use(Vuex)

// 创建一个vuex仓库（共享数据的公共仓库）
const store = new Vuex.Store({
    state: {
       cartData: {}
    },
    mutations: {
      addFruit(state,fruit) {
        console.log(fruit);
        if(state.cartData[fruit.name]){
            //已存在
            state.cartData[fruit.name].num++;
        }else{
            //不存在 第一次添加
            // state.cartData[fruit.name] = fruit;
            // 本来没有的属性 根据逻辑动态增加 Vue不会跟踪他的改变 不会添加get 和set
            // 需要通过Vue指定的方法 告诉他 这个数据是我动态增加的
            Vue.set(state.cartData, fruit.name, fruit)
            // state.cartData[fruit.name].num = 1;
            Vue.set(state.cartData[fruit.name], 'num', 1)

        }
      }
    },
    getters: {
        totalNum(state){
            let num = 0;
            for (let key in state.cartData) {
                num += state.cartData[key].num;
                console.log(key);
            }
            return num;
        }
    }
})

// 暴露出去
export default store;