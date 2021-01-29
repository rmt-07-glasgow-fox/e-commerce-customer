import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://my-app-ecommerce.herokuapp.com/',
  headers: {
    access_token: localStorage.getItem('access_token')
  }
})

export default instance
