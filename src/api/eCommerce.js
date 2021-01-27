const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://e-commerce-cms-wow.herokuapp.com'
})

module.exports = instance
