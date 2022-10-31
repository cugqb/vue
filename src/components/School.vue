<template>
    <div class="school">
        <h1>接收的学生性别:{{sex}}</h1>
        <h1>学校名称:{{schoolName}}</h1>
        <h1>学校地址:{{schoolAddress}}</h1>
        <button @click="sendSchoolName">把学校名给app</button>
        
    </div>
</template>

<script>

export default {
    name:'mySchool',
    props:['sendName'],
    data(){
        return{
            schoolName:'中国地质大学',
            schoolAddress:'湖北武汉',
            sex:''

        }
    },
    methods:{
        //从子组件中向父组件传递信息
        sendSchoolName(){
            this.sendName(this.schoolName)
        },
        
    },
    mounted(){
        this.$bus.$on('sendSex',(sex)=>{
            this.sex = sex
        })
    }
}
</script>

<style>
.school{
    background-color: skyblue;
    padding: 10px;
    margin-top: 5px;
    
}

</style>