import axios from 'axios'

const BASE_URL = 'https://reqres.in'

const instance = axios.create({
  baseURL: `${BASE_URL}/api`
})

export default instance
