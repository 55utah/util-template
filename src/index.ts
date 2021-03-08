// 这里就可以写ts代码了， 配置支持tree-shaking


const time = () => {
  return Date.now()
}

export const getCurrentTime = () => {
  return time()
}
