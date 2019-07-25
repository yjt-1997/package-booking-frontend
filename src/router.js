import VueRouter from 'vue-router'
import Add from './views/Add'
import Home from './views/Home'
import Order from './views/Order'
import List from './components/List'
import Vue from "vue";

Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/', redirect: '/List' },
      
      { path: '/List', component: List },
    ]
  },
  { path: '/Add', component: Add },
  { path: '/Order', component: Order },

];
export default new VueRouter({
  routes,
});