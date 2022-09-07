const mongoose = require('mongoose')

function dbConnect() {
    mongoose.connect('mongodb://localhost:27017/library')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('connected to database')
    })

    db.on('error', console.error.bind(console, 'conection error: '))
}

module.exports = {
    dbConnect
}