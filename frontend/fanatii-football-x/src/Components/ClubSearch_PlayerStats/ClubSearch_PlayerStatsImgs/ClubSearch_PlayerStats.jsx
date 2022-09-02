import React from 'react'
import { useEffect } from 'react'


const clubPlayersData = [
  {
    name: 'Ashley Du Preez',
    dateOfBirth: '1994-02-05',
    nationality: 'South Africa',
    position: 'Striker',
    player_image: '/KaizerCheifs/Ashley Du Preez.jpg',
    xG: '0.19',
    xA: '0.31',
    shoot: '0.9',
    recieveInbox: '0.94',
    AttackingOutput: '0.9',
    Aerial: '0.15',
    Dribble: '0.22',
    Recover: '0.56',
}
,
{
  name: 'Brandon Peterson',
  dateOfBirth: '1994-09-022',
  nationality: 'South Africa',
  position: 'Goalkeeper',
  player_image: '/KaizerChiefs/Brandon Peterson.jpg',
  DefActionsOutsidePen: '0.86',
  GoalsAgainst: '0.88',
  PSxGGA: '-0.09',
  PSxGSoT: '0.30'
}
,
{
  name: 'Happy Mashiane',
  dateOfBirth: '1998-02-05',
  nationality: 'South Africa',
  position: 'Defender',
  player_image: '/KaizerChiefs/Happy Mashiane.jpg',
  xG: '0.19',
  xA: '0.78',
  GroundDuelsInPoss: '0.73',
  AerialDeadBalls: '0.68',
  AttackingOutput: '0.9',
  DefensiveActionsPer90: '0.55'
}
,
{
      name: 'Keagan Dolly',
      dateOfBirth: '1991-06-13',
      nationality: 'South Africa',
      position: 'Winger',
      player_image: '/KaizerChiefs/Keagan Dolly.jpg',
      xG: '0.19',
      xA: '0.31',
      BallRetention: '0.64',
      AttackingOutput: '0.9',
      DefensiveActionsPer90: '0.37',
      PassTowardsGoal: '0.79',
      Aerial: '0.24',
      LinkUp: '0.28'
}
,
{
  name: 'Reeve Frosler',
  dateOfBirth: '1996-12-25',
  nationality: 'South Africa',
  position: 'Defender',
  player_image: '/KaizerChiefs/Happy Mashiane.jpg',
  xG: '0.23',
  xA: '0.64',
  GroundDuelsInPoss: '0.43',
  AerialDeadBalls: '0.58',
  AttackingOutput: '0.7',
  DefensiveActionsPer90: '0.65'
}
,
{
  name: 'Kamohelo Mahlatsi',
  dateOfBirth: '1995-07-21',
  nationality: 'South Africa',
  position: 'Midfielder',
  player_image: '/KaizerChiefs/Kamohelo Mahlatsi.jpg',
  xG: '0.2',
  xA: '0.53',
  BallRetention: '0.44',
  AttackingOutput: '0.7',
  DefensiveActionsPer90: '0.45',
  PassTowardsGoal: '0.88',
  Aerial: '0.13',
  LinkUp: '0.34'
}
]

function ClubSearchPlayerStats() {

  return (
    <>
    <p>hi</p>
    <img src={playerImage[0].player_image} alt=''/>
    </>
  )
}

export default ClubSearchPlayerStats