const User_model = require('../models/User_model');
const Admin_model = require('../models/Admin_model');
const jwt = require('jsonwebtoken');
//crypto module -- hashes user passwords
const crypto = require('crypto');

//module checks user/admin in the db, for login.
exports.login_user = async function (req, res) {
  const hash = crypto.createHash('sha256');
  let username = req.body.username;
  let password = req.body.password;
  hash.update(password);
  let hashed_password = hash.digest('hex');

  //find user by username and password(hashed)
  await User_model.find({
    username: username,
    password: hashed_password,
  })
    .then(async (data) => {
      //if user is found(promise resolved), we generate a token of authentication and send to the user
      if (typeof data[0] !== 'undefined') {
        let payload = { role: 'user' };

        let user_token = jwt.sign(payload, 'key', { algorithm: 'HS256' });
        res.status(200).send({userToken: user_token});
      } else {
        //if user is not we check if they exist in admin db
        //if not, we send a 401 error indicating there is no such user in the system
        await Admin_model.find({
          username: username,
          password: password,
        })
          .then((data) => {
            if (data[0] !== 'undefined') {
              let payload = { role: 'admin' };

              let admin_token = jwt.sign(payload, 'key', { algorithm: 'HS256' });
              console.log(admin_token)
              res.status(200).send({adminToken: admin_token});
            } else {
              res.status(401).send('User does not exist in the site');
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
