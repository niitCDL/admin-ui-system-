import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // 往header头自动添加token
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText || 'Error'))
    }
    const res = response.data
    if (res.code === 1) {
      // 这里直接把 data 都解析出来了
      return res.data
    }

    //错误提示
    toast(res.msg, 'error')

    //没有权限，如;未登录，登录过期等，需要跳到登录页
    if (res.code === 401) {
      setToken('')
      location.reload()
    }
    return Promise.reject(new Error(res.msg || 'Error'))
  },
  error => {
    toast(error.response.data.msg || '请求失败', 'error')
    return Promise.reject(error)
  }
)

export default service
