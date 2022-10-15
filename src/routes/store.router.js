const router = require('express').Router()
const StoreController = require('../controllers/stores.controller')


router.post('/store/register', StoreController.createStore)

module.exports = router