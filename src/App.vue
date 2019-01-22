<template>
  <div id="app">
    <h2>嘿，买买买</h2>
    <div class="tab">
      <router-link to='/index'>首页</router-link>
      <router-link to='/cart'>购物车({{$store.getters.totalNum}})</router-link>
    </div>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    
  }
}
</script>

<style>
#app h2{
  padding: 10px;
  font-size: 30px;
  background-color: skyblue;
  color: #fff;

}
.tab {
  margin-left: 10px;
}
.tab a {
  padding: 10px;
  display: inline-block;
  border: 1px solid #ccc;
  background-color: rgba(0,0,0,.1);
}
</style>
