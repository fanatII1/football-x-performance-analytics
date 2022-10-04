const PlayersModel  = require('../models/Players');

exports.createPlayer = async function(req, res){
    let newPlayer = new PlayersModel({
        name: req.body.name,
        club: req.body.club,
        position: req.body.position,
        stats: []
    })

    await newPlayer.save()
    .then(()=>{
        console.log('saved')
    })

}