const router = require('express').Router()
const UsersController = require('../controllers/users.controller')

router.get('/', (req, res) => {res.send({ message: 'rendizando diretor do arquivo routes' })})

router.get('/usuarios/GET/:id?', UsersController.getUsers)
//caminho de busca por query: http://localhost:3000/api/livros/busca/GET?editora=Buzz
router.get('/usuarios/busca/GET', UsersController.getUserByName)
router.post('/usuarios/POST', UsersController.createUser)
router.post('/usuarios/auth', UsersController.login)
router.delete('/usuarios/DELETE/:id', UsersController.removeUser)

//rota provada para teste
router.put('/usuarios/PUT/:id', UsersController.checkToker, UsersController.updateUser)

module.exports = router