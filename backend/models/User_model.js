const mongoose = require('mongoose');

/*Schema for users to login*/
const user_schema = mongoose.Schema({
    username: String,
    password: String
}, {collection: "Users"});

module.exports = mongoose.model('User_model', user_schema);