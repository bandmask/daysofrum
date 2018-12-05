import tokenHandler from '@/logic/auth/token'

const register = async (authSettings, registerModel) => {
  try {
    var uri = `${authSettings.authority}/register`
    var response = await (await fetch(uri, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ropr-domain-client': authSettings.client
      },
      body: JSON.stringify(registerModel)
    })).json()

    if (response.statusCode === 200) {
      tokenHandler.setToken(response.token)
      return { success: true }
    }
  } catch (exception) {
    console.log(exception)
  }
  return { success: false }
}

const login = async (authSettings, loginModel) => {
  try {
    var uri = `${authSettings.authority}/login`
    var response = await (await fetch(uri, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ropr-domain-client': authSettings.client
      },
      body: JSON.stringify(loginModel)
    })).json()

    if (response.statusCode === 200) {
      tokenHandler.setToken(response.token)
      return { success: true }
    }
  } catch (exception) {
    console.log(exception)
  }
  return { success: false }
}

const logout = () => {
  tokenHandler.removeToken()
}

export default {
  register: register,
  login: login,
  logout: logout
}
