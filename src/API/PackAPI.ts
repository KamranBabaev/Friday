import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})


export const PackAPI = {

    async getPack(id:string){
        debugger
        return await instance.get(`cards/card/${id}`)
    }
}