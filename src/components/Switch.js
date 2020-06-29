import React from 'react';
import './Switch.css';
import pikachu from '../media/pikachubutton_original.png';
// import {keyframes} from 'styled-components'

const Switch = ({ buttonOn, handleToggle}) => {

    return(
        <div class="center">
            <button
                className={buttonOn ? 'buttonOn' : 'buttonOff'}
                onClick={ () => { handleToggle() } }
            >
                <img src={pikachu} />
            </button>
        </div>
    )
}

export default Switch;