// 运行时配置

import type { BasicLayoutProps } from "@ant-design/pro-components";
import type { RequestConfig } from "@umijs/max";
import type { RequestOptions } from "./.umi/plugin-request/request";
import RightContent from "./layout/right-content";
import { user } from "./services/account";
import './style.css';

export type InitialStateProps = {
  name: string;
  isAuthenticated: boolean;
  user: API.User;
}

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<InitialStateProps> {
  const response = await user();
  return {
    name: '@umijs/max',
    isAuthenticated: response?.succeeded,
    user: response.data
  };
}

export const layout: BasicLayoutProps = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: true,
    },
    logout: () => { },
    rightContentRender: RightContent,
    layout: 'mix'
  };
};

export const request: RequestConfig = {
  requestInterceptors: [
    (config: RequestOptions) => {
      const token = localStorage.getItem('def_token');
      const baseURL = localStorage.getItem('baseURL');
      config.baseURL = baseURL || '';
      config.headers = {
        authorization: `Bearer ${token}`,
      }
      return config;
    },
  ],
  responseInterceptors: [
    (res) => {
      return res;
    },
  ],
  errorConfig: {

  },
};