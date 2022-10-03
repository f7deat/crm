import { request } from "@umijs/max";

export async function queryApplication() {
    return request(`appsettings/list`);
}