const express = require('express')
const auth = require('./auth')

module.exports = function(server){

    //Definir URL base para todas as rotas
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    //protectedApi.use(auth)

    //Rotas da Galeria Pokemon
    const PokemonGallery = require('../api/pokemonGallery/pokemonGalleryService')
    PokemonGallery.register(protectedApi, '/pokemonGallery')

    
    const User = require('../api/user/userService')
    User.register(protectedApi, '/User')
    

    /*
     * Rotas abertas
     */

    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/AuthService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}