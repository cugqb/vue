<template>
  <div class='container'>
   <myCategory title='美食' :listData='foods'/>
   <myCategory title='游戏' :listData='games'/>
   <myCategory title='电影' :listData='films'/>
  </div>
  
</template>

<script>

import myCategory from './components/category'
export default {
  name: 'App',
  components:{myCategory},
  data(){
    return{
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['教父','拆弹专家','暗杀','我和我的家乡']
    }
  }

}
</script>

<style>

.container{
  display: flex;
  justify-content: space-around;
}
</style>
