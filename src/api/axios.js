import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-customer-mine.herokuapp.com'
})

export default instance
