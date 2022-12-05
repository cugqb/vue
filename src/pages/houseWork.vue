<template>
  <div>
    <ul v-for="h in homeList" :key="h.id">
        <!-- 跳转路由并携带query参数,to的字符串写法 -->
      <!-- <li><router-link :to="`/home/houseWork/myDetail?id=${h.id}&name=${h.name}`">{{h.name}}</router-link></li> -->
      <!-- to的对象写法 -->
      <!-- <li>
        <router-link :to="{
            path:'/home/houseWork/myDetail',
            query:{
                id:h.id,
                name:h.name
            }
        }">
        {{h.name}}
        </router-link>
    </li> -->
    <!-- params -->
    <!-- <li><router-link :to="`/home/houseWork/myDetail/${h.id}/${h.name}`">{{h.name}}</router-link></li> -->
    <li>
        <router-link :to="{
            //如果此处携带的是params参数,此处只能用name别名,如果使用path将无法跳转
            name:'xiangqing',
            params:{
                id:h.id,
                name:h.name
            }
        }">
        {{h.name}}
        </router-link>
        <button @click="pushShow(h)">push查看</button>
        <button @click="replaceShow(h)">replace查看</button>
    </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "houseWork",
        data(){
            return{
                homeList:[
                    {id:'001',name:'洗衣服'},
                    {id:'002',name:'拖地'},
                    {id:'003',name:'做饭'}
                ]
            }
        },
        methods:{
            pushShow(h){
                this.$router.push({
                    name:'xiangqing',
                    params:{
                    id:h.id,
                    name:h.name
            }

                })

            },
            replaceShow(h){
                this.$router.replace({
                    name:'xiangqing',
                    params:{
                    id:h.id,
                    name:h.name
            }

                })
                
                

            }
           
        },
        beforeDestroy(){
            console.log('houseWork组件即将被销毁');
    }
    };
</script>

<style>
</style>