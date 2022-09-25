const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const register_user = require('./controller/SignUp_controller');
const login_user = require('./controller/Login_user')
const kaizerchiefs = require('./controller/KaizerChiefs_controller')
const orlandopirates = require('./controller/OrlandoPirates_controller')
const findPlayer = require('./controller/FindPlayers')
const saveArticle = require('./controller/allArticles_controller')
const mongoose = require('mongoose');
var multer  = require('multer')

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(express.static('images'))
const PORT = process.env.PORT || 3001;

/*We use multer to save unique article posts to the server*/
const diskStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './public/BlogImages')
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + file.originalname)
    }
})
const uploads = multer({storage: diskStorage});

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

/*Route Searches Player frome the database*/
app.post('/GlobalSearch/NameSearch', async (req, res, next)=>{
    console.log(req.body)
    await findPlayer.findPlayer(req,res)
} )

/*Route handles posts uploaded to the server*/
/*upload images using multer*/
app.post('/CreatePost', uploads.single('bannerImage'), async(req, res, next)=>{
    console.log(req.body.heading)
    saveArticle.saveArticle(req, res)
})


/*Route handles stats of player that will be updated*/
app.put('/Admin', (req, res, next)=>{
    console.log(req.body)
})


/*Error handling middleware which displays a rejected fieldname from the multer sinle() argument*/
app.use((error, req, res, next) => {
    console.log('This is the rejected field ->', error.field, req.field);
});

/*server listens on PORT 3001*/
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})