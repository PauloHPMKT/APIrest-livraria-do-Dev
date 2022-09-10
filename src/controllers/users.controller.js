const UsersModel = require('../models/users.model')

async function getUsers(req, res) {
    const { id } = req.params
    const object = id ? { _id: id } : null
    const user = await UsersModel.find(object) 

    res.send(user)
}

async function getUserByName(req, res) {
    const userName = req.requry.user

    UsersModel.find({ "usuario": userName }, {}, (err, user) => {
        res.send(user)
    })
}

async function createUser(req, res) {
    const {
        name,
        email,
        password,
    } = req.body

    const user = new UsersModel({
        name,
        email,
        password,
    })

    user.save()

    res.send({ message: 'success' })
}

async function updateUser(req, res) {
    const { id } = req.params

    const user = await UsersModel.findByIdAndUpdate(
        { _id: id }, req.body, { new: true }
    )

    res.send({ message: 'livro atualizado', user })
}

async function removeUser(req, res) {
    const { id } = req.params

    const remove = await UsersModel.deleteOne({ _id: id })

    res.send({ message: 'usuario excluido', remove})
}


module.exports = {
    getUsers,
    getUserByName,
    createUser,
    updateUser,
    removeUser,
}