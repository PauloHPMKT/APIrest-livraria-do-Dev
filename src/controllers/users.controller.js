const { throwNewError, httpStatusCode, successStatus } = require('../config/constants')
const { Encript } = require('../helpers/cripto')
const UsersModel = require('../models/users.model')
const SessionsModel = require('../models/session.model')
const jwt = require('jsonwebtoken')

async function getUsers(req, res) {
    const { id } = req.params
    const object = id ? { _id: id } : null
    const user = await UsersModel.find(object) 
    //verificar abordagem com findById(id, '-password') para omitir a senha do retorno da pesquisa por id
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

    if (!user.name) {
        res.status(httpStatusCode.BAD_REQUEST).json({ message: throwNewError.EMPTY_FIELD_NAME.message })
        return user
    }
    if(!user.email) {
        res.status(httpStatusCode.BAD_REQUEST).json({ message: throwNewError.EMPTY_FIELD_NAME.message })
        return user
    }
    if(!user.password) {
        res.status(httpStatusCode.BAD_REQUEST).json({ message: throwNewError.EMPTY_FIELD_PASSWORD.message })
        return user
    }

    const userExists = await UsersModel.findOne({ email })

    if(userExists) {
        res.status(httpStatusCode.UNPROCESSABLE_ENTITY).json({ error: throwNewError.DUPLICATED_EMAIL.message })
        return userExists
    }

    else user.save()
        
    res.status(httpStatusCode.CREATED).json({ message: successStatus.CREATED.message })    
}

async function login(req, res) {
    const { email, password } = req.body
    
    if(!email) res.status(401).json({ message: 'Digite um email válido' })
    if(!password) res.status(401).json({ message: 'Digite uma senha válida' })
    
    const userAuth = await UsersModel.findOne({ email })

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

        //create a collection pesisting token + userKey
        const session = {
            userKey: userAuth.email,
            jwt: token,
        }

        if (session.userKey === email) SessionsModel.deleteOne({ userKey: session.userKey }).exec()
        
        SessionsModel.create(session)

        res.status(200).send({ 
            userAuth,
            password: userAuth.password = undefined, 
            token 
        })


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

    res.send({ message: 'usuario atualizado', user })
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