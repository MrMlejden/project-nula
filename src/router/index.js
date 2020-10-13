import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Data from '../views/Data.vue';
import Profile from '../views/Profile.vue';
import Todos from '../components/Todos.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/data',
        name: 'Data',
        component: Data
    },
    {
        path: '/todos',
        name: 'Todos',
        component: Todos
    },
    {
        path: '/user/:id',
        name: 'profile',
        component: Profile,
        props: true
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
