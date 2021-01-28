import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://ecommerce-server-2424.herokuapp.com'
  baseURL: 'http://localhost:3000'
})

export default instance
