import axios from 'axios'

// const development = 'http://localhost:3000'
const production = 'https://server-ecommerce-nur.herokuapp.com/'

const instance = axios.create({
  baseURL: production
})

export default instance
