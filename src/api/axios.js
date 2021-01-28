import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://basicanecommerce.herokuapp.com'
})

export default instance
