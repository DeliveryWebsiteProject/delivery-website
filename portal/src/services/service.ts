import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
})

export default {
  async get<T>(url: string, params = {}, options = {}): Promise<T | undefined> {
    const { data } = await instance.get(url, {
      params,
      ...options,
    })

    return data
  },

  async post<T>(url: string, data: object): Promise<T | undefined> {
    const { data: returnedData } = await instance.post(url, data)

    return returnedData
  },

  async put<T>(url: string, data: object): Promise<T | undefined> {
    const { data: returnedData } = await instance.put(url, data)

    return returnedData
  },

  async delete<T>(url: string): Promise<T | undefined> {
    const { data: returnedData } = await instance.delete(url)

    return returnedData
  },
}