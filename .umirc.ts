import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {
  },
  layout: {
    title: 'crm.defzone.net',
  },
  locale: {
    default: 'en-US',
    antd: true
  },
  routes: [
    {
      name: 'Account',
      path: '/account',
      layout: false,
      routes: [
        {
          name: 'Login',
          path: '/account/login',
          component: './Account/Login'
        }
      ]
    },
    {
      path: '/',
      redirect: '/account/login',
    },
    {
      name: 'Home',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
    {
        name: 'Contact',
        path: '/contact',
        component: './Contact',
    },
  ],
  npmClient: 'npm',
});

