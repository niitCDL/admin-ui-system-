import nProgress from 'nprogress'

// 封装消息提示组件
export function toast(message, type = 'success', duration = 1000) {
  ElNotification({
    message,
    type,
    duration
  })
}

// 封装模态弹框组件
export function showModal(content = '提示内容', type = 'warning', title = '') {
  return ElMessageBox.confirm(content, title, {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type
  })
}

export function msg(content = '提示内容', type = 'success', duration = 1000) {
  ElMessage({
    message: content,
    type: type,
    duration: duration
  })
}

//显示全局进度条
export function showFullLoading() {
  nProgress.start()
}

//隐藏全局进度条
export function hideFullLoading() {
  nProgress.done()
}

//将query对象转成url参数
export function queryParams(query) {
  let q = []
  for (const key in query) {
    if (query[key] != null && query[key] != '') {
      q.push(`${key}=${encodeURIComponent(query[key])}`)
    }
  }
  console.log(q)
  let r = q.join('&')
  r = r ? '?' + r : ''
  return r
}
