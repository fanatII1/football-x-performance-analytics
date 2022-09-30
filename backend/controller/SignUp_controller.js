const User_model = require('../models/User_model');
const jwt = require('jsonwebtoken');
//crypto module -- hashes user passwords
const crypto = require('crypto');


exports.SignUp_User = async function(req, res){
    const hash = crypto.createHash('sha256');
    let username = req.body.username;
    let password = req.body.password;
    hash.update(password)
    let hashed_password = hash.digest('hex')

    let user_model = new User_model({
        username : username,
        password: hashed_password
    })

    return await user_model.save()
    .then(()=>{
        //generate jwt token for authentication
        let payload = {
            role: "user"
        };

        let user_token = jwt.sign(payload, 'key', {algorithm: "HS256"})
        res.status(200).send({userToken: user_token});
    })
    .catch(()=>{
        res.status(500).send('internal server error, could not register user')
    })
}