const mongoose = require('mongoose');

//schema for mongoose docs collection
let allArticlesPosts = mongoose.Schema({
    heading: String,
    mainContent: String,
    bannerImage: String
}, 
{collection: "allArticlesPosts"});

module.exports = mongoose.model('allArticlesPosts', allArticlesPosts);