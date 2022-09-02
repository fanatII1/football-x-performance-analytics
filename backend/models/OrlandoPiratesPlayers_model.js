const mongoose = require('mongoose');

let orlando_schema = mongoose.Schema({
    playersData : Array
}, 
{collection: "OrlandoPirates"});

module.exports = mongoose.model('orlando_model', orlando_schema);