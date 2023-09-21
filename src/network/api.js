import axios from './axios'

export function test() {
    return axios({
        url: '/index/getNumTotal',
        method: 'post'
    })
}