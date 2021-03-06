import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {
  },
  layout: {
    title: 'DefZone.Net',
  },
  locale: {
    default: 'en-US',
    antd: true
  },
  routes: [
    {
      name: 'account',
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
      icon: 'home',
      name: 'home',
      path: '/home',
      component: './Home',
    },
    {
      icon: 'message',
      name: 'conversation',
      path: '/access',
      component: './Access',
    },
    {
      icon: 'fire',
      name: 'campain',
      path: '/table',
      component: './Table',
    },
    {
      icon: 'contacts',
      name: 'contact',
      path: '/contact',
      routes: [
        {
          name: 'list',
          path: '/contact/list',
          component: './Contact/List'
        },
        {
          name: 'center',
          path: '/contact/center/:id',
          component: './Contact/Center',
          hideInMenu: true
        },
        {
          name: 'setting',
          path: '/contact/setting/:id',
          component: './Contact/Setting',
          hideInMenu: true
        }
      ]
    },
    {
      icon: 'appstore',
      name: 'application',
      path: '/application',
      component: './Application'
    }
  ],
  npmClient: 'npm',
});

