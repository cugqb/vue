import VueRouter from 'vue-router'
//引入组件
import myAbout from '../pages/about'
import myHome from '../pages/home'
import houseWork from '../pages/houseWork'
import houseFood from '../pages/houseFood'
import myDetail from '../pages/Detail'
//创建路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: myAbout
        },
        {
            name: 'jia',
            path: '/home',
            component: myHome,
            children: [
                {
                    name: 'jiawu',
                    path: 'houseWork',
                    component: houseWork,
                    meta: { isAuth: true },
                    children: [
                        {
                            //如果使用params传递参数,需要配置name，还需要将path配置相应的占位符
                            name: 'xiangqing',
                            path: 'myDetail/:id/:name',
                            component: myDetail,
                            //props的第二种写法,值为布尔值，当值为真时，就会把该路由组件收到
                            //的所有params参数，以props的形式传给Detail组件()
                            props: true
                        }
                    ]
                },
                {
                    name: 'shiwu',
                    path: 'houseFood',
                    component: houseFood,
                    meta: { isAuth: true },
                    //独享路由守卫,专门为单个路由配置
                    // beforeEnter: (to, from, next) => {
                        
                    //     if (to.meta.isAuth) {
                    //         if (localStorage.getItem('school') === 'cug') {
                    //             next()
                    //         } else {
                    //             alert('学校名称不对,没有权限查看')
                    //         }

                    //     } else {
                    //         next()
                    //     }

                    // }
                },
            ]
        },
    ]

})

// router.beforeEach((to,from,next)=>{
//     console.log('前置路由守卫',to,from);
//     if(to.meta.isAuth){
//         if(localStorage.getItem('school')==='cug'){
//             next()
//         }else{
//             alert('学校名称不对,没有权限查看')
//         }

//     }else{
//         next()
//     }

//     }
// )

export default router