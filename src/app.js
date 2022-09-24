require('dotenv').config()
const express = require('express')
const db = require('./db')
const cors = require('cors')
const app = express()

//routers imports
const booksRouter = require('./routes/books.router')
const authorsRouter = require('./routes/authors.router')
const usersRouter = require('./routes/users.router')
const sessionsRouter = require('./routes/sessions.router')
//api instances

//db connection
db.dbConnect()

//set api
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//routes
app.use('/api', booksRouter)
app.use('/api', authorsRouter)
app.use('/api', usersRouter)
app.use('/api', sessionsRouter)


module.exports = app