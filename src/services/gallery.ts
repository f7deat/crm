import { request } from "@umijs/max";

export async function queryGallery(
    params: {
      /** current */
      current?: number;
      /** pageSize */
      pageSize?: number;
    }
  ) {
    return request('gallery/list', {
      method: 'GET',
      params: {
        ...params,
      }
    });
  }

  export async function addGallery(data: API.Gallery) {
    return request(`gallery/add`, {
        method: 'POST',
        data: data
    })
  }

  export async function uploadPhoto(params: any) {
    return request(`gallery/upload`, {
        method: 'POST',
        data: params
    })
  }