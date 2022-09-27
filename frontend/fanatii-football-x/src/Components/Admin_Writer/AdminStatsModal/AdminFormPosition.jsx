import React from "react";
import { useState } from "react";

function FormPosition({position}){
    const [userData, setUserData] = useState({});

    //onChange, we store the value in object
    const handleChange = (e) =>{
        const name = e.target.name;
        const userValue = e.target.value;
        console.log(name, userValue)
        setUserData((prevData)=>{
          return {...prevData, [name]: userValue} 
        })
    }

    //we submit player Stats that we update
    const submitStats = async (e) =>{
        e.preventDefault();
        await fetch('/Admin', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        })
        console.log(userData)
    }

    if(position === 'GK'){
        return(
            <form id='GKForm' onSubmit={submitStats}>
                <h2 id="position-heading">{position}:</h2>

                <label htmlFor="name">Name:</label>
                <input type='text' name='name' id='name' placeholder='Name' onChange={handleChange}/>
                <label htmlFor="position">Position:</label>
                <input type='text' name='position'id='position' placeholder='Position' onChange={handleChange}/>
                <label htmlFor="club">Club:</label>
                <input type='text' name='club' id='club'  placeholder='club' onChange={handleChange}/>
                <label htmlFor="DefActionsOutsidePen">Defensive Actions Outside Pen. :</label>
                <input type='text' name='DefActionsOutsidePen' id='DefActionsOutsidePen' placeholder='DefActionsOutsidePen' onChange={handleChange}/>
                <label htmlFor="GoalAgainst">Goals Against:</label>
                <input type='text' name='GoalAgainst' id='GoalAgainst' placeholder='GoalAgainst' onChange={handleChange}/>
                <label htmlFor="PSxGGA">PSxGGA:</label>
                <input type='text' name='PSxGGA' id='PSxGGA' placeholder='PSxGGA' onChange={handleChange}/>
                <label htmlFor="PSxGSoT">PSxGSoT</label>
                <input type='text' name='PSxGSoT' id='PSxGSoT' placeholder='PSxGSoT' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else if(position === 'DEF'){
        return(
            <form id='DEFForm' onSubmit={submitStats}>
                <h2 id="position-heading">{position}:</h2>
                <label htmlFor="name">Name: </label>
                <input type='text' id='name' name='name' placeholder='Name' onChange={handleChange}/>
                <label htmlFor="position">Position:</label>
                <input type='text' id='position' name='position' placeholder='Position' onChange={handleChange}/>
                <label htmlFor="club">Club:</label>
                <input type='text' id='club' name='club' placeholder='Club' onChange={handleChange}/>
                <label htmlFor="TacklesPer90">Tackels Per 90:</label>
                <input type='text' name='TacklesActionsPer90' id='TacklesPer90' placeholder='TacklesPer90' onChange={handleChange}/>
                <label htmlFor="DEfensiveActionsPer90">Defensive Actions Per 90:</label>
                <input type='text' name='DefensiveActionsPer90' id='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleChange}/>
                <label htmlFor="AerialDeadBalls">Aerial Deadballs won: </label>
                <input type='text' name='AerialDeadBalls' id='AerialDeadBalls' placeholder='AerialDeadBalls' onChange={handleChange}/>
                <label htmlFor="AttackingOutput">Attacking Output:</label>
                <input type='text' name='AttackingOutput' id='AttackingOutput' placeholder='AttackingOutput' onChange={handleChange}/>
                <label htmlFor="BallRetention">Ball Retention:</label>
                <input type='text' name='BallRetention' id='BallRetention' placeholder='BallRetention' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else if(position === 'MID'){
        return(
            <form id='MIDForm' onSubmit={submitStats}>
                <h2 id="position-heading">{position}:</h2>
                <label htmlFor="name">Name:</label>
                <input type='text' id='name' name='name' placeholder='Name' onChange={handleChange}/>
                <label htmlFor="position">Position</label>
                <input type='text' id='position' name='position' placeholder='Position' onChange={handleChange}/>
                <label htmlFor="club">Club:</label>
                <input type='text' id='club' name='club'placeholder='Club' onChange={handleChange}/>
                <label htmlFor="xG">xG(Expected Goals):</label>
                <input type='text' name='xG' id='xG' placeholder='xG' onChange={handleChange}/>
                <label htmlFor="xA">xA(Expected Assists):</label>
                <input type='text' name='xA' id='xA' placeholder='xA' onChange={handleChange}/>
                <label htmlFor="shoot">Shooting: </label>
                <input type='text' name='shoot' id='shoot' placeholder='Shoot' onChange={handleChange}/>
                <label htmlFor="Defensive Actions Per 90">Defensive Actions Per 90:</label>
                <input type='text' name='DefensiveActionsPer90' id='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleChange}/>
                <label htmlFor="Linkup">Linkup:</label>
                <input type='text' name='Linkup' id='Linkup' placeholder='Linkup' onChange={handleChange}/>
                <label htmlFor="AttackingOutput">Attacking Output:</label>
                <input type='text' name='AttackingOutput' id='AttackingOutput' placeholder='AttackingOutput' onChange={handleChange}/>
                <label htmlFor="BallRetention">Ball Retention:</label>
                <input type='text' name='BallRetention' id='BallRetention' placeholder='BallRetention' onChange={handleChange}/>
                <label htmlFor="Dribble">Dribbling:</label>
                <input type='text' name='Dribble' id='Dribble' placeholder='Dribble' onChange={handleChange}/>
                <label htmlFor="Aerial">Aerial:</label>
                <input type='text' name='Aerial' id='Aerial' placeholder='Aerial' onChange={handleChange}/>
                <label htmlFor="Recover">Recover:</label>
                <input type='text' name='Recover' id='Recover' placeholder='Recover' onChange={handleChange}/>
                <label htmlFor="PassTowardsGoal">Pass Towards Goal:</label>
                <input type='text' name='PassTowardsGoal' id='PassTowardsGoal' placeholder='PassTowardsGoal' onChange={handleChange}/>
                <label htmlFor="ReceiveInBox">Recieve In Box:</label>
                <input type='text' name='RecieveInBox' id='RecieveInBox' placeholder='RecieveInBox' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else if(position === 'WING'){
        return(
            <form id='WINGForm' onSubmit={submitStats}>
                <h2 id="position-heading">{position}:</h2>
                <h2 id="position-heading">{position}:</h2>
                <label htmlFor="name">Name:</label>
                <input type='text' id='name' name='name' placeholder='Name' onChange={handleChange}/>
                <label htmlFor="position">Position</label>
                <input type='text' id='position' name='position' placeholder='Position' onChange={handleChange}/>
                <label htmlFor="club">Club:</label>
                <input type='text' id='club' name='club'placeholder='Club' onChange={handleChange}/>
                <label htmlFor="xG">xG(Expected Goals):</label>
                <input type='text' name='xG' id='xG' placeholder='xG' onChange={handleChange}/>
                <label htmlFor="xA">xA(Expected Assists):</label>
                <input type='text' name='xA' id='xA' placeholder='xA' onChange={handleChange}/>
                <label htmlFor="shoot">Shooting: </label>
                <input type='text' name='shoot' id='shoot' placeholder='Shoot' onChange={handleChange}/>
                <label htmlFor="Defensive Actions Per 90">Defensive Actions Per 90:</label>
                <input type='text' name='DefensiveActionsPer90' id='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleChange}/>
                <label htmlFor="Linkup">Linkup:</label>
                <input type='text' name='Linkup' id='Linkup' placeholder='Linkup' onChange={handleChange}/>
                <label htmlFor="AttackingOutput">Attacking Output:</label>
                <input type='text' name='AttackingOutput' id='AttackingOutput' placeholder='AttackingOutput' onChange={handleChange}/>
                <label htmlFor="BallRetention">Ball Retention:</label>
                <input type='text' name='BallRetention' id='BallRetention' placeholder='BallRetention' onChange={handleChange}/>
                <label htmlFor="Dribble">Dribbling:</label>
                <input type='text' name='Dribble' id='Dribble' placeholder='Dribble' onChange={handleChange}/>
                <label htmlFor="Aerial">Aerial:</label>
                <input type='text' name='Aerial' id='Aerial' placeholder='Aerial' onChange={handleChange}/>
                <label htmlFor="Recover">Recover:</label>
                <input type='text' name='Recover' id='Recover' placeholder='Recover' onChange={handleChange}/>
                <label htmlFor="PassTowardsGoal">Pass Towards Goal:</label>
                <input type='text' name='PassTowardsGoal' id='PassTowardsGoal' placeholder='PassTowardsGoal' onChange={handleChange}/>
                <label htmlFor="ReceiveInBox">Recieve In Box:</label>
                <input type='text' name='RecieveInBox' id='RecieveInBox' placeholder='RecieveInBox' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else{
        return(
            <form id='STForm' onSubmit={submitStats}>
                <h2 id="position-heading">{position}:</h2>
                <h2 id="position-heading">{position}:</h2>
                <label htmlFor="name">Name:</label>
                <input type='text' id='name' name='name' placeholder='Name' onChange={handleChange}/>
                <label htmlFor="position">Position</label>
                <input type='text' id='position' name='position' placeholder='Position' onChange={handleChange}/>
                <label htmlFor="club">Club:</label>
                <input type='text' id='club' name='club'placeholder='Club' onChange={handleChange}/>
                <label htmlFor="xG">xG(Expected Goals):</label>
                <input type='text' name='xG' id='xG' placeholder='xG' onChange={handleChange}/>
                <label htmlFor="xA">xA(Expected Assists):</label>
                <input type='text' name='xA' id='xA' placeholder='xA' onChange={handleChange}/>
                <label htmlFor="shoot">Shooting: </label>
                <input type='text' name='shoot' id='shoot' placeholder='Shoot' onChange={handleChange}/>
                <label htmlFor="Defensive Actions Per 90">Defensive Actions Per 90:</label>
                <input type='text' name='DefensiveActionsPer90' id='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleChange}/>
                <label htmlFor="Linkup">Linkup:</label>
                <input type='text' name='Linkup' id='Linkup' placeholder='Linkup' onChange={handleChange}/>
                <label htmlFor="AttackingOutput">Attacking Output:</label>
                <input type='text' name='AttackingOutput' id='AttackingOutput' placeholder='AttackingOutput' onChange={handleChange}/>
                <label htmlFor="BallRetention">Ball Retention:</label>
                <input type='text' name='BallRetention' id='BallRetention' placeholder='BallRetention' onChange={handleChange}/>
                <label htmlFor="Dribble">Dribbling:</label>
                <input type='text' name='Dribble' id='Dribble' placeholder='Dribble' onChange={handleChange}/>
                <label htmlFor="Aerial">Aerial:</label>
                <input type='text' name='Aerial' id='Aerial' placeholder='Aerial' onChange={handleChange}/>
                <label htmlFor="Recover">Recover:</label>
                <input type='text' name='Recover' id='Recover' placeholder='Recover' onChange={handleChange}/>
                <label htmlFor="PassTowardsGoal">Pass Towards Goal:</label>
                <input type='text' name='PassTowardsGoal' id='PassTowardsGoal' placeholder='PassTowardsGoal' onChange={handleChange}/>
                <label htmlFor="ReceiveInBox">Recieve In Box:</label>
                <input type='text' name='RecieveInBox' id='RecieveInBox' placeholder='RecieveInBox' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
}

export default FormPosition