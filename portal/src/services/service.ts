import axios from 'axios'

const authorizationHeader = { 'Authorization': 'Bearer ' + localStorage.getItem('token') }

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
})

export default {
  async get<T>(url: string, params = {}, options = {}): Promise<T | undefined> {
    const { data } = await instance.get(url, {
      params,
      ...options,
      headers: authorizationHeader,
    })

    return data
  },

  async post<T>(url: string, data: object, headers?: {}): Promise<T | undefined> {
    const { data: returnedData } = await instance.post(url, data, {
      headers: {
        ...authorizationHeader,
        ...headers
      }
    })

    return returnedData
  },

  async put<T>(url: string, data?: object): Promise<T | undefined> {
    const { data: returnedData } = await instance.put(url, data, {
      headers: authorizationHeader,
    })

    return returnedData
  },

  async delete<T>(url: string): Promise<T | undefined> {
    const { data: returnedData } = await instance.delete(url, {
      headers: authorizationHeader,
    })

    return returnedData
  },
}