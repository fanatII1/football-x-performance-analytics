const orlando_model = require('../../models/OrlandoPiratesPlayers_model')
const kc_players_model = require('../../models/KaizerChiefsPlayers_model')
let club_model;

//a function that specifies the club model to use based on the club value it recieves
function ClubModel(club){
    switch (club) {
        case 'Kaizer Chiefs':
            club_model = kc_players_model;
            break;
        
        case 'Orlando Pirates':
            club_model = orlando_model;
            break;
    
        default:
            break;
    }
}

exports.updateMidfielderStats = async function (req, res,club) {
    ClubModel(club)
    const {
        name,
        position,
        xG,
        xA,
        RecieveInBox,
        Recover,
        Aerial,
        Dribble,
        AttackingOutput,
        PassTowardsGoal,
        DefensiveActionsPer90,
        Linkup,
        shoot,
        BallRetention
    } = req.body;

    await orlando_model.updateOne({
        name: name,
        position: position
    }, {
        stats: [
            `xG: ${xG}`,
            `xA: ${xA}`,
            `Shoot: ${shoot}`, 
            `Defensive Actions Per 90: ${DefensiveActionsPer90}`,
            `Linkup: ${Linkup}`,
            `Attacking Output: ${AttackingOutput}`,
            `Pass Towards Goal: ${PassTowardsGoal}`,
            `Recieve In Box: ${RecieveInBox}`,
            `Aerial: ${Aerial}`,
            `Dribble: ${Dribble}`,
            `Recover: ${Recover}`,
            `Ball Retention: ${BallRetention}`
        ]
    })
    .then((data)=>{
        if(data){
            console.log(data, 'updated')
            res.status(200).send('Succeefully Updated')
        }
    })
    .catch((error)=>{
        console.log(error)
        res.status(500).send('Server Internal Error: Could not update stats')
    })
}