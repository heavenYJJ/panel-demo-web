import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/user',
  component: resolve => require(['@/views/main/Main.vue'], resolve),
  children: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/views/login/Login.vue'], resolve)
    },
    {
      path: '/user',
      name: 'user',
      component: resolve => require(['@/views/user/UserList.vue'], resolve)
    }
  ]
}]

const router = new VueRouter({routes})

export default router