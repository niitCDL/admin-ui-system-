import axios from 'axios'

export function exportUser() {
  //创建一个局部的axios实例
  const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { Authorization: getToken() }
  })

  return http({
    method: 'get',
    url: 'sys/user/export',
    responseType: 'blob' //相应类型设置为blob，是可以下载文件
  })
}
