const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const register_user = require('./controller/SignUp_controller');
const login_user = require('./controller/Login_user');
const kaizerchiefs = require('./controller/KaizerChiefsController/KaizerChiefs_controller');
const orlandopirates = require('./controller/OrlandoPiratesController/OrlandoPirates_controller');
const findPlayer = require('./controller/FindPlayers');
const jwt = require('jsonwebtoken');
const path = require('path');
var multer = require('multer')

//create stats module
const createKaizerCheifsPlayer = require('./controller/KaizerChiefsController/CreateKaizerChiefsPlayer')
const createOrlandoPiratesPlayer = require('./controller/OrlandoPiratesController/CreateOrlandoPlayer')

//update stats modules
const updateGoalKeeper = require('./controller/UpdateStatsPlayersController/UpdateGoalkeeper');
const updateDefender = require('./controller/UpdateStatsPlayersController/UpdateDefenderStats');
const updateMidfielder = require('./controller/UpdateStatsPlayersController/UpdateMidfielderStats');
const updateWinger = require('./controller/UpdateStatsPlayersController/UpdateWingerStats');
const updateStriker = require('./controller/UpdateStatsPlayersController/UpdateStrikerStats');
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
  let adminToken = req.headers['authorization'].split(' ')[1];
    
  try {
    const decodedToken = jwt.verify(adminToken, 'key');
    if (decodedToken) {
      await findPlayer.findPlayer(req, res);
    }
  } catch (error) {
    console.log(error)
    res.status(401).send('user unknown: not authorised to access resources');
  }
});

/*Route handles stats of player that will be updated*/
/*we chek the position of the player that the admin wants to update.
  based on the position, we can handle the updates of the player's stats using on of the update controllers.
*/
app.put('/Admin', async (req, res, next) => {
  const { position } = req.body;
  const { club } = req.body;

  //select which players stats to update when recieve request, based on player position
  switch (position) {
    case 'Goalkeeper':
      await updateGoalKeeper.updatePiratesGoalkeeprStats(req, res, club);
      break;

    case 'Defender':
      await updateDefender.updateDefenderStats(req, res, club);
      break;

    case 'Midfielder':
      await updateMidfielder.updateMidfielderStats(req, res, club);
      break;

    case 'Winger':
      await updateWinger.updateWingerStats(req, res, club);
      break;

    case 'Striker':
      updateStriker.updateStrikerStats(req, res, club);
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
      let club = req.body.club;
        cb(null, `./public/${club}`)
    },
    filename : (req, file, cb) =>{
        cb(null, Date.now() + file.originalname)
    }
})

let upload = multer({storage: diskStorage})

app.post('/Admin', upload.single('image'), async (req, res, next)=>{
  
  let club = req.body.club;
  let statsData = req.body;
  let statsArray = [];
  let imageDestination = `/${club}/${req.file.filename}`
  let newStatsData;
  //for each piece of stat in the stat object, we check if undefined or not
  //if it is, delete the key & make sure that we end up only defined values object
  for (const key in statsData) {
    if(statsData[key] === 'undefined'){
      delete statsData[key]
      newStatsData = statsData;
    }
  }

  //for each piece of stat in the newStats object, we store it in an array
  for (const key in newStatsData) {
      let stat = `${key}: ${newStatsData[key]}`;
      statsArray.push(stat)
  }

  switch (club) {
    case 'Kaizer Chiefs':
      await createKaizerCheifsPlayer.createPlayer(req, res, statsArray, imageDestination )
      break;

    case 'Orlando Pirates':
      await createOrlandoPiratesPlayer.createPlayer(req, res, statsArray, imageDestination )
      break;
    default:
      break;
  }
})

//Serve static files in production
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('frontend/fanatii-football-x/build'))
  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'frontend/fanatii-football-x', 'build', 'index.html'))
  })
}

/*server listens on PORT 3001*/
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
