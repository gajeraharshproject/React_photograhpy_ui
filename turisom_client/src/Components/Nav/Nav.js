import React,{useState} from 'react'
import './Nav.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Button} from '@material-ui/core'
function Nav() {
    const [nav,setnav]  = useState("NavSection");
    const setscroll = () => {
       if(window.scrollY >= 50){
           setnav("NavSection Navactive")
       }else{
           setnav("NavSection")
       }
    }

     window.addEventListener("scroll",setscroll);
    return (
        <section className={nav}>
            <div className="Nav_Main_Row">
                <div className="NAV_Main_Row_coll_Left">
                 <h1 className="MAIN_HEADING_WEB_NAME">PhotoM4</h1>
                </div>
                <div className="NAV_Main_Row_coll_Right">
                    <div className="nav_MAIN_Row_Coll_ROW_Top">
                          <div className="icons">
                          <div className="icon">
                                <TwitterIcon />
                            </div>
                            <div className="icon">
                                <FacebookIcon />
                            </div>
                            <div className="icon">
                                <InstagramIcon />
                          
                            </div>
                          </div>
                    </div>
                    <div className="nav_MAIN_Row_Coll_ROW_Bottom">
                            <ul>
                                <li style={{marginRight:"1rem",marginBottom:"6px"}} className="sub_li"><a href="#">Home</a></li>
                                <li className="li_liverdemo sub_li "><a href="#">Live Demo</a><span><ArrowDropDownIcon /></span>
                                   <div className="LIVERDEMO_HOVER_DIV">
                                         <ul>
                                             <a href="#">Photographer</a>
                                             <a href="#">Photo Studio</a>
                                             <a href="#">photo workshop</a>
                                             <a href="#">photo workshop</a>
                                             <a href="dg">dsgsag</a>
                                         </ul>
                                   </div>
                                </li>
                                <li className="li_liverdemobloks sub_li"><a href="#">Live Demo Blcoks</a><ArrowDropDownIcon />
                                <div className="livedemoblaocks">
                                         <ul>
                                             <a href="#">Photographer</a>
                                             <a href="#">Photo Studio</a>
                                             <a href="#">photo workshop</a>
                                             <a href="#">photo workshop</a>
                                             <a href="dg">dsgsag</a>
                                         </ul>
                                   </div>
                                </li>
                                
                            </ul>
                            <div className="btn">
                            <Button variant="contained" color="secondary">Buy Now</Button>
                            </div>
                         
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nav
