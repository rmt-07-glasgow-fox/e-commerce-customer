import axios from 'axios'

const api = axios.create({
  baseURL: 'https://r-ecom-cms-server.herokuapp.com'
})

export default api
