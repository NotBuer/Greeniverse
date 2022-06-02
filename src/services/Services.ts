import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://greeniverse.herokuapp.com/'
})

export const login = async(url: any, info: any, setDado: any) => {
    const answer = await api.post(url, info)
    setDado(answer.data.token)
}

export const registerUser = async(url: any, info: any, setDado: any) => {
    const answer = await api.post(url, info)
    setDado(answer.data)
}