const mongoose = require('mongoose');

/*Schema for users to login*/
const admin_schema = mongoose.Schema({
    username: String,
    password: String
}, {collection: "Admins"});

module.exports = mongoose.model('Admin_model', admin_schema);