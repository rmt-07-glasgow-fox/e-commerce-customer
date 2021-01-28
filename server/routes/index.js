const router = require('express').Router()
const routerProduct = require('./routerProduct')
const routerUser = require('./routerUser')

router.use(routerUser)
router.use(routerProduct)


module.exports = router