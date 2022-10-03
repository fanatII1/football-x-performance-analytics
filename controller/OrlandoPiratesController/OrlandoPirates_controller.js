const orlando_model = require('../../models/OrlandoPiratesPlayers_model')

//module finds all players in Kaizer Chiefs collection
exports.find_orlando_pirates_players = async function(req, res){
    await orlando_model.find()
    .then((orlando_players_data)=>{
        res.status(200).send(orlando_players_data)
    })
}