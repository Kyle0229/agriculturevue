import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Items from '@/components/Items'
import Order from '@/components/Order'
import Appointment from '@/components/Appointment'
import Cart from '@/components/Cart'
import Admin from '@/components/Admin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/item/:id',
      name: 'Items',
      component: Items
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/appointment',
      name: 'Appointment',
      component: Appointment
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
