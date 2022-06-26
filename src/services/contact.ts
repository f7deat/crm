import { request } from '@umijs/max';
/** 此处后端没有提供注释 GET /api/v1/queryUserList */
export async function queryContactList(
  params: {
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  }
) {
    const token = localStorage.getItem('def_token');
    const headers = {
      authorization: `Bearer ${token}`,
    };
  return request('https://defzone.net/api/contact/list', {
    method: 'GET',
    params: {
      ...params,
    },
    headers: headers
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: any) {
    return request(`https://defzone.net/api/user/password-sign-in`, {
      method: 'POST',
      data: body,
    });
  }