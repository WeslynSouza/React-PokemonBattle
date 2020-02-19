const express = require('express')

module.exports = function(server){

    //Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas da Galeria Pokemon
    const PokemonGallery = require('../api/pokemonGallery/pokemonGalleryService')
    PokemonGallery.register(router, '/pokemonGallery')
}