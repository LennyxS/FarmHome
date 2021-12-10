import { createRouter, createWebHistory } from "vue-router";
import App                                from './App.vue';

import LogIn    from './components/LogIn.vue'
import SignUp   from './components/SignUp.vue'
import Carrito  from './components/Carrito.vue'


const routes = [{
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/logIn',
        name: "logIn",
        component: LogIn
    },
    {
        path: '/user/signUp',
        name: "signUp",
        component: SignUp
    },
    {
        path: '/carrito',
        name: 'miniCart',
        component: Carrito
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;