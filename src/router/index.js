import Vue from 'vue';
import Router from 'vue-router';

// pages
// import Dashboard from '@/pages/Dashboard';
// import Posts from '@/pages/Posts';
// import Post from '@/pages/Post';
// import AddNewPost from '@/pages/AddNewPost';
// import User from '@/pages/User';
// import Photos from '@/pages/Photos';
// import SearchUsers from '@/pages/SearchUsers';
// import NotFoundPage from '@/pages/404';

const Dashboard = () => import('@/pages/Dashboard');
const Posts = () => import('@/pages/Posts');
const Post = () => import('@/pages/Post');
const AddNewPost = () => import('@/pages/AddNewPost');
const User = () => import('@/pages/User');
const Photos = () => import('@/pages/Photos');
const SearchUsers = () => import('@/pages/SearchUsers');
const NotFoundPage = () => import('@/pages/404');

Vue.use(Router);

// eslint-disable-next-line import/prefer-default-export
export function createRouter() {
  return new Router({
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
        path: '/post-:id',
        name: 'Post',
        component: Post,
        props: true,
      },
      {
        path: '/add-new-post',
        name: 'AddNewPost',
        component: AddNewPost,
      },
      {
        path: '/user-:id',
        name: 'User',
        component: User,
        props: true,
      },
      {
        path: '/photos',
        name: 'Photos',
        component: Photos,
      },
      {
        path: '/search-users',
        name: 'SearchUsers',
        component: SearchUsers,
      },
      {
        path: '*',
        name: '404',
        component: NotFoundPage,
      },
    ],
  });
}
