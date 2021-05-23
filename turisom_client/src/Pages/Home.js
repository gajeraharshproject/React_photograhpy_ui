import React, { useState } from 'react'
import Nav from '../Components/Nav/Nav'
import './Home.css'

import { Button } from '@material-ui/core'

import Headercardsection from '../Components/Headercardsection/Headercardsection';
import EventSection from '../Components/Eventsection./EventSection';
function Home() {

    const [buttonhandler, setbuttonhandelr] = useState(false);


    return (
        <>
            <section className="Main_BAckground">
                <div className="Main_background_cover">

                </div>
                <div className="Main_Header_container">
                    <Nav />
                </div>
                <div className="navbar0verider">
                    <div className="Min_Heading_conatant_div">
                        <div className="main_heading_sub">
                            <div className="main_heading_content">
                                <h1>Photo Studio</h1>
                            </div>
                            <div className="MAIN_TEXT_HEADING_CONATEIN">
                                <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed eu dui non diam eleifend
                                egestas id a ligula. Proin interdum vehicula neque sit
                             amet scelerisque.</p>
                            </div>
                            <div className="BUTTON_MAIN_HEADNING">
                                <div className="btn_home">
                                    <Button
                                        style={buttonhandler ? null : { borderColor: "white", color: "white" }}
                                        onMouseOver={() => setbuttonhandelr(true)}
                                        onMouseOut={() => setbuttonhandelr(false)}
                                        variant={buttonhandler ? "contained" : "outlined"} >View More</Button>
                                </div>

                            </div>
                        </div>
                    </div>

                  <Headercardsection />

                
                </div>

            </section>
            <EventSection />
        </>
    )
}

export default Home
