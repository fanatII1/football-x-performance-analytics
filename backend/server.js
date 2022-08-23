const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const register_user = require('./controller/SignUp_controller')
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

app.post('/SignUp', async (req, res, next)=>{
    await register_user.SignUp_User(req, res)
})

/*server listens on PORT 3001*/
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})