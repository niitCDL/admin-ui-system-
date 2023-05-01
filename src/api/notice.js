import axios from '@/utils/axios'

export function getNoticePage(page, limit, query = {}) {
  //参数准备，日期范围的组件中，dateValue[0]和[1]可以取出开始和结束时间，其余展开
  let params = { page, limit, ...query }
  let r = queryParams(params)
  console.log(r)
  return axios.get(`/sys/notice/page${r}`)
}

export function saveNotice(data) {
  return axios.post('/sys/notice', data)
}

export function updateNotice(data) {
  return axios.put('/sys/notice', data)
}

export function deleteNotice(id) {
  return axios.delete(`/sys/notice/${id}`)
}

export function deleteSelectAll(ids) {
  console.log(ids)
  console.log(ids.length)
  ids = !Array.isArray(ids) ? [ids] : ids
  return axios.post('/sys/notice/deletemulti', ids)
}
