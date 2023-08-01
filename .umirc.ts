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
  history: {
    type: 'hash'
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
      component: './Contact/List'
    },
    {
      name: 'setting',
      path: '/contact/setting/:id',
      component: './Contact/Setting',
      hideInMenu: true
    },
    {
      name: 'center',
      path: '/contact/center/:id',
      component: './Contact/Center',
      hideInMenu: true
    },
    {
      icon: 'appstore',
      name: 'applications',
      path: '/applications',
      routes: [
        {
          path: '/applications',
          component: './Application'
        },
        {
          name: 'sendGrid',
          path: '/applications/sendgrid',
          component: './Application/sendgrid',
          hideInMenu: true
        }
      ]
    },
    {
      icon: 'appstore',
      name: 'gallery',
      path: '/gallery',
      component: './Gallery',
    },
    {
      icon: 'appstore',
      name: 'gallery',
      path: '/gallery/center/:id',
      component: './Gallery/Center',
      hideInMenu: true
    }
  ],
  npmClient: 'npm',
});

