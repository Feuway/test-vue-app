import Vue from 'vue';
import Router from 'vue-router';

// pages
import Dashboard from '@/pages/Dashboard';
import Posts from '@/pages/Posts';
import Post from '@/pages/Post';
import User from '@/pages/User';
import NotFoundPage from '@/pages/404';

// const Dashboard = () => import('@/pages/Dashboard');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
    },
    {
      path: '/post',
      name: 'Post',
      component: Post,
    },
    {
      path: '/user',
      name: 'User',
      component: User,
    },
    {
      path: '*',
      name: '404',
      component: NotFoundPage,
    },
  ],
});
