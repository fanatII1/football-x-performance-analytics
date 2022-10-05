import React from 'react'
import { useState } from 'react';

function CreateStatsForm({playerPosition}) {
    const [statsData, setStatsData] = useState({})
    const [file, setFile] = useState()

    //onChange, we store the value in object
    const handleChange = (e) =>{
        const name = e.target.name;
        const userValue = e.target.value;
        console.log(name, userValue)
        setStatsData((prevData)=>{
          return {...prevData, [name]: userValue} 
        })
    }

    const handleStatsChange = (e) =>{
        const name = e.target.name;
        const stat = e.target.value;
        setStatsData((prevStats)=>{
            return {...prevStats, [name]: stat}
        })
    }

    //we submit player Stats that we update
    const submitStats = async (e) =>{
        e.preventDefault();
        let formData = new FormData();
        try {
            formData.append('name', statsData.name);
            formData.append('position', statsData.position);
            formData.append('club', statsData.club);
            formData.append('dateOfBirth', statsData.dateOfBirth);
            formData.append('foot', statsData.foot);
            formData.append('league', statsData.league);
            formData.append('nationality', statsData.nationality);
            formData.append('age', statsData.age);
            formData.append('PSxGSoT', statsData.PSxGSoT);
            formData.append('PSxGGA', statsData.PSxGGA);
            formData.append('DefActionsOutsidePen', statsData.DefensiveActionsOutsidePen);
            formData.append('GoalAgainst', statsData.GoalAgainst);
            formData.append('xA', statsData.xA);
            formData.append('xG ', statsData.xG);
            formData.append('BallRetention', statsData.BallRetention);
            formData.append('AttackingOutput', statsData.AttackingOutput);
            formData.append('AerialDeadBalls', statsData.AerialDeadBalls);
            formData.append('DefensiveActionsPer90 ', statsData.DefensiveActionsPer90);
            formData.append('RecieveInBox', statsData.RecieveInBox);
            formData.append('PassTowardsGoal ', statsData.PassTowardsGoal);
            formData.append('Recover', statsData.Recover);
            formData.append('Aerial', statsData.Aerial);
            formData.append('Dribble', statsData.Dribble);
            formData.append('Linkup', statsData.Linkup);
            formData.append('shoot', statsData.shoot)
            formData.append('image', file)
          } catch (error) {
            console.log(error);
          }
        await fetch('/Admin', {
            method: 'POST',
            body: formData
        })
    }

    if(playerPosition === 'GK'){
        return(
            <form id='GKForm' onSubmit={submitStats} autoComplete='off' encType='multipart/form-data'>
                <h2 id='position-heading'>{playerPosition} :</h2>
                <div id='form-main-content'>
                <div className='form1'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' placeholder='Name' onChange={handleChange}/>
                <label htmlFor='Age'>Age:</label>
                <input type='text' name='age' id='age'  placeholder='Age' onChange={handleChange}/>
                <label htmlFor='dateOfBirth'>DoB:</label>
                <input type='text' name='dateOfBirth' id='dateOfBirth'  placeholder='DoB' onChange={handleChange}/>
                <label htmlFor='position'>Position:</label>
                <input type='text' name='position'id='position' placeholder='Position' onChange={handleChange}/>
                <label htmlFor='club'>Club:</label>
                <input type='text' name='club' id='club'  placeholder='Club' onChange={handleChange}/>
                <label htmlFor='Nationality'>Nationality:</label>
                <input type='text' name='nationality' id='nationality'  placeholder='Nationality' onChange={handleChange}/>
                </div>

                <div className='form2'>
                <label htmlFor='GoalAgainst'>Goals Against:</label>
                <input type='text' name='GoalAgainst' id='GoalAgainst' placeholder='GoalAgainst' onChange={handleStatsChange}/>
                <label htmlFor='DefActionsOutsidePen'>Defensive Actions Outside Pen. :</label>
                <input type='text' name='DefActionsOutsidePen' id='DefActionsOutsidePen' placeholder='DefActionsOutsidePen' onChange={handleStatsChange}/>
                <label htmlFor='PSxGGA'>PSxGGA:</label>
                <input type='text' name='PSxGGA' id='PSxGGA' placeholder='PSxGGA' onChange={handleStatsChange}/>
                <label htmlFor='PSxGSoT'>PSxGSoT</label>
                <input type='text' name='PSxGSoT' id='PSxGSoT' placeholder='PSxGSoT' onChange={handleStatsChange}/>
                <label htmlFor='Nationality'>Foot:</label>
                <input type='text' name='foot' id='foot'  placeholder='foot' onChange={handleChange}/>
                <label htmlFor='Nationality'>League:</label>
                <input type='text' name='league' id='league'  placeholder='League' onChange={handleChange}/>
                <label htmlFor='Nationality'>Image:</label>
                <input type='file' name='image' id='file' onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                </div>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else if(playerPosition === 'DEF'){
        return(
            <form id='DEFForm' onSubmit={submitStats} autoComplete='off' encType='multipart/form-data'>
                <h2 id='position-heading'>{playerPosition} :</h2>
                <div id='form-main-content'>
                <div className='form1'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' placeholder='Name' onChange={handleChange}/>
                <label htmlFor='Age'>Age:</label>
                <input type='text' name='age' id='age'  placeholder='Age' onChange={handleChange}/>
                <label htmlFor='dateOfBirth'>DoB:</label>
                <input type='text' name='dateOfBirth' id='dateOfBirth'  placeholder='DoB' onChange={handleChange}/>
                <label htmlFor='position'>Position:</label>
                <input type='text' name='position'id='position' placeholder='Position' onChange={handleChange}/>
                <label htmlFor='club'>Club:</label>
                <input type='text' name='club' id='club'  placeholder='Club' onChange={handleChange}/>
                <label htmlFor='Nationality'>Nationality:</label>
                <input type='text' name='nationality' id='nationality'  placeholder='Nationality' onChange={handleChange}/>
                </div>

                <div className='form2'>
                <label htmlFor='TacklesPer90'>Tackels Per 90:</label>
                <input type='text' name='TacklesActionsPer90' id='TacklesPer90' placeholder='TacklesPer90' onChange={handleStatsChange}/>
                <label htmlFor='DEfensiveActionsPer90'>Defensive Actions Per 90:</label>
                <input type='text' name='DefensiveActionsPer90' id='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleStatsChange}/>
                <label htmlFor='AerialDeadBalls'>Aerial Deadballs won: </label>
                <input type='text' name='AerialDeadBalls' id='AerialDeadBalls' placeholder='AerialDeadBalls' onChange={handleStatsChange}/>
                <label htmlFor='AttackingOutput'>Attacking Output:</label>
                <input type='text' name='AttackingOutput' id='AttackingOutput' placeholder='AttackingOutput' onChange={handleStatsChange}/>
                <label htmlFor='BallRetention'>Ball Retention:</label>
                <input type='text' name='BallRetention' id='BallRetention' placeholder='BallRetention' onChange={handleStatsChange}/>
                <label htmlFor='Nationality'>Foot:</label>
                <input type='text' name='foot' id='foot'  placeholder='foot' onChange={handleChange}/>
                <label htmlFor='Nationality'>League:</label>
                <input type='text' name='league' id='league'  placeholder='League' onChange={handleChange}/>
                <input type='file' name='image' id='file' onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                </div>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else if(playerPosition === 'MID'){
        return(
            <form id='MIDForm' onSubmit={submitStats} autoComplete='off' encType='multipart/form-data'>
                <h2 id='position-heading'>{playerPosition} :</h2>
                <div id='form-main-content'>                
                <div className='form1'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' placeholder='Name' onChange={handleChange}/>
                <label htmlFor='Age'>Age:</label>
                <input type='text' name='age' id='age'  placeholder='Age' onChange={handleChange}/>
                <label htmlFor='dateOfBirth'>DoB:</label>
                <input type='text' name='dateOfBirth' id='dateOfBirth'  placeholder='DoB' onChange={handleChange}/>
                <label htmlFor='position'>Position:</label>
                <input type='text' name='position'id='position' placeholder='Position' onChange={handleChange}/>
                <label htmlFor='club'>Club:</label>
                <input type='text' name='club' id='club'  placeholder='Club' onChange={handleChange}/>
                <label htmlFor='Nationality'>Nationality:</label>
                <input type='text' name='nationality' id='nationality'  placeholder='Nationality' onChange={handleChange}/>
                </div>

                <div className='form2'> 
                <label htmlFor='xG'>xG(Expected Goals):</label>
                <input type='text' name='xG' id='xG' placeholder='xG' onChange={handleStatsChange}/>
                <label htmlFor='xA'>xA(Expected Assists):</label>
                <input type='text' name='xA' id='xA' placeholder='xA' onChange={handleStatsChange}/>
                <label htmlFor='shoot'>Shooting: </label>
                <input type='text' name='shoot' id='shoot' placeholder='Shoot' onChange={handleStatsChange}/>
                <label htmlFor='Defensive Actions Per 90'>Defensive Actions Per 90:</label>
                <input type='text' name='DefensiveActionsPer90' id='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleStatsChange}/>
                <label htmlFor='Linkup'>Linkup:</label>
                <input type='text' name='Linkup' id='Linkup' placeholder='Linkup' onChange={handleStatsChange}/>
                <label htmlFor='AttackingOutput'>Attacking Output:</label>
                <input type='text' name='AttackingOutput' id='AttackingOutput' placeholder='AttackingOutput' onChange={handleStatsChange}/>
                <label htmlFor='BallRetention'>Ball Retention:</label>
                <input type='text' name='BallRetention' id='BallRetention' placeholder='BallRetention' onChange={handleStatsChange}/>
                </div>

                <div className='form3'>
                <label htmlFor='Dribble'>Dribbling:</label>
                <input type='text' name='Dribble' id='Dribble' placeholder='Dribble' onChange={handleStatsChange}/>
                <label htmlFor='Aerial'>Aerial:</label>
                <input type='text' name='Aerial' id='Aerial' placeholder='Aerial' onChange={handleStatsChange}/>
                <label htmlFor='Recover'>Recover:</label>
                <input type='text' name='Recover' id='Recover' placeholder='Recover' onChange={handleStatsChange}/>
                <label htmlFor='PassTowardsGoal'>Pass Towards Goal:</label>
                <input type='text' name='PassTowardsGoal' id='PassTowardsGoal' placeholder='PassTowardsGoal' onChange={handleStatsChange}/>
                <label htmlFor='ReceiveInBox'>Recieve In Box:</label>
                <input type='text' name='RecieveInBox' id='RecieveInBox' placeholder='RecieveInBox' onChange={handleStatsChange}/>
                <label htmlFor='Nationality'>Foot:</label>
                <input type='text' name='foot' id='foot'  placeholder='foot' onChange={handleChange}/>
                <label htmlFor='Nationality'>League:</label>
                <input type='text' name='league' id='league'  placeholder='League' onChange={handleChange}/>
                <input type='file' name='image' id='file' onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                </div>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else if(playerPosition === 'WING'){
        return(
            <form id='WINGForm' onSubmit={submitStats} autoComplete='off' encType='multipart/form-data'>
                <h2 id='position-heading'>{playerPosition} :</h2>
                <div id='form-main-content'>                
                <div className='form1'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' placeholder='Name' onChange={handleChange}/>
                <label htmlFor='Age'>Age:</label>
                <input type='text' name='age' id='age'  placeholder='Age' onChange={handleChange}/>
                <label htmlFor='dateOfBirth'>DoB:</label>
                <input type='text' name='dateOfBirth' id='dateOfBirth'  placeholder='DoB' onChange={handleChange}/>
                <label htmlFor='position'>Position:</label>
                <input type='text' name='position'id='position' placeholder='Position' onChange={handleChange}/>
                <label htmlFor='club'>Club:</label>
                <input type='text' name='club' id='club'  placeholder='Club' onChange={handleChange}/>
                <label htmlFor='Nationality'>Nationality:</label>
                <input type='text' name='nationality' id='nationality'  placeholder='Nationality' onChange={handleChange}/>
                </div>

                <div className='form2'> 
                <label htmlFor='xG'>xG(Expected Goals):</label>
                <input type='text' name='xG' id='xG' placeholder='xG' onChange={handleStatsChange}/>
                <label htmlFor='xA'>xA(Expected Assists):</label>
                <input type='text' name='xA' id='xA' placeholder='xA' onChange={handleStatsChange}/>
                <label htmlFor='shoot'>Shooting: </label>
                <input type='text' name='shoot' id='shoot' placeholder='Shoot' onChange={handleStatsChange}/>
                <label htmlFor='Defensive Actions Per 90'>Defensive Actions Per 90:</label>
                <input type='text' name='DefensiveActionsPer90' id='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleStatsChange}/>
                <label htmlFor='Linkup'>Linkup:</label>
                <input type='text' name='Linkup' id='Linkup' placeholder='Linkup' onChange={handleStatsChange}/>
                <label htmlFor='AttackingOutput'>Attacking Output:</label>
                <input type='text' name='AttackingOutput' id='AttackingOutput' placeholder='AttackingOutput' onChange={handleStatsChange}/>
                <label htmlFor='BallRetention'>Ball Retention:</label>
                <input type='text' name='BallRetention' id='BallRetention' placeholder='BallRetention' onChange={handleStatsChange}/>
                </div>

                <div className='form3'>
                <label htmlFor='Dribble'>Dribbling:</label>
                <input type='text' name='Dribble' id='Dribble' placeholder='Dribble' onChange={handleStatsChange}/>
                <label htmlFor='Aerial'>Aerial:</label>
                <input type='text' name='Aerial' id='Aerial' placeholder='Aerial' onChange={handleStatsChange}/>
                <label htmlFor='Recover'>Recover:</label>
                <input type='text' name='Recover' id='Recover' placeholder='Recover' onChange={handleStatsChange}/>
                <label htmlFor='PassTowardsGoal'>Pass Towards Goal:</label>
                <input type='text' name='PassTowardsGoal' id='PassTowardsGoal' placeholder='PassTowardsGoal' onChange={handleStatsChange}/>
                <label htmlFor='ReceiveInBox'>Recieve In Box:</label>
                <input type='text' name='RecieveInBox' id='RecieveInBox' placeholder='RecieveInBox' onChange={handleStatsChange}/>
                <label htmlFor='Nationality'>Foot:</label>
                <input type='text' name='foot' id='foot'  placeholder='foot' onChange={handleChange}/>
                <label htmlFor='Nationality'>League:</label>
                <input type='text' name='league' id='league'  placeholder='League' onChange={handleChange}/>
                <input type='file' name='image' id='file' onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                </div>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else{
        return(
            <form id='STForm' onSubmit={submitStats} autoComplete='off' encType='multipart/form-data'>
                <h2 id='position-heading'>{playerPosition} :</h2>
                <div id='form-main-content'>                
                <div className='form1'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' placeholder='Name' onChange={handleChange}/>
                <label htmlFor='Age'>Age:</label>
                <input type='text' name='age' id='age'  placeholder='Age' onChange={handleChange}/>
                <label htmlFor='dateOfBirth'>DoB:</label>
                <input type='text' name='dateOfBirth' id='dateOfBirth'  placeholder='DoB' onChange={handleChange}/>
                <label htmlFor='position'>Position:</label>
                <input type='text' name='position'id='position' placeholder='Position' onChange={handleChange}/>
                <label htmlFor='club'>Club:</label>
                <input type='text' name='club' id='club'  placeholder='Club' onChange={handleChange}/>
                <label htmlFor='Nationality'>Nationality:</label>
                <input type='text' name='nationality' id='nationality'  placeholder='Nationality' onChange={handleChange}/>
                </div>

                <div className='form2'> 
                <label htmlFor='xG'>xG(Expected Goals):</label>
                <input type='text' name='xG' id='xG' placeholder='xG' onChange={handleStatsChange}/>
                <label htmlFor='xA'>xA(Expected Assists):</label>
                <input type='text' name='xA' id='xA' placeholder='xA' onChange={handleStatsChange}/>
                <label htmlFor='shoot'>Shooting: </label>
                <input type='text' name='shoot' id='shoot' placeholder='Shoot' onChange={handleStatsChange}/>
                <label htmlFor='Defensive Actions Per 90'>Defensive Actions Per 90:</label>
                <input type='text' name='DefensiveActionsPer90' id='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleStatsChange}/>
                <label htmlFor='Linkup'>Linkup:</label>
                <input type='text' name='Linkup' id='Linkup' placeholder='Linkup' onChange={handleStatsChange}/>
                <label htmlFor='AttackingOutput'>Attacking Output:</label>
                <input type='text' name='AttackingOutput' id='AttackingOutput' placeholder='AttackingOutput' onChange={handleStatsChange}/>
                <label htmlFor='BallRetention'>Ball Retention:</label>
                <input type='text' name='BallRetention' id='BallRetention' placeholder='BallRetention' onChange={handleStatsChange}/>
                </div>

                <div className='form3'>
                <label htmlFor='Dribble'>Dribbling:</label>
                <input type='text' name='Dribble' id='Dribble' placeholder='Dribble' onChange={handleStatsChange}/>
                <label htmlFor='Aerial'>Aerial:</label>
                <input type='text' name='Aerial' id='Aerial' placeholder='Aerial' onChange={handleStatsChange}/>
                <label htmlFor='Recover'>Recover:</label>
                <input type='text' name='Recover' id='Recover' placeholder='Recover' onChange={handleStatsChange}/>
                <label htmlFor='PassTowardsGoal'>Pass Towards Goal:</label>
                <input type='text' name='PassTowardsGoal' id='PassTowardsGoal' placeholder='PassTowardsGoal' onChange={handleStatsChange}/>
                <label htmlFor='ReceiveInBox'>Recieve In Box:</label>
                <input type='text' name='RecieveInBox' id='RecieveInBox' placeholder='RecieveInBox' onChange={handleStatsChange}/>
                <label htmlFor='Nationality'>Foot:</label>
                <input type='text' name='foot' id='foot'  placeholder='foot' onChange={handleChange}/>
                <label htmlFor='Nationality'>League:</label>
                <input type='text' name='league' id='league'  placeholder='League' onChange={handleChange}/>
                <input type='file' name='image' id='file' onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                </div>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
}

export default CreateStatsForm