const SignUp = require('../models/SignUp_model');
//crypto module -- hashes user passwords
const crypto = require('crypto');
const hash = crypto.createHash('sha256');


exports.SignUp_User = async function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    hash.update(password)
    let hashed_password = hash.digest('hex')

    let SignUp_model = new SignUp({
        username : username,
        password: hashed_password
    })

    return await SignUp_model.save()
    .then(()=>{
        console.log('saved')
        res.status(200).send(`Welcome ${username}`)
    })
    .catch(()=>{
        res.status(500).send('internal server error, could not register user')
    })
}