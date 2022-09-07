const router = require('express').Router()
const BooksController = require('../controllers/books.controller')

router.get('/', (req, res) => {res.send({ message: 'rendizando diretor do arquivo routes' })})

router.get('/livros/GET/', BooksController.getBooks)
router.get('/livros/GET/:id?', BooksController.getBooksById)
//caminho de busca por query: http://localhost:3000/api/livros/busca/GET?editora=Buzz
router.get('/livros/busca/GET', BooksController.listBooksByPublishing)
router.post('/livros/POST', BooksController.createBooks)
router.put('/livros/PUT/:id', BooksController.updateBook)
router.delete('/livros/DELETE/:id', BooksController.removeBook)

module.exports = router