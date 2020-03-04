const PokemonGallery = require('./pokemonGallery')
const errorHandler = require('../common/errorHandler')

PokemonGallery.methods(['get', 'post', 'put', 'delete'])
PokemonGallery.updateOptions({new : true, runValidators: true})
PokemonGallery.after('post', errorHandler).after('put', errorHandler)

PokemonGallery.route('count', (req, res, next) => {
    PokemonGallery.count((error, value) =>{
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = PokemonGallery