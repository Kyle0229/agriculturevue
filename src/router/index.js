import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Items from '@/components/Items'
import Order from '@/components/Order'
import Appointment from '@/components/Appointment'
import Cart from '@/components/Cart'
import Admin from '@/components/Admin'
import Infomation from '@/components/Infomation'
import Login from '@/components/Login'
import Register from '@/components/Register'
import UserList from '@/components/UserList'
import Payment from '@/components/Payment'
import AddGoods from '@/components/AddGoods'
import SudGoods from '@/components/SudGoods'
import SudGoodsBySid from '@/components/SudGoodsBySid'
import UpdateGoods from '@/components/UpdateGoods'
import UpdateInformation from '@/components/UpdateInformation'
import UpdateUser from '@/components/UpdateUser'
import UpdateShoper from '@/components/UpdateShoper'
import Welcome from '@/components/Welcome'
import SudInformation from '@/components/SudInformation'
import SudInformationBySid from '@/components/SudInformationBySid'
import AddInformation from '@/components/AddInformation'
import ShoperLogin from '@/components/ShoperLogin'
import ShoperList from '@/components/ShoperList'
import AdminList from '@/components/AdminList'
import AdminAdmin from '@/components/AdminAdmin'
import SudUser from '@/components/SudUser'
import SudShoper from '@/components/SudShoper'
import AddUser from '@/components/AddUser'
import AddShoper from '@/components/AddShoper'
import ShoperRegister from '@/components/ShoperRegister'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shoperRegister',
      name: 'ShoperRegister',
      component: ShoperRegister
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
      path: '/appointment/:sid',
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
      component: Admin,
      children: [
        {path: '/',component:Welcome},
        {path: 'addgoods',component:AddGoods},
        {path: 'sudgoodsbysid',component:SudGoodsBySid},
        {path: 'updategoods/:gid',component:UpdateGoods},
        {path: 'sudinformationbysid',component:SudInformationBySid},
        {path: 'addinformation',component:AddInformation},
        {path: 'shoperList',component:ShoperList}
      ]
    },
    {
      path: '/adminadmin',
      name: 'AdminAdmin',
      component: AdminAdmin,
      children: [
        {path: '/',component:Welcome},
        {path: 'addgoods',component:AddGoods},
        {path: 'sudgoods',component:SudGoods},
        {path: 'updategoods/:gid',component:UpdateGoods},
        {path: 'updateI/:iid',component:UpdateInformation},
        {path: 'updateU/:uid',component:UpdateUser},
        {path: 'updateS/:sid',component:UpdateShoper},
        {path: 'sudinformation',component:SudInformation},
        {path: 'addinformation',component:AddInformation},
        {path: 'adminList',component:AdminList},
        {path: 'suduser',component:SudUser},
        {path: 'sudshoper',component:SudShoper},
        {path: 'adduser',component:AddUser},
        {path: 'addshoper',component:AddShoper}
      ]
    },
    {
      path: '/info',
      name: 'Infomation',
      component: Infomation
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/userList',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/shoperlogin',
      name: 'ShoperLogin',
      component: ShoperLogin
    }
  ]
})
