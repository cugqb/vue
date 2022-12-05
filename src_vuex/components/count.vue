<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <h3>当前求和放大10倍:{{bigSum}}</h3>
    <h3>我是{{student}},今年{{age}}</h3>
    <select v-model="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数</button>
    <button @click="incrementWait(n)">等等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'theCount',
    data(){
        return{
            n:1,
            //用户选择的数字
            
        }
    },
    computed:{
        //靠程序员自己亲自去写计算属性
        // sum(){
        //     return this.$store.state.sum
        // },
        // student(){
        //     return this.$store.state.student
        // },
        // age(){
        //     return this.$store.state.age
        // },

        //将mapstate返回的对象里的每一个key value 添加到计算属性中
        //借助mapstate生成计算属性,从state中读取数据。(对象写法)
        ...mapState('countAbout',['sum','student','age']),

        //靠程序员自己写
        // bigSum(){
        //     return this.$store.getters.bigSum
        // },
        ...mapGetters('countAbout',['bigSum'])


    },
    
    methods:{
        // increment(){
        //     this.$store.commit('JIA',this.n)
        // },
        // decrement(){
        //     this.$store.commit('JIAN',this.n)

        //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象的写法)
        ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),

        
        // incrementOdd(){
        //     this.$store.dispatch('oddjia',this.n)

        // },
        // incrementWait(){
        //     this.$store.dispatch('waitjia',this.n)

        // }
         //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象的写法)
        ...mapActions('countAbout',{incrementOdd:'oddjia',incrementWait:'waitjia'})

    }

}
</script>

<style>
button{
    margin-left: 5px;
}
</style>