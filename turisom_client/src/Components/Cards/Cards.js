import React from 'react'
import './Card.css'
import {Button} from '@material-ui/core'

function Cards({Logo,title,desc,button}) {

    return (
        <div className="card_main_container">
                <div className="Card_logo">
                    <Logo style={{fontSize:"4rem",color:"#00d8a6"}} />
                </div>
                <div className="card_title">
                    <h5>{title}</h5>
                </div>
                <div className="card_desc">
                    <p>{desc}</p>
                </div>
                <Button className="button_cards" style={{color:"white"}}>
                   {button}
                </Button>
                <span className="button_underline"></span>
        </div>
    )
}

export default Cards
