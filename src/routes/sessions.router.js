const router = require('express').Router()
const SessionsController = require('../controllers/sessions.controller')
const jwt = require('../middlewares/auth-middleware')

router.get('/session', SessionsController.getSession)
router.post('/session', SessionsController.createSession)
router.put('/session')
router.delete('/session')

module.exports = router

/*router.get('/', (req, res) => {res.send({ message: 'rendizando diretor do arquivo routes' })})

router.get('/usuarios:id?', UsersController.getUsers)
//caminho de busca por query: http://localhost:3000/api/livros/busca?editora=Buzz
router.get('/usuarios/busca', UsersController.getUserByName)
router.post('/usuarios', UsersController.createUser)
router.post('/usuariosauth', UsersController.login)
router.delete('/usuarios/:id', UsersController.removeUser)

//rota provada para teste
router.put('/usuarios/PUT/:id', jwt.authMiddleware, UsersController.updateUser)

module.exports = router*/