import React from 'react'
import './EventCards.css';
import img1 from '../../assets/images/EventCardimage1.jpg';
import { Button } from '@material-ui/core';
function EventCards() {
    return (
        <div className="Event_Card_main_contaienr">
             <div className="Event_Card_img">
                    <img  src={img1} alt="no image avalible" />
             </div>
             <div className="Event_card_date">
                 <p>JULY 13 - NOVEMBER 14, 2019</p>
             </div>
             <div className="Event_card_title">
                 <p>Stray gleams steal into the inner sanctuary</p>
             </div>
             <div className="Event_card_desc">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                 Integer ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum.</p>
             </div>
             <Button className="Event_card_button" >READ MORE</Button>
             <span className="Event_bottom_underline"></span>
        </div>
    )
}

export default EventCards;
