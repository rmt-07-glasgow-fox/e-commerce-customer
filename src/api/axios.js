import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecomersh8.herokuapp.com'
  // baseURL: 'http://localhost:3000'
})

export default instance
