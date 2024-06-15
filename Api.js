import  axios  from "axios"

const Api = axios.create({
    baseURL: 'http://172.16.1.67:8080',
})

export default Api;