import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://ecom-server-samm021.herokuapp.com'
  // baseURL: 'http://localhost:3000'
})

export default axiosInstance
