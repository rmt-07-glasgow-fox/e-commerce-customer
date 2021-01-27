import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://server-ecomm-2021.herokuapp.com/'
})

export default instance
