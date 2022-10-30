<template>
    <div class="todo-footer" v-show="total">
       <label>
        <!-- checked 为checkbox的值,true为勾选,false为未勾选 -->
           <input type="checkbox" v-model="isAll" />
       </label>
       <span>
           <span>已完成{{todoTotal}}</span> / 全部{{total}}
       </span>
       <button class="btn btn-danger" @click="clearAll">清除已完成的任务</button>
   </div> 
</template>

<script>
export default {
    name:'myFooter',
    props:['todos','checkAllTodo','clearTodo'],
    computed:{
        total(){
            return this.todos.length
        },
        todoTotal(){
            let i = 0
            this.todos.forEach(todo => {
                if(todo.done){
                    i++
                }
            });
            return i
        },
        //判断已完成的todo和全部的todo是否相等,如果相等 则勾选已完成框
        isAll:{
            get(){
                return this.total === this.todoTotal && this.total > 0
            },
            set(value){
                console.log(value);
                this.checkAllTodo(value)
            }
        }
    },
    methods:{
        // checkAll(e){
        //     this.checkAllTodo(e.target.checked)
        //    }
        
           clearAll(){
            this.clearTodo()
           }
        }
    }


</script>

<style>
 /* Footer */
 .todo-footer {
       height: 40px;
       line-height: 40px;
       padding-left: 6px;
       margin-top: 5px;
   }
   .todo-footer label{
       display: inline-block;
       margin-right: 20px;
       cursor: pointer;
   }
   .todo-footer label input{
       position: relative;
       top: 1px;
       vertical-align: middle;
       margin-right: 5px;
   }
 
   .todo-footer button{
       float: right;
       margin-top: 5px;
   }


</style>