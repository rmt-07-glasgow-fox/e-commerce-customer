import axios from 'axios'

const init = axios.create({
  baseURL: 'https://funorama-server.herokuapp.com'
})

export default init
