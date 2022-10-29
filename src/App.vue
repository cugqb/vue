<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <myHeader :addTodo="addTodo"/>
        <myList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <myFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearTodo="clearTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
import myFooter from './components/myFooter'
import myList from './components/myList'
import myHeader from './components/myHeader'

export default {
  name: 'App',
  components: {myFooter,myList,myHeader},
  data(){
        return{
            todos:[
            //定义数据类型
            {id:'001',title:'吃饭',done:true},
            {id:'002',title:'睡觉',done:false},
            {id:'003',title:'上网',done:true}
            ]
        }
        },
  methods: {
    //添加数据项
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    //勾选or取消勾选
    checkTodo(id){
      this.todos.forEach((todo) => {
        if(todo.id === id) todo.done = !todo.done
      });

    },
    //删除todo对象
    deleteTodo(id){
      //filter过滤成一个新的数组,需要重新赋值给todos数组
      this.todos = this.todos.filter(todo=>todo.id !==id)
    },
    //全选or取消全选函数
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })

    },
    //清楚已完成的todo   wwwwwww
    clearTodo(){
      this.todos = this.todos.filter(todo => todo.done !== true)
    }

  },

}
</script>

<style>
/* base */
body {
     background: #fff;
   }

   .btn {
     display: inline-block;
     padding: 4px 12px;
     margin-bottom: 0;
     font-size: 14px;
     line-height: 20px;
     text-align: center;
     vertical-align: middle;
     cursor: pointer;
     box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
     border-radius: 4px;
   }

   .btn-danger {
     color: #fff;
     background-color: #da4f49;
     border: 1px solid #bd362f;
   }

   .btn-danger:hover {
     color: #fff;
     background-color: #bd362f;
   }

   .btn:focus {
     outline: none;
   }

   .todo-container {
     width: 600px;
     margin: 0 auto;
   }
   .todo-container .todo-wrap {
     padding: 10px;
     border: 1px solid #ddd;
     border-radius: 5px;
   }

</style>
