import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://ecommerce-style-by-manda.herokuapp.com'
})

export default instance
