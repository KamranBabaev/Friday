import axios from "axios"

const instance = axios.create({
  baseURL: 'http://localhost:7542/2.0',
  withCredentials: true
})

type requestPostType = any


export const LoginAPI = {
  authMe(email: any, password: string, rememberMe: boolean) {
    return instance.post<requestPostType>('/auth/login', {
      email,
      password,
      rememberMe
    })
  }
}