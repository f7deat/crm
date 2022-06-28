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
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
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

