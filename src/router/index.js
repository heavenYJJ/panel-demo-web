import Vue from 'vue';
import VueRouter from 'vue-router';
import 'normalize.css'

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: resolve => require(['@/views/main/Main.vue'], resolve)
}]

const router = new VueRouter({routes})

export default router