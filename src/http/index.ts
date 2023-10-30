import axios from "axios"

export const $host = axios.create({
    baseURL: 'https://localhost:8082',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Access-Control-Allow-Headers": 'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token',
    }
})
export const $host2 = axios.create({
    baseURL: 'https://localhost:11112/secservice-1.0-SNAPSHOT'
})