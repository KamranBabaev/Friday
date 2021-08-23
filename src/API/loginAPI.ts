import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0',
    withCredentials: true
})

type requestPostType = any


export const LoginAPI = {
    authMe(email: string, password: string, rememberMe: boolean) {
        return instance.post<requestPostType>('/auth/login', {
            email,
            password,
            rememberMe
        })
    }
}
export const RegistrationAPI = {
    regMe(email: string, password: string) {
        return instance.post<requestPostType>('/auth/register', {
            email,
            password,
        })
    }
}
export const RestorePasswordAPI = {
    restorePassword(password: string, resetPasswordToken: string) {
    debugger
        return instance.post<requestPostType>('/auth/set-new-password', {
            password,
            resetPasswordToken
        })
    },
    async sendEmailForUpdatePassword(email: string, from: string, message: string) {
        const pr = await axios.post<requestPostType>("https://neko-back.herokuapp.com/2.0/auth/forgot", {email, from, message}, {withCredentials: true})
        return pr
    }
}

