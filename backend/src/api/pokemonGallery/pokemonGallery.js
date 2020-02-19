const restful = require('node-restful')
const mongoose = restful.mongoose

const attackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    damage: { type: Number, required: true, min: 10},
    hitPercentage: { type: Number, required: true, min: 10}
})

const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    life: { type: Number, min: 80, required: true },
    attacks: [attackSchema]
})

module.exports = restful.model('PokemonGallery', pokemonSchema)