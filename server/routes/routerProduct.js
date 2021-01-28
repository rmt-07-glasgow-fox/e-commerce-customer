const router = require('express').Router()
const productController = require('../controller/productController')
const { authorization } = require('../middlewares/auth')

router.get('/product', productController)


module.exports = router