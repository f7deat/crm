// 运行时配置

import { UserOutlined } from "@ant-design/icons";
import type { BasicLayoutProps, DefaultFooter } from "@ant-design/pro-components";
import RightContent from "./layout/right-content";
import { user } from "./services/account";
import './style.css';

export interface InitialStateProps {
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
    isAuthenticated: response.succeeded,
    user: response
   };
}

export const layout: BasicLayoutProps = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    logout: () => {},
    rightContentRender: RightContent,
    layout: 'mix'
  };
};