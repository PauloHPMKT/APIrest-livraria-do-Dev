const { Encript } = require('../helpers/cripto')
const UsersModel = require('../models/users.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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

    const hashingPass = await Encript.CriptPassword(password)

    const user = new UsersModel({
        name,
        email,
        password: hashingPass,
    })

    const userExsts = await UsersModel.findOne({ email })

    if(userExsts) res.status(422).json({ message: 'Usuário já existe' })
    else user.save()
    
    
    res.send({ message: 'success', user })
}

async function login(req, res) {
    const { email, password } = req.body
    
    if(!email) res.status(401).json({ message: 'Digite um email válido' })
    if(!password) res.status(401).json({ message: 'Digite uma senha válida' })
    
    const userAuth = await UsersModel.findOne({ email })

    console.log(userAuth)

    if(!userAuth) res.status(404).json({ message: 'usuario não encontrado!' })

    const checkPassword = await Encript.ComparePass(password, userAuth.password)
    
    if(!checkPassword) res.status(401).json({ message: 'senha invalida' })

    try{
        const secret = process.env.SECRET_KEY

        const token = jwt.sign(
            {
                id: userAuth._id,
                name: userAuth.name,
                email: userAuth.email,
            },
            secret,
        )

        res.send({ message: 'login realizado', token })

    } catch(err) {
        console.error(err)
        res.status(500).json({ message: '500 server error' })
    }

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
    login,
    updateUser,
    removeUser,
}