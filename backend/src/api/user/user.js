const restful = require('node-restful')
const mongoose = restful.mongoose

const pokeUserSchema = new mongoose.Schema({
    pokemonId: { type: Number , required: true }
})

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 6, max: 16, required: true },
    pokemons: [pokeUserSchema],
    cash: { type: Number, min: 0, required: true},
    level: { type: Number }
})

module.exports = restful.model('User', userSchema)