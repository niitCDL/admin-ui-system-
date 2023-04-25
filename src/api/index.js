import axios from '@/utils/axios'

export function getstatistics1() {
  return axios.get('/sys/index/statistics1')
}

export function getstatistics2(type) {
  return axios.get('/sys/index/statistics2?type=' + type)
}

export function getstatistics3() {
  return axios.get('/sys/index/statistics3')
}

export function getstatistics4() {
  return axios.get('/sys/index/statistics4')
}
