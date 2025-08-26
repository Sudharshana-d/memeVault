import React from 'react';
import meme from '../assets/meme.png';


function Header()
{
    return(
        <header>
            <img src={meme} alt="logo image"/>
            <h1>MemeVault</h1>
        </header>
    )
}
export default Header;