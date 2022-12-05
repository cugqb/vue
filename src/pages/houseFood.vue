<template>
  <ul>
    <li>火锅 <input type="text"></li>
    <li>炒米粉<input type="text"></li>
    <li>面包 <input type="text"></li>
  </ul>
</template>

<script>
export default {
    name:'houseFood',
    beforeDestroy(){
      console.log('houseFood组件即将被销毁');
    }

}
</script>

<style>

</style>