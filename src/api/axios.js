import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-cms-rivan.herokuapp.com/'
  // baseURL: 'http://localhost:3000/'
})

export default instance
