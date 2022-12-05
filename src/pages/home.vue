<template>
  <div>
    <h2>我是home内容</h2>
    <router-link to="/home/houseWork">家务</router-link>
    <router-link to="/home/houseFood">家庭食物</router-link>
    <hr>
    <div>
      <!-- 缓存houserFood组件的内容,使它在切换过程中不被销毁 include里面是组件名 -->
      <keep-alive include="houseFood">
      <router-view></router-view>
      </keep-alive>
      
    </div>
  </div>
  
  
  
</template>

<script>
export default {
    name:'myHome'

}
</script>

<style>

</style>