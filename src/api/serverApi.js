import axios from 'axios'

const SERVER = process.env.VUE_APP_SERVER || 'http://localhost:3000'

const serverAPI = axios.create({
  baseURL: SERVER
})

export default serverAPI
