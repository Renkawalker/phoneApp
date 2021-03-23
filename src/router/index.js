import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/* import home from '@/components/home' */
import home from "@/components/home"
import shopCar from "@/components/shopCar"
import detailList from "@/components/detailList"
import myShop from "@/components/myShop"
import other from "@/components/other"

Vue.use(Router)

export default new Router({
  routes: [
   /*  {
      path: '/',
      name: 'home',
      component: home
    } */
    {
      path:"/",
      name:home,
      component:home
    },
    {
      path:"/shopCar",
      name:shopCar,
      component:shopCar
    },
    {
      path:"/detailList",
      name:detailList,
      component:detailList
    },
    {
      path:"/myShop",
      name:myShop ,
      component:myShop 
    },
    {
      path:"/other",
      name:other ,
      component:other 
    },

  ]
})
