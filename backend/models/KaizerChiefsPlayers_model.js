const mongoose = require('mongoose');

let kc_players_schema = mongoose.Schema({
    playersData : Array
}, 
{collection: "KaizerChiefs"});

module.exports = mongoose.model('kc_players_model', kc_players_schema);