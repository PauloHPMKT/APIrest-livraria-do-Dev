const router = require('express').Router()
const BooksController = require('../controllers/books.controller')

router.get('/', (req, res) => {res.send({ message: 'rendizando diretor do arquivo routes' })})

router.get('/books/', BooksController.getBooks)
router.get('/books/:id?', BooksController.getBooksById)
//caminho de busca por query: http://localhost:3000/api/livros/busca/GET?editora=Buzz
router.get('/nooks/search', BooksController.listBooksByPublishing)
router.post('/books/register', BooksController.createBooks)
router.put('/books/:id', BooksController.updateBook)
router.delete('/books/:id', BooksController.removeBook)

module.exports = router