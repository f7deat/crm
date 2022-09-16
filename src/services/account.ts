import { request } from "@umijs/max"

/** 登录接口 POST /api/login/account */
export async function login(body: any) {
    return request(`user/password-sign-in`, {
      method: 'POST',
      data: body,
      baseURL: body.baseURL
    });
}

export async function user() {
    return request(`user`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('def_token')}`,
        }
    })
}