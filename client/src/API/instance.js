import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3333'
  // baseURL: 'https://atomizer-ecommerce.herokuapp.com/'
})

export default instance
