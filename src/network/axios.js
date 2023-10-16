import originAxios from 'axios'

export default function axios(option) {
	return new Promise((resolve, reject) => {
		const instance = originAxios.create({
			// baseURL: import.meta.env.VITE_APP_API_URL,
			baseURL: 'http://172.16.1.137:8081',
			timeout: 5000
		});
		instance.interceptors.request.use(config => {
			//token
			config.headers.Authorization = sessionStorage.getItem('token')
			config.headers['Client-Type'] = 'PC'
			return config
		}, error => {
			return error
		})
		// 接口错误拦截
		instance.interceptors.response.use(res => {
			if (res.data.status == 200) {
				return res.data
			} else {
				//报错信息
				return Promise.reject(res)
			}

		})
		//传入对象进行网络请求
        instance(option).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
