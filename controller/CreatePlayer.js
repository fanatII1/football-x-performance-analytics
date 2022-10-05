const PlayersModel  = require('../models/Players');

exports.createPlayer = async function(req, res){
    let newPlayer = new PlayersModel({
        name: req.body.name,
        club: req.body.club,
        position: req.body.position,
        age: req.body.age,
        league: req.body.league,
        playersData : Array,
        dateOfBirth: String,
        nationality: String,
        foot: req.body.foot,
        player_image: String,
        stats: []
    })

    await newPlayer.save()
    .then(()=>{
        console.log('saved')
    })

}