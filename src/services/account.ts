import { request } from "@umijs/max"

/** 登录接口 POST /api/login/account */
export async function login(body: any) {
    return request(`https://defzone.net/api/user/password-sign-in`, {
      method: 'POST',
      data: body,
    });
}

export async function user() {
    return request(`https://defzone.net/api/user`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('def_token')}`,
        }
    })
}