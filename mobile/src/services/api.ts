import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.55.103:3333'
})

export default api