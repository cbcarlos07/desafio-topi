import axios from 'axios'

const host = 'https://api.github.com'


const api = axios.create({
    baseURL: host
})

export default api