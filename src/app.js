require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const db = require('./db')
//routers imports
const booksRouter = require('./routes/books.router')
const authorsRouter = require('./routes/authors.router')
const usersRouter = require('./routes/users.router')
const sessionsRouter = require('./routes/sessions.router')
//api instances

//db connection
db.dbConnect()

//set morgan
app.use(morgan('dev'))

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