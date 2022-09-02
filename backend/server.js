const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const register_user = require('./controller/SignUp_controller');
const login_user = require('./controller/Login_user')
const kaizerchiefs = require('./controller/KaizerChiefs_controller')
const orlandopirates = require('./controller/OrlandoPirates_controller')
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'))
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


/*Request for data on players of a specific club*/
app.get('/GlobalSearch/ClubSearch/:club', async (req, res, next)=>{
    const club = req.params.club;//specific cluc user requests data on

    //select which clubs data to fetch when recieve request
    switch (club) {
        case "KaizerChiefs":
            await kaizerchiefs.find_kc_players(req, res);
            break;

        case "OrlandoPirates":
            await orlandopirates.find_orlando_pirates_players(req, res);
            break;
        default:
            break;
    }
})

/*server listens on PORT 3001*/
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})