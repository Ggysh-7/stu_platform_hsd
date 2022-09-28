import { createRouter, createWebHashHistory } from 'vue-router';
import routesConfig from './config';


const routes = [
{
  path: '/',
  name: '首页',
  redirect: routesConfig[0].path
},
...routesConfig
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router