const PlayersModel  = require('../models/Players');

exports.createPlayer = async function(req, res, statsArray){
    let newPlayer = new PlayersModel({
        name: req.body.playerName,
        club: req.body.club,
        dateOfBirth: req.body.dateOfBirth,
        age: req.body.age,
        nationality: req.body.nationality,
        position:req.body.position,
        foot: req.body.foot,
        league: req.body.league,
        player_image: imageDestination
    })

    await newPlayer.save()
    .then(()=>{
        console.log('saved')
    })

}