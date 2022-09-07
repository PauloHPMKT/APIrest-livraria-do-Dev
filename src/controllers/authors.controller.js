const AuthorsModel = require('../models/authors.model')

async function getAuthors(req, res) {
    const { id } = req.params
    const object = id ? { _id: id } : null
    const author = await AuthorsModel.find(object) 

    res.send(author)
}

async function createAuthors(req, res) {
    const {
        name,
        nacionalidade,
    } = req.body

    const author = new AuthorsModel({
        name,
        nacionalidade,
    })

    author.save()

    res.send({ message: 'success' })
}

async function updateAuthors(req, res) {
    const { id } = req.params

    const authors = await AuthorsModel.findByIdAndUpdate(
        { _id: id }, req.body, { new: true }
    )

    res.send({ message: 'livro atualizado', authors })
}

async function removeAuthors(req, res) {
    const { id } = req.params

    const remove = await AuthorsModel.deleteOne({ _id: id })

    res.send({ message: 'autor excluido', remove})
}


module.exports = {
    getAuthors,
    createAuthors,
    updateAuthors,
    removeAuthors,
}