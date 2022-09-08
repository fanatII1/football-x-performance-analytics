const PlayersModel  = require('../models/Players');

exports.findPlayer = async function(req, res){
    await PlayersModel.find({
        name: req.body.playerName
    })
    .then((data)=>{
        //check if there was a player found from the db
        if(typeof data[0] === 'undefined'){
            res.status(500).send('player not found')
        }
        else{
            res.status(200).send(data)
        }
    })
    .catch((error)=>[
        res.status(500).send(error)
    ])
}