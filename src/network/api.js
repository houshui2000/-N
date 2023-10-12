import axios from './axios'

export function test() {
    return axios({
        url: '/index/getNumTotal',
        method: 'post'
    })
}

export function weixinLogin(data) {
    return axios({
        url: '/login/wx',
        method: 'post',
        data
    })
}
