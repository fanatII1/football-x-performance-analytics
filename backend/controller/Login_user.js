const User_model = require('../models/User_model');
const jwt = require('jsonwebtoken');
//crypto module -- hashes user passwords
const crypto = require('crypto');
const hash = crypto.createHash('sha256');

//module checks user in the db, for login
//verify the hashed password, then generate the token
exports.login_user = async function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    hash.update(password)
    let hashed_password = hash.digest('hex')

    //find user by username and password(hashed)
    await User_model.find({
        username : username,
        password : hashed_password
    })
    .then(()=>{
        //generate jwt token for authentication
          let payload = {
            role: "user"
        };

        let user_token = jwt.sign(payload, 'key', {algorithm: "HS256"});
        res.status(200).send(user_token);
    })
    .catch(()=>{
        res.status(500).send('internal server error, could not register user')
    })
}