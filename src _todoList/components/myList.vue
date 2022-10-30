<template>
    <ul class="todo-main">
        <!-- //从vc中获取todos数组,读取每一个对象,生成相应的myItem组件 -->
		<myItem v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todo="todoObj"
        :checkTodo="checkTodo"
		:deleteTodo="deleteTodo"/>    
	</ul>
  
</template>

<script>
import myItem from './myItem'
export default {
    name:'myList',
    components:{myItem},
    props:['todos','checkTodo','deleteTodo']
           
}
</script>

<style>
	/*list*/
	.todo-main {
	  margin-left: 0px;
	  border: 1px solid #ddd;
	  border-radius: 2px;
	  padding: 0px;
	}

	.todo-empty {
	  height: 40px;
	  line-height: 40px;
	  border: 1px solid #ddd;
	  border-radius: 2px;
	  padding-left: 5px;
	  margin-top: 10px;
	} 


</style>