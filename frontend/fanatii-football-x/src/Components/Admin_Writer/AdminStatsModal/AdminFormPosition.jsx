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
                <input type='text' name='name' className='name' placeholder='Name' onChange={handleChange}/>
                <input type='text' name='position'className='position' placeholder='Position' onChange={handleChange}/>
                <input type='text' name='club' className='club'  placeholder='club' onChange={handleChange}/>
                <input type='text' name='DefActionsOutsidePen' className='DefActionsOutsidePen' placeholder='DefActionsOutsidePen' onChange={handleChange}/>
                <input type='text' name='GoalAgainst' className='GoalAgainst' placeholder='GoalAgainst' onChange={handleChange}/>
                <input type='text' name='PSxGGA' className='PSxGGA' placeholder='PSxGGA' onChange={handleChange}/>
                <input type='text' name='PSxGSoT' className='PSxGSoT' placeholder='PSxGSoT' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else if(position === 'DEF'){
        return(
            <form id='DEFForm' onSubmit={submitStats}>
                <h2 id="position-heading">{position}:</h2>
                <input type='text' className='name' name='name' placeholder='Name' onChange={handleChange}/>
                <input type='text' className='position' name='position' placeholder='Position' onChange={handleChange}/>
                <input type='text' className='club' name='club' placeholder='Club' onChange={handleChange}/>
                <input type='text' name='TacklesActionsPer90' className='TacklesPer90' placeholder='TacklesPer90' onChange={handleChange}/>
                <input type='text' name='DefensiveActionsPer90' className='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleChange}/>
                <input type='text' name='AerialDeadBalls' className='AerialDeadBalls' placeholder='AerialDeadBalls' onChange={handleChange}/>
                <input type='text' name='AttackingOutput' className='AttackingOutput' placeholder='AttackingOutput' onChange={handleChange}/>
                <input type='text' name='BallRetention' className='BallRetention' placeholder='BallRetention' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else if(position === 'MID'){
        return(
            <form id='MIDForm' onSubmit={submitStats}>
                <h2 id="position-heading">{position}:</h2>
                <input type='text' className='name' name='name' placeholder='Name' onChange={handleChange}/>
                <input type='text' className='position' name='position' placeholder='Position' onChange={handleChange}/>
                <input type='text' className='club' name='club'placeholder='Club' onChange={handleChange}/>
                <input type='text' name='xG' className='xG' placeholder='xG' onChange={handleChange}/>
                <input type='text' name='xA' className='xA' placeholder='xA' onChange={handleChange}/>
                <input type='text' name='shoot' className='shoot' placeholder='Shoot' onChange={handleChange}/>
                <input type='text' name='DefensiveActionsPer90' className='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleChange}/>
                <input type='text' name='Linkup' className='Linkup' placeholder='Linkup' onChange={handleChange}/>
                <input type='text' name='AttackingOutput' className='AttackingOutput' placeholder='AttackingOutput' onChange={handleChange}/>
                <input type='text' name='BallRetention' className='BallRetention' placeholder='BallRetention' onChange={handleChange}/>
                <input type='text' name='Dribble' className='Dribble' placeholder='Dribble' onChange={handleChange}/>
                <input type='text' name='Aerial' className='Aerial' placeholder='Aerial' onChange={handleChange}/>
                <input type='text' name='Recover' className='Recover' placeholder='Recover' onChange={handleChange}/>
                <input type='text' name='PassTowardsGoal' className='PassTowardsGoal' placeholder='PassTowardsGoal' onChange={handleChange}/>
                <input type='text' name='RecieveInBox' className='RecieveInBox' placeholder='RecieveInBox' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else if(position === 'WING'){
        return(
            <form id='WINGForm' onSubmit={submitStats}>
                <h2 id="position-heading">{position}:</h2>
                <input type='text' className='name' name='name' placeholder='Name' onChange={handleChange}/>
                <input type='text' className='position' name='position' placeholder='Position' onChange={handleChange}/>
                <input type='text' className='club' name='club'placeholder='Club' onChange={handleChange}/>
                <input type='text' name='xG' className='xG' placeholder='xG' onChange={handleChange}/>
                <input type='text' name='xA' className='xA' placeholder='xA' onChange={handleChange}/>
                <input type='text' name='shoot' className='shoot' placeholder='Shoot' onChange={handleChange}/>
                <input type='text' name='DefensiveActionsPer90' className='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleChange}/>
                <input type='text' name='Linkup' className='Linkup' placeholder='Linkup' onChange={handleChange}/>
                <input type='text' name='AttackingOutput' className='AttackingOutput' placeholder='AttackingOutput' onChange={handleChange}/>
                <input type='text' name='BallRetention' className='BallRetention' placeholder='BallRetention' onChange={handleChange}/>
                <input type='text' name='Dribble' className='Dribble' placeholder='Dribble' onChange={handleChange}/>
                <input type='text' name='Aerial' className='Aerial' placeholder='Aerial' onChange={handleChange}/>
                <input type='text' name='Recover' className='Recover' placeholder='Recover' onChange={handleChange}/>
                <input type='text' name='PassTowardsGoal' className='PassTowardsGoal' placeholder='PassTowardsGoal' onChange={handleChange}/>
                <input type='text' name='RecieveInBox' className='RecieveInBox' placeholder='RecieveInBox' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else{
        return(
            <form id='STForm' onSubmit={submitStats}>
                <h2 id="position-heading">{position}:</h2>
                <input type='text' className='name' name='name' placeholder='Name' onChange={handleChange}/>
                <input type='text' className='position' name='position' placeholder='Position' onChange={handleChange}/>
                <input type='text' className='club' name='club'placeholder='Club' onChange={handleChange}/>
                <input type='text' name='xG' className='xG' placeholder='xG' onChange={handleChange}/>
                <input type='text' name='xA' className='xA' placeholder='xA' onChange={handleChange}/>
                <input type='text' name='shoot' className='shoot' placeholder='Shoot' onChange={handleChange}/>
                <input type='text' name='DefensiveActionsPer90' className='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleChange}/>
                <input type='text' name='Linkup' className='Linkup' placeholder='Linkup' onChange={handleChange}/>
                <input type='text' name='AttackingOutput' className='AttackingOutput' placeholder='AttackingOutput' onChange={handleChange}/>
                <input type='text' name='BallRetention' className='BallRetention' placeholder='BallRetention' onChange={handleChange}/>
                <input type='text' name='Dribble' className='Dribble' placeholder='Dribble' onChange={handleChange}/>
                <input type='text' name='Aerial' className='Aerial' placeholder='Aerial' onChange={handleChange}/>
                <input type='text' name='Recover' className='Recover' placeholder='Recover' onChange={handleChange}/>
                <input type='text' name='PassTowardsGoal' className='PassTowardsGoal' placeholder='PassTowardsGoal' onChange={handleChange}/>
                <input type='text' name='RecieveInBox' className='RecieveInBox' placeholder='RecieveInBox' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
}

export default FormPosition