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
      icon: 'home',
      name: 'Home',
      path: '/home',
      component: './Home',
    },
    {
      icon: 'message',
      name: 'Conversation',
      path: '/access',
      component: './Access',
    },
    {
      icon: 'fire',
      name: 'Campain',
      path: '/table',
      component: './Table',
    },
    {
      icon: 'contacts',
      name: 'Contact',
      path: '/contact',
      routes: [
        {
          name: 'Contact List',
          path: '/contact/list',
          component: './Contact/List'
        },
        {
          name: 'Contact Center',
          path: '/contact/center',
          component: './Contact/Center',
          hideInMenu: true
        }
      ]
    },
    {
      icon: 'appstore',
      name: 'Application',
      path: '/application',
      component: './Application'
    }
  ],
  npmClient: 'npm',
});

