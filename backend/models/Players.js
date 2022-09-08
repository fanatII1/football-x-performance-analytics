const mongoose = require('mongoose')

//model for players database
let playersModel = mongoose.Schema({
        name: String,
        dateOfBirth: String,
        nationality: String,
        position: String,
        player_image: String,
        stats: Array
}, {collection: 'Players'})

module.exports = mongoose.model('PlayersModel', playersModel)