const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const register_user = require('./controller/SignUp_controller');
const login_user = require('./controller/Login_user');
const kaizerchiefs = require('./controller/KaizerChiefsController/KaizerChiefs_controller');
const orlandopirates = require('./controller/OrlandoPiratesController/OrlandoPirates_controller');
const findPlayer = require('./controller/FindPlayers');
const createKaizerCheifsPlayer = require('./controller/KaizerChiefsController/CreateKaizerChiefsPlayer')
const jwt = require('jsonwebtoken');
var multer = require('multer')

//update stats modules
const updatePiratesGoalkeeper = require('./controller/OrlandoPiratesController/UpdateGoalkeeper');
const updatePiratesDefender = require('./controller/OrlandoPiratesController/UpdateDefenderStats');
const updatePiratesMidfielder = require('./controller/OrlandoPiratesController/UpdateMidfielderStats');
const updatePiratesWinger = require('./controller/OrlandoPiratesController/UpdateWingerStats');
const updatePiratesStriker = require('./controller/OrlandoPiratesController/UpdateStrikerStats');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('images'));
const PORT = process.env.PORT || 3001;

let uri = 'mongodb+srv://George:football-x-georginho7@football-x-cluster.yfduv8a.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(uri)
  .then(() => {
    console.log('connected');
  })
  .catch(() => {
    console.log('not connected');
  });

/*API registers user onto the database*/
app.post('/SignUp', async (req, res, next) => {
  await register_user.SignUp_User(req, res);
});

/*Verification of user in db, for login*/
app.post('/Login', async (req, res, next) => {
  await login_user.login_user(req, res);
});

/*Request for data on players of a specific club*/
app.get('/GlobalSearch/ClubSearch/:club', async (req, res, next) => {
  const club = req.params.club; //specific cluc user requests data on

  let adminToken = req.headers['authorization'].split(' ')[1];
  try {
    const decodedToken = jwt.verify(adminToken, 'key');
    console.log(decodedToken)
    if (decodedToken) {
      //select which clubs data to fetch when recieve request
      switch (club) {
        case 'KaizerChiefs':
          await kaizerchiefs.find_kc_players(req, res);
          break;

        case 'OrlandoPirates':
          await orlandopirates.find_orlando_pirates_players(req, res);
          break;
        default:
          break;
      }
    }
  } catch (error) {
    console.log(error)
    res.status(401).send('user unknown: not authorised to access resources');
  }
});

/*Route Searches Player frome the database*/
app.post('/GlobalSearch/NameSearch', async (req, res, next) => {
  console.log(req.body);
  let adminToken = req.headers['authorization'].split(' ')[1];
  try {
    const decodedToken = jwt.verify(adminToken, 'key');
    // console.log(decodedToken)
    if (decodedToken) {
      await findPlayer.findPlayer(req, res);
    }
  } catch (error) {
    console.log(error)
    res.status(401).send('user unknown: not authorised to access resources');
  }
});

/*Route handles stats of player that will be updated*/
/*we chek the position of the player that the admin wants to update, thus directing them to correct controller*/
app.put('/Admin', async (req, res, next) => {
  const { position } = req.body;
  console.log(req.body);

  //select which players stats to update when recieve request, based on player position
  switch (position) {
    case 'Goalkeeper':
      await updatePiratesGoalkeeper.updatePiratesGoalkeeprStats(req, res);
      break;

    case 'Defender':
      await updatePiratesDefender.updatePiratesDefenderStats(req, res);
      break;

    case 'Midfielder':
      await updatePiratesMidfielder.updatePiratesMidfielderStats(req, res);
      break;

    case 'Winger':
      await updatePiratesWinger.updatePiratesWingerStats(req, res);
      break;

    case 'Striker':
      updatePiratesStriker.updatePiratesStrikerStats(req, res);
      break;

    default:
      break;
  }
});


/*code below deinfes the destination that an image of a player will be stored
  and defines a route that handles player data, with image uploads.
  we used multer middleware to upload images to the server
*/
let diskStorage = multer.diskStorage({
    destination : (req, file, cb)=>{
      console.log(req.body.club)
      let club = req.body.club;
        cb(null, `./public/${club}`)
    },
    filename : (req, file, cb) =>{
        cb(null, Date.now() + file.originalname)
    }
})

let upload = multer({storage: diskStorage})
app.post('/Admin', upload.single('image'), async (req, res, next)=>{
  console.log(req.body.club, 'm')
  
  let club = req.body.club;
  let statsData = req.body;
  let statsArray = [];
  //for each piece of stat in the stat object, we store it in an array
  for (const key in statsData) {
    let stat = `${key}: ${statsData[key]}`;
    statsArray.push(stat)
  }


  switch (club) {
    case 'Kaizer Chiefs':
      await createKaizerCheifsPlayer.createPlayer(req, res, statsArray )
      break;

    case 'Orlando Pirates':
      await createOrlandoPiratesPlayer.createPlayer(req, res, statsArray )
      break;
    default:
      break;
  }
})


/*server listens on PORT 3001*/
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
