import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-customer-mine.web.app'
})

export default instance
