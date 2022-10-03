const mongoose = require('mongoose');

let orlando_schema = mongoose.Schema({
    playersData : Array,
    name: String,
    club: String,
    dateOfBirth: String,
    nationality: String,
    position: String,
    player_image: String,
    stats: Array
}, 
{collection: "OrlandoPirates"});

module.exports = mongoose.model('orlando_model', orlando_schema);