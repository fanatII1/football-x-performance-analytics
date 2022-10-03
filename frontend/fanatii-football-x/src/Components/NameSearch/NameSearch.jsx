import React from 'react'
import './NameSearch.css'
import Navbar from '../Global_Navbar/Navbar'
import Avatar from './NameSearchImages/avatar.webp'
import Footer from '../Global_Footer/Footer'
import GlobalNavBottom from '../GlobalNavBottom/GlobalNavBottom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function NameSearch() {
    const [playerName, setPlayerName] = useState('');
    const [playerBackendData, setPlayerBackendData] = useState()

    //when user enters data in element, we take target element value and store it in state
    const handleChange = (e) =>{
        let playerName = e.target.value;
        setPlayerName(playerName)
    }

    //when user clicks enter, we fetch specific player from the database
    const SearchPlayerEnter = async (e) =>{
        e.preventDefault();
        await fetch('/GlobalSearch/NameSearch', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adminToken") || localStorage.getItem("userToken")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({playerName: playerName})
        })
        .then((res)=> res.json())
        .then((data)=>{
            setPlayerBackendData(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    if(localStorage.getItem('adminToken') || localStorage.getItem('userToken')){
        if(typeof playerBackendData !== 'undefined'){
            return (
                <>
                    <Navbar idNav='nav-search' />
                    <div id='Main-Search-player-container'>
            
                        <div id='search-container'>
                            <div id='search-input-wrapper'>
                                <form id='search-form' method='GET' action='/GlobalSearch/NameSearch'>
                                <input type='text' className='search-field' onChange={handleChange} value={'' || playerName} placeholder='Search Player...'/>
                                <input type='button' value='Search' className='submit-search' onClick={SearchPlayerEnter}/>
                                </form>
                            </div>
            
                            <div id='searched-player'>
                                <div className='searched-player-image-wrapper'>
                                    <img src={typeof playerBackendData === 'undefined' ? Avatar : playerBackendData[0].player_image } alt='player' className='searched-image' />
                                </div>
                                <div className='searched-player-summary'>
                                    <p className="player-name">Name: <span className='player-searched-info'>{typeof playerBackendData === 'undefined' ? ' ' : playerBackendData[0].name}</span></p>
                                    <p className="player-dOb">Date of Birth: <span className='player-searched-info'>{typeof playerBackendData === 'undefined' ? ' ' : playerBackendData[0].dateOfBirth}</span></p>
                                    <p className="player-nationality">Nationality: <span className='player-searched-info'>{typeof playerBackendData === 'undefined' ? ' ' : playerBackendData[0].nationality}</span></p>
                                    <p className="player-position">Position: <span className='player-searched-info'>{typeof playerBackendData === 'undefined' ? ' ' : playerBackendData[0].position}</span></p>
                                </div>
                            </div>
                        </div>
            
                    </div>
                    <Footer idFooter='home-footer'/>
                    <GlobalNavBottom navBottom='articles-nav-bottom'/>
                </>
              )
        }
    }
    else{
      return <p style={{color: 'white'}}><Link to='/SignUp'>Please Sign Up</Link></p>
    }
}

export default NameSearch