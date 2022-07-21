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
  return request('contact/list', {
    method: 'GET',
    params: {
      ...params,
    }
  });
}

export async function deleteContact(id: string) {
  return request(`contact/delete/${id}`, {
    method: 'POST'
  });
}

export async function queryContact(id: string | undefined) {
  return request(`contact/${id}`);
}
