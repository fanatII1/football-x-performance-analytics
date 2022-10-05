const mongoose = require('mongoose')

//model for players database
let playersModel = mongoose.Schema({
        playersData : Array,
        name: String,
        club: String,
        dateOfBirth: String,
        nationality: String,
        position: String,
        league: String,
        age: String,
        foot: String,
        player_image: String,
        stats: Array
}, {collection: 'Players'})

module.exports = mongoose.model('PlayersModel', playersModel)