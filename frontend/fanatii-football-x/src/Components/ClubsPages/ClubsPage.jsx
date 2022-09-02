import React from 'react'
import { useEffect } from 'react'

//this component will render the specific clubs data 
//and make a request via the clubs name, which is passed by state
function ClubsPage({clubName}) {
  //fetch club data after component has loaded
  useEffect(()=>{
    const fetchClubdata = (clubName)=>{
        fetch(`/GlobalSearch/ClubSearch/${clubName}`)
        .then((res)=> res.json())
        .then((data)=>{
         console.log(data)
        })
    }

    fetchClubdata(clubName)
    })

  return (
    <div>ClubsPage</div>
  )
}

export default ClubsPage