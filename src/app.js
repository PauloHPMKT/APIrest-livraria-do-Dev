const express = require('express')
const db = require('./db')
const booksRouter = require('./routes/books.router')
const authorsRouter = require('./routes/authors.router')
const app = express()

db.dbConnect()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', booksRouter)
app.use('/api', authorsRouter)


module.exports = app