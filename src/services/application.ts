import { request } from "@umijs/max";

export async function queryApplication() {
    return request(`appsettings/list`);
}

export async function exchangeToken(appId: string, appSecret: string, shortLiveToken: string) {
    return request(`appsetting/facebook/exchange-token`, {
        method: 'POST',
        data: {
            appId, appSecret, shortLiveToken
        }
    })
}

export async function facebookSaveConfig(data: API.FacebookConfig) {
    return request(`appsetting/facebook/save`, {
        method: 'POST',
        data: data
    });
}

export async function queryConfig(key: string) {
    return request(`appsetting/config/${key}`);
}