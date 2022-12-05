import axios from 'axios'
import { nanoid } from 'nanoid'
export default  {
    namespaced:true, 
    actions: {
        selectName(context,value){
            if(value.name.indexOf('邱') === 0){
                context.commit('ADDOBJ',value)
            }else{
                alert('只有输入姓邱的才能添加')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADDOBJ',{id:nanoid(),name:response.data})
                },
            error =>{
                alert(error.message)
            }
            )
        }

    },
    mutations: {
        ADDOBJ(state, obj) {
            state.personList.unshift(obj)
        }
    },
    state: {
        personList: [{ id: '001', name: 'qiubin' }]
    },
    getters: {
        fristName(state){
            return state.personList[0].name

        }
    }
}