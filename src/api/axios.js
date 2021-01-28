import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-hacktiv8-server.herokuapp.com/'
})

export default instance
