const mongoose = require('mongoose')

function dbConnect() {
    mongoose.connect(process.env.DB_STRING_CONNECTION)

    const db = mongoose.connection

    db.once('open', () => {
        console.log('connected to database')
    })

    db.on('error', console.error.bind(console, 'conection error: '))
}

module.exports = {
    dbConnect
}