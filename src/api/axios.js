import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:3080'
  baseURL: 'https://ekomerse-client.web.app/'
})

export default instance
