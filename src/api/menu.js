import axios from '@/utils/axios'

export function getNav() {
  return axios.get('/sys/menu/nav')
}

export function getAuthority() {
  return axios.get('/sys/menu/authority')
}

export function getMenuList() {
  return axios.get('/sys/menu/list')
}
