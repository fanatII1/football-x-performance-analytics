const kc_players_model = require('../../models/KaizerChiefsPlayers_model')

//module finds all players in Kaizer Chiefs collection
exports.find_kc_players = async function(req, res){
    await kc_players_model.find()
    .then((kc_players_data)=>{
        res.status(200).send(kc_players_data)
   })
}