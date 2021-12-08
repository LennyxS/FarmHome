import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

const routes = [{
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/user/logIn',
    name: 'logIn',
    component: LogIn
  },
  {

    path: '/user/signUp',
    name: 'signUp',
    component: SignUp
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
