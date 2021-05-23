import React from 'react'
import Cards from '../Cards/Cards';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';

function Headercardsection() {
    return (
        <section className="Header_cards_Section">
            <div className="cards_main_div">
                <Cards
                    Logo={CameraAltOutlinedIcon}
                    title="Photo Sessions"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum."
                    button="READ MORE"
                />
                <Cards
                    Logo={EmojiObjectsOutlinedIcon}
                    title="Occasions"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum."
                    button="READ MORE"
                />
                <Cards
                    Logo={CheckBoxOutlineBlankOutlinedIcon}
                    title="Coverage"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum."
                    button="READ MORE"
                />

            </div>
        </section>
    )
}

export default Headercardsection
