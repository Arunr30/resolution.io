import axios from 'axios'

// Make sure this matches your backend route exactly
const API_URL = 'http://localhost:5001/api/user/'

const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const LOGIN_URL = 'http://localhost:5001/api/user/login'
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const logout = async () => {
  localStorage.removeItem('user')
}
const authService = {
  register,
  logout,
  login
}

export default authService
