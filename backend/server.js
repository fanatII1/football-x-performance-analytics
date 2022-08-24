const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const register_user = require('./controller/SignUp_controller');
const login_user = require('./controller/Login_user')
const mongoose = require('mongoose')

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3001;

let uri = "mongodb+srv://George:football-x-georginho7@football-x-cluster.yfduv8a.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri)
.then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('not connected')
})

/*API registers user onto the database*/
app.post('/SignUp', async (req, res, next)=>{
    await register_user.SignUp_User(req, res)
})

/*Verification of user in db, for login*/
app.post('/Login', async(req, res, next)=>{
    await login_user.login_user(req, res)
})

/*server listens on PORT 3001*/
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})