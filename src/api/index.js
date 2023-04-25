import axios from '@/utils/axios'

export function getstatistics1() {
  return axios.get('/sys/index/statistics1')
}

export function getstatistics2() {
  return axios.get('/sys/index/statistics2')
}

export function getstatistics3() {
  return axios.get('/sys/index/statistics3')
}
