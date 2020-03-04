const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const errorHandler = require('../common/errorHandler')
const env = require('../../.env')

const emailRegex = /\S+@\S+.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

/*
User.methods(['get', 'post', 'put', 'delete'])
User.updateOptions({ new: true, runValidators: true })
User.after('post', errorHandler ).after('put', errorHandler)

User.route('count', (req, res, next) => {
    User.count((error, value) => {
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({values})
        }
    })
})
*/

const sendErrorsFromDB = (res, dbErrors) =>{
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}

const login = (req, res, next) => {
    const email = req.body.email || ''
    const password = req.body.password || ''

    User.findOne({ email }, (err, user) =>{
        if(err){
            return sendErrorsFromDB(res, err)
        }else if(user && bcrypt.compareSync(password, user.password)){
            const token = jwt.sign(user, env.authSecret, {
                expiresIn: '1 hour'
            })
            const { name, email, level } = user
            res.json({ name, email, token, level })
        }else{
            return res.status(400).send({ errors: ['Usuário/Senha inválidos'] })
        }
    })
}

const validateToken = (req, res, next) =>{
    const token = req.body.token || ''

    jwt.verify(token, env.authSecret, function ( err, decoded){
        return res.status(200).send({ valid: !err })
    })
}

const signup = (req, res, next) =>{
    const name = req.body.name || ''
    const email = req.body.email || ''
    const password = req.body.password || ''
    const confirmPassword = req.body.confirm_password || ''
    const level = req.body.level || ''

    if(!email.match(emailRegex)){
        return res.status(400).send({ errors: ['O e-mail informado está invalido']})
    }

    if(!password.match(passwordRegex)){
        return res.status(400).send({
            errors: [
                'Senha precisa ter uma letra maiúscula, uma letra minúscula, um número, um caractere especial(@#$%) e tamanho entre 6-20.'
            ]
        })
    }

    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    if(!bcrypt.compareSync(confirmPassword, passwordHash)){
        return res.status(400).send({errors: ['Senhas não conferem.']})
    }

    User.findOne({email}, (err, user) =>{
        if(err){
            return sendErrorsFromDB(res, err)
        }else if(user){
            return res.status(400).send({errors: ['Usúario já cadastrado.']})
        }else{
            const newUser = new User({ name, email, password: passwordHash, level })
            newUser.save(err => {
                if(err){
                    return sendErrorsFromDB(res, err)
                }else{

                    login(req, res, next)
                }
            })
        }
    })
}

module.exports = { login , signup, validateToken }