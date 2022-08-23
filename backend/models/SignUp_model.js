const mongoose = require('mongoose');

/*Schema for users to login*/
const SignUp_schema = mongoose.Schema({
    username: String,
    password: String
}, {collection: "Users"});

module.exports = mongoose.model('SignUp', SignUp_schema);