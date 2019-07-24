import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/force-directed-graph',
      name: 'force-directed-graph',
      component: () => import(/* webpackChunkName: "about" */ './views/ForceDirectedGraph'),
    },
    {
      path: '/marriage-contract',
      name: 'marriage-contract',
      component: () => import(/* webpackChunkName: "about" */ './views/MarriageContractNetwork'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
