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

export async function deleteContact(id: string) {
  const token = localStorage.getItem('def_token');
  const headers = {
    authorization: `Bearer ${token}`,
  };
  return request(`https://defzone.net/api/contact/delete/${id}`, {
    method: 'POST',
    headers: headers
  });
}