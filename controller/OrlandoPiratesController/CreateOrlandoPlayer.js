const orlando_model = require('../../models/OrlandoPiratesPlayers_model')


exports.createPlayer = async function(req, res, statsArray, imageDestination){
    let newPlayer = new orlando_model({
        name: req.body.name,
        club: req.body.club,
        dateOfBirth: req.body.dateOfBirth,
        nationality: req.body.nationality,
        position:req.body.position,
        foot: req.body.foot,
        league: req.body.league,
        stats: statsArray,
        player_image: imageDestination
    })

    await newPlayer.save()
    .then(()=>{
        res.status(200).send({'msg': 'saved'})
    })
    .catch((error)=>{
        console.log(error)
    })
}