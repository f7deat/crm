import type { RequestConfig } from "@umijs/max";
import type { RequestOptions } from "./.umi/plugin-request/request";
import RightContent from "./layout/right-content";
import { user } from "./services/account";
import './style.css';
import { RunTimeLayoutConfig } from "@umijs/max";

export type InitialStateProps = {
  name: string;
  user: API.User;
}

export async function getInitialState(): Promise<InitialStateProps> {
  const response = await user();
  return {
    name: '@umijs/max',
    user: response
  };
}

export const layout: RunTimeLayoutConfig = () => {
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