import axios from 'axios'

const development = 'http://localhost:3000'
// const production = ''
const instance = axios.create({
  baseURL: development
})

export default instance
