import React from 'react'
import './NameSearch.css'
import Navbar from '../Global_Navbar/Navbar'
import { useState } from 'react'

function NameSearch() {
    const [playerName, setPlayerName] = useState('')

    //when user enters data in element, we take target element value and store it in state
    const handleChange = (e) =>{
        let playerName = e.target.value;
        setPlayerName(playerName)
    }

    //when user clicks enter, we fetch specific player from the database
    const SearchPlayerEnter = async (e) =>{
        e.preventDefault();
        await fetch('/GlobalSearch/NameSearch', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({playerName: playerName})
        })
    }

  return (
    <>
        <Navbar idNav='nav-search' />
        <div id='Main-Search-player-container'>

            <div id='search-container'>
                <div id='search-input-wrapper'>
                    <form id="search-form">
                    <input type='text' className='search-field' onChange={handleChange} value={'' || playerName} placeholder='Search Player...'/>
                    <input type='button' value='Search' className='submit-search' onClick={SearchPlayerEnter}/>
                    </form>
                </div>

                <div id='searched-player'>
                    <div className='searched-player-image-wrapper'>
                        <img src='' alt='' className='searched-image' />
                    </div>
                    <div className='searched-player-summary'>

                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default NameSearch