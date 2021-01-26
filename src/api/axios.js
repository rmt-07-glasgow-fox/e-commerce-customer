import axios from 'axios'

const init = axios.create({
  baseURL: 'http://localhost:3000'
})

export default init
