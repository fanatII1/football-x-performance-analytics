import React from 'react'
import { useState } from 'react'
import './StatsModal.css'

//modal component for admin to update stats
//based on the position of the player, a different form will appear
//thus we pass the value of the state(position) to the Form Position function(2ndfunc/component)
function StatsModal({adminModal, setAdminModal}) {
    const [positionFormState, setPositionFormState] = useState('GK');

    //onChange, we will display specific form for specific position
    const handlePositionChange = (e) =>{
        console.log(e.target.value)
        setPositionFormState(e.target.value)
    }

    //onClick hides admin modal
    const hideAdminModal = (e) =>{
        e.preventDefault();
        setAdminModal('hideModal')
    }

  return (
    <>
    <aside id={adminModal}>
        <button  id='closeAdminModal' onClick={hideAdminModal}>X</button>

        <select name='' id='position-select'  onChange={handlePositionChange}>
            <option className='position-option'>GK</option>
            <option className='position-option'>DEF</option>
            <option className='position-option'>MID</option>
            <option className='position-option'>WING</option>
            <option className='position-option'>ST/CF</option>
        </select>
        <FormPosition position={positionFormState}/>
    </aside>

    </>
  )
}


function FormPosition({position}){
    const [userData, setUserData] = useState({});

    //onChange, we store the value in object
    const handleChange = (e) =>{
        const name = e.target.name;
        const userValue = e.target.value;
        // console.log(name, userValue)
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
                <input type='text' className='name' name='name' placeholder='Name'/>
                <input type='text' className='position' placeholder='Position'/>
                <input type='text' className='club' placeholder='Club'/>
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
                <input type='text' className='name' name='name' placeholder='Name'/>
                <input type='text' className='position' name='Position' placeholder='Position'/>
                <input type='text' className='club' name='Club' placeholder='Club'/>
                <input type='text' name='xG' className='xG' placeholder='xG' onChange={handleChange}/>
                <input type='text' name='xA' className='xA' placeholder='xA' onChange={handleChange}/>
                <input type='text' name='DefensiveActionsPer90' className='DefensiveActionsPer90' placeholder='DefActionsOutsidePen' onChange={handleChange}/>
                <input type='text' name='AerialDeadBalls' className='AerialDeadBalls' placeholder='AerialDeadBalls' onChange={handleChange}/>
                <input type='text' name='AttackingOuptut' className='AttackingOuptut' placeholder='AttackingOuptut' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else if(position === 'MID'){
        return(
            <form id='MIDForm' onSubmit={submitStats}>
                <input type='text' className='name' name='name' placeholder='Name'/>
                <input type='text' className='position' name='Position' placeholder='Position'/>
                <input type='text' className='club' name='Club'placeholder='Club'/>
                <input type='text' name='xG' className='xG' placeholder='xG' onChange={handleChange}/>
                <input type='text' name='xA' className='xA' placeholder='xA' onChange={handleChange}/>
                <input type='text' name='DefensiveActionsPer90' className='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleChange}/>
                <input type='text' name='Linkup' className='Linkup' placeholder='Linkup' onChange={handleChange}/>
                <input type='text' name='AttackingOuptut' className='AttackingOuptut' placeholder='AttackingOutput' onChange={handleChange}/>
                <input type='text' name='BallRetention' className='BallRetention' placeholder='BallRetention' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else if(position === 'WING'){
        return(
            <form id='WINGForm' onSubmit={submitStats}>
                <input type='text' className='name' name='name' placeholder='Name'/>
                <input type='text' className='position' name='Position' placeholder='Position'/>
                <input type='text' className='club'name='Club' placeholder='Club'/>
                <input type='text' name='xG' className='xG' placeholder='xG' onChange={handleChange}/>
                <input type='text' name='xA' className='xA' placeholder='xA' onChange={handleChange}/>
                <input type='text' name='Dribble' className='Dribble' placeholder='Dribble' onChange={handleChange}/>
                <input type='text' name='DefensiveActionsPer90' className='DefensiveActionsPer90' placeholder='DefActionsPer90' onChange={handleChange}/>
                <input type='text' name='Linkup' className='Linkup' placeholder='Linkup' onChange={handleChange}/>
                <input type='text' name='AttackingOuptut' className='AttackingOuptut' placeholder='AttackingOutput' onChange={handleChange}/>
                <input type='text' name='PassTowardsGoal' className='PassTowardsGoal' placeholder='PassTowardsGoal' onChange={handleChange}/>
                <input type='text' name='Aerial' className='Aerial' placeholder='Aerial' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
    else{
        return(
            <form id='STForm' onSubmit={submitStats}>
                <input type='text' className='name' name='name' placeholder='Name'/>
                <input type='text' className='position' name='Position' placeholder='Position'/>
                <input type='text' className='club' name='Club' placeholder='Club'/>
                <input type='text' name='xG' className='xG' placeholder='xG' onChange={handleChange}/>
                <input type='text' name='xA' className='xA' placeholder='xA' onChange={handleChange}/>
                <input type='text' name='RecieveInBox' className='RecieveInBox' placeholder='RecieveInBox' onChange={handleChange}/>
                <input type='text' name='Aerial' className='Aerial' placeholder='Aerial' onChange={handleChange}/>
                <input type='text' name='Dribble' className='Dribble' placeholder='Dribble' onChange={handleChange}/>
                <input type='text' name='Recover' className='Recover' placeholder='Recover' onChange={handleChange}/>
                <input type='submit' id='playerSubmit' value='Submit' />
            </form>
        )
    }
}

export default StatsModal