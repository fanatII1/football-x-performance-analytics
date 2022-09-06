import React from 'react'
import './ModalClubPages.css'
import statsImage from './analytics4.png'
import { useRef, useState } from 'react'

function ModalClubPages() {
    const [openCloseModal, setOpenCloseModal] = useState('open-modal')
    const modalContainer = useRef();
    //closeModal onClick
    const closeModal = (e) =>{
        e.preventDefault();
        setOpenCloseModal('close-modal')
    }

  return (
    <div id={openCloseModal}>
        <div className="detailed-tabled-stats">
            <div className="detailed-stats-image-container">
                <img src={statsImage} alt="statistics" />
                <button id="close" onClick={closeModal}>X</button>
            </div>
            
        <table>
            <tr>
                <td className='col-main-heading'>Season:</td>
                <td className='col-main-heading'>Minutes:</td>
                <td className='col-main-heading'>Disrupting opposition moves</td>
                <td className='col-main-heading'>Recovering a moving ball</td>
                <td className='col-main-heading'>% involvement in moves ending in a goal</td>
                <td className='col-main-heading'>% involvement in moves ending in a shot</td>
            </tr>

            <tr>
                <td>2021/2022</td>
                <td>455</td>
                <td>45</td>
                <td>56</td>
                <td>77</td>
                <td>80</td>
            </tr>
            <tr>
                <td>2020/2021</td>
                <td>1344</td>
                <td>54</td>
                <td>34</td>
                <td>66</td>
                <td>71</td>
            </tr>

            <tr>
                <td>2019/2021</td>
                <td>1232</td>
                <td>51</td>
                <td>51</td>
                <td>69</td>
                <td>74</td>
            </tr>
        </table>
        </div>
    </div>
  )
}

export default ModalClubPages