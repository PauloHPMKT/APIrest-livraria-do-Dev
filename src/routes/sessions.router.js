const router = require('express').Router()
const SessionsController = require('../controllers/sessions.controller')
const jwt = require('../middlewares/auth-middleware')

router.get('/session', SessionsController.getSession)
router.post('/session', SessionsController.createSession)
router.put('/session', SessionsController.updateSession)
router.delete('/session', SessionsController.removeSession)

module.exports = router

/*
lembrar de bloquear rotas após os testes com a API

router.put('/usuarios/PUT/:id', jwt.authMiddleware, UsersController.updateUser)

module.exports = router*/