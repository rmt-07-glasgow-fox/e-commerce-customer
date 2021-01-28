import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://h8-e-commerce-server.herokuapp.com/api'
})

export default instance
