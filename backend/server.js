const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const register_user = require('./controller/SignUp_controller');
const login_user = require('./controller/Login_user');
const kaizerchiefs = require('./controller/KaizerChiefsController/KaizerChiefs_controller');
const orlandopirates = require('./controller/OrlandoPiratesController/OrlandoPirates_controller');
const findPlayer = require('./controller/FindPlayers');
const createPlayer = require('./controller/CreatePlayer')
const jwt = require('jsonwebtoken');

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

/*Route Handles Creation of a player and their Stats*/
app.post('/Admin', async (req, res, next)=>{
  await createPlayer.createPlayer(req, res)
})

/*Error handling middleware which displays a rejected fieldname from the multer sinle() argument*/
app.use((error, req, res, next) => {
  console.log('This is the rejected field ->', error.field, req.field);
});

/*server listens on PORT 3001*/
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
