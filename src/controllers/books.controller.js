const { throwNewError, httpStatusCode, successStatus } = require('../config/constants')
const BooksModel = require('../models/books.model')

async function getBooks(req, res) {
  await BooksModel.find()
    .populate('author')
    .exec((err, books) => {
    res.status(200).json(books)
  })
}

async function getBooksById(req, res) {
  const { id } = req.params

  await BooksModel.findById(id)
    .populate('author', 'name') // popula os dados apenas pelo nome
    .exec((err, livros) => {
      if (err) res.status(400).send({ message: `${err.message}` })
      else res.status(200).send(livros)
    })
}

async function createBooks(req, res) {
  const {...data} = req.body

  const book = new BooksModel({ ...data })

  const bookExists = await BooksModel.findOne(data)

  if (bookExists) {
    res
      .status(httpStatusCode.CONFLICT)
      .json({ error: throwNewError.DUPLICATED_UNIQUE_KEY.message })
    return bookExists
  } else {
    return {
      new_book: book.save(),
      status: res
        .status(httpStatusCode.CREATED)
        .json({ book, message: successStatus.CREATED.message })
    }
  }   
}

async function updateBook(req, res) {
  const { id } = req.params

  const books = await BooksModel.findByIdAndUpdate(
    { _id: id }, req.body, { new: true }
  )

  res.send({ message: 'livro atualizado', books })
}

async function removeBook(req, res) {
  const { id } = req.params

  const remove = await BooksModel.deleteOne({ _id: id })

  res.send({ message: 'livro excluido', remove})
}

async function listBooksByPublishing(req, res) {
  const publishing = req.query.editora
  //caminho de busca por query: http://localhost:3000/api/livros/busca/GET?editora=Buzz
  BooksModel.find({ "editora": publishing }, {}, (err, livros) => {
    res.status(200).send(livros)
  })
}


module.exports = {
  getBooks,
  getBooksById,
  createBooks,
  updateBook,
  removeBook,
  listBooksByPublishing,
}