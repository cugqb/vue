<template>
  <div>
    <h1>人员列表</h1>
    <h2>当前求和为{{num}}</h2>
    <h3>得到列表的第一个学生姓名{{fristName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addqiu">添加姓邱的学生</button>
    <button @click="addOne">添加随机名</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'thePerson',
    data(){
        return{
            name:'',
            
        }

    },
    computed:{
        personList(){
            return this.$store.state.personAbout.personList
        },
        //用从store中获取值,需要通过计算属性,再通过插值语法渲染在页面
        num(){
            return this.$store.state.countAbout.sum
        },
        fristName(){
            return this.$store.getters['personAbout/fristName']
        }
        
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('personAbout/ADDOBJ',personObj)
            //添加完毕,需要把输入框中的值去掉
            this.name = ''
        },
        addqiu(){
            this.$store.dispatch('personAbout/selectName',{id:nanoid(),name:this.name})
            this.name = ''
        },
        addOne(){
            this.$store.dispatch('personAbout/addPersonServer')
            this.name = ''
        }

    }
   
}
</script>

<style>

</style>