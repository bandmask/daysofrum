const hasToken = () => {
  return !!localStorage.getItem('bearerToken')
}

const getToken = () => {
  return localStorage.getItem('bearerToken')
}

const setToken = token => {
  localStorage.setItem('bearerToken', token)
}

const removeToken = () => {
  localStorage.removeItem('bearerToken')
}

export default {
  hasToken: hasToken,
  getToken: getToken,
  setToken: setToken,
  removeToken: removeToken
}
