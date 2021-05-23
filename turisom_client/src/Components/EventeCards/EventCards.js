import React from 'react'
import './EventCards.css';

import { Button } from '@material-ui/core';
function EventCards({Cardimg,cardtsmtitle,cardmaintitle,carddesc}) {
    return (
        <div className="Event_Card_main_contaienr">
             <div className="Event_Card_img">
                    <img  src={Cardimg} alt="no image avalible" />
             </div>
             <div className="Event_card_date">
                 <p>{cardtsmtitle}</p>
             </div>
             <div className="Event_card_title">
                 <p>{cardmaintitle}</p>
             </div>
             <div className="Event_card_desc">
                 <p>{carddesc}</p>
             </div>
             <Button className="Event_card_button" >READ MORE</Button>
             <span className="Event_bottom_underline"></span>
        </div>
    )
}

export default EventCards;
