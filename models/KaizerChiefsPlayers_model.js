const mongoose = require('mongoose');

let kc_players_schema = mongoose.Schema({
    playersData : Array,
    name: String,
    club: String,
    dateOfBirth: String,
    nationality: String,
    position: String,
    player_image: String,
    stats: Array
}, 
{collection: "KaizerChiefs"});

module.exports = mongoose.model('kc_players_model', kc_players_schema);