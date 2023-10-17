import service from './service'

export default {
  async addPhoto(data: FormData): Promise<Photo | undefined> {
    return service.post<Photo>('/photos', data, {
      'Content-Type': 'multipart/form-data'
    });
  },

  async downloadPhoto(id: string): Promise<any> {
    return service.get(`/photos/${id}`, {
      'responseType': 'arraybuffer',
    })
  }
}