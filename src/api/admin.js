import axios from '@/utils/axios'

export function getInfo() {
  return axios.post('/sys/user/info')
}

export function rePassword(data) {
  return axios.post('/sys/user/password', data)
}

//分页查询
export function getUserPage(page, limit) {
  return axios.get(`/sys/user/page?page=${page}&limit=${limit}`)
}

//保存用户
export function saveUser(data) {
  return axios.post('/sys/user', data)
}

//修改用户
export function updateUser(data) {
  return axios.put('/sys/user', data)
}

//修改用户状态
export function changeStatus(id, status) {
  return axios.post(`/sys/user/status?id=${id}&status=${status}`)
}

//删除用户
export function deleteUser(id) {
  return axios.delete(`/sys/user/${id}`)
}

//批量删除用户
export function deleteSelectAllUser(ids) {
  console.log(ids)
  console.log(ids.length)
  ids = !Array.isArray(ids) ? [ids] : ids
  return axios.post('/sys/user/deletemulti', ids)
}

//导入用户
export function importUser(file) {
  // 创建一个 FormData 对象
  const formData = new FormData()
  formData.append('file', file.raw)
  return axios.post('/sys/user/import', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
