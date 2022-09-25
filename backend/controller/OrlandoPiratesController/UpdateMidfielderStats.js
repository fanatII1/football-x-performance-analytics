const orlando_model = require('../../models/OrlandoPiratesPlayers_model')

exports.updatePiratesMidfielderStats = async function (req, res) {
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
            `Dribble ${Dribble}`,
            `Recover: ${Recover}`,
            `Ball Retention: ${BallRetention}`
        ]
    })
    .then((data)=>{
        if(data){
            console.log(data, 'updated')
        }
    })
    .catch((error)=>{
        console.log(error)
        res.status(500).send('Server Internal Error: Could not update stats')
    })
}