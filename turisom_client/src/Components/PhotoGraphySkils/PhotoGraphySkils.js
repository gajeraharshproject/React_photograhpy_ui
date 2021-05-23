import React from 'react'
import './PhotoGraphySkils.css';
import PhotoGraphySkilsimg from '../../assets/images/EventCardimage2.jpg'
function PhotoGraphySkils() {
    return (
        <section className="PhotoGraphySkils">
            <div className="PhotoGraphySkils_content">
                <div className="PhotoGraphySkils_first_container">
                    <h1 className="PhotoGraphySkils_first_title">
                        Photography is an Art
                </h1>
                    <p className="PhotoGraphySkils_first_desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget lectus eu ex
                        ornare porta euismod a libero. Phasellus vehicula
                        placerat enim at egestas. Aliquam suscipit felis in massa hendrerit tristique.
                </p>
                </div>
                <div className="PhotoGraphySkils_first_container">
                    <h1 className="PhotoGraphySkils_first_title">
                        Skills & Perspectives
                </h1>
                    <p className="PhotoGraphySkils_first_desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget lectus eu ex
                        ornare porta euismod a libero. Phasellus vehicula
                        placerat enim at egestas. Aliquam suscipit felis in massa hendrerit tristique.
                </p>
                </div>
               
            </div>
            <div className="PhotoGraphySkils_imge">
                <img src={PhotoGraphySkilsimg} alt="no PhotoGraphySkils img avalible" />
            </div>

        </section>
    )
}

export default PhotoGraphySkils
