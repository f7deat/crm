import { request } from "@umijs/max";

export async function queryGallery(
  params: {
    current?: number;
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
  });
}

export async function uploadPhoto(params: any) {
  return request(`gallery/upload`, {
    method: 'POST',
    data: params
  });
}

export async function queryPhoto(id?: string) {
  return request(`gallery/list-photo/${id}`);
}

export async function deletePhoto(id: string) {
  return request(`gallery/delete-photo/${id}`, {
    method: 'POST'
  });
}

export async function deleteGallery(id: string) {
  return request(`gallery/delete/${id}`, {
    method: 'POST'
  });
}

export async function queryGetGallery(id: string) {
  return request(`gallery/${id}`);
}