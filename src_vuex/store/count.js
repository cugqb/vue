export default {
    namespaced:true,
    actions: {  
        oddjia(context, value) {
            //将业务逻辑判断写在actions处
            if (value % 2) {
                context.commit('ODDJIA', value)
            }

        },
        waitjia(context, value) {
            setTimeout(() => {
                context.commit('WAITJIA', value)
            }, 500);

        },
    },
    mutations: {
        
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
        ODDJIA(state, value) {
            state.sum += value
        },
        WAITJIA(state, value) {
            state.sum += value
        },
    },
    state: {
        sum: 0,
        student: '邱斌',
        age: 23,
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}