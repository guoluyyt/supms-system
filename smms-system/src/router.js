import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
       path:"/login",
       name :'login',
       component:()=>import('./views/Login/Login.vue')
    },
    {
      path:"/",
      name:"index",
      component:()=>import('./views/Index/Index.vue')
    }
  ]
})
 