const orlando_model = require('../../models/OrlandoPiratesPlayers_model')

exports.updatePiratesDefenderStats = async function (req, res) {
    const {
        name,
        position,
        AerialDeadBalls,
        AttackingOutput,
        DefensiveActionsPer90,
        TacklesPer90,
        BallRetention
    } = req.body;

    await orlando_model.updateOne({
        name: name,
        position: position
    }, {
        stats: [
            `Defensive Actions Per 90: ${DefensiveActionsPer90}`,
            `Tackles Per 90: ${TacklesPer90}`,
            `Attacking Output: ${AttackingOutput}`,
            `Aerial Dead Balls: ${AerialDeadBalls}`,
            `Ball Retention: ${BallRetention}`,
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