const orlando_model = require('../../models/OrlandoPiratesPlayers_model')

exports.updatePiratesGoalkeeprStats = async function (req, res) {
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
        BallRetention,
        PSxGSoT,
        PSxGGA,
        GoalAgainst,
        DefActionsOutsidePen
    } = req.body;

    await orlando_model.updateOne({
        name: name,
        position: position
    }, {
        stats: [
            `DefActionsOutsidePen: ${DefActionsOutsidePen}`,
            `GoalsAgainst: ${GoalAgainst}`,
            `PSxGGA: ${PSxGGA}`, 
            `PSxGSoT ${PSxGSoT}`
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