<template>
  <div class="student">
    <h1>学生名称:{{studentName}}</h1>
    <h1>学生性别:{{studentSex}}</h1>
    <button @click="send">点我传递学生姓名</button>
    <button @click="unbind">解绑按钮</button>
  </div>
</template>

<script>
export default {
    name:"myStudent",
    data(){
        return{
            studentName:'邱也行',
            studentSex:'男'

        }
    },
    methods:{
        send(){
            //第一参数为自定义事件的名称,其余参数可以是需要向父组件传递的数据参数
            this.$emit('sendStudnetName',this.studentName)
        },
        unbind(){
            this.$off('sendStudnetName')
        }
    }
    

}
</script>

<style>
.student{
    background-color: gray;
    padding: 10px;
    margin-top: 5px;
}

</style>