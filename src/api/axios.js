import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://server-ecomm-2021.herokuapp.com/'
})

export default instance
