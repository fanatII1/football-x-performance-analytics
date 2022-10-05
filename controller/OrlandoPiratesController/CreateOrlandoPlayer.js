const orlando_model = require('../../models/OrlandoPiratesPlayers_model')
const PlayersModel = require('../../models/Players');


exports.createPlayer = async function(req, res, statsArray, imageDestination){
    let newPlayer = new orlando_model({
        name: req.body.name,
        club: req.body.club,
        dateOfBirth: req.body.dateOfBirth,
        age: req.body.age,
        nationality: req.body.nationality,
        position:req.body.position,
        foot: req.body.foot,
        league: req.body.league,
        stats: statsArray,
        player_image: imageDestination
    })

     //also save to the Players Collection
     let newGloablPlayer = new PlayersModel({
        name: req.body.name,
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
    .then(async ()=>{
        await newGloablPlayer.save()
        res.status(200).send({'msg': 'saved'})
    })
    .catch((error)=>{
        console.log(error)
    })
}