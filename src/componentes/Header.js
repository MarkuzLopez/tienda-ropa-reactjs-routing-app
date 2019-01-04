import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => { 
    return(
        <header>
            <Link to={'/'} >
                <img src="/img/logo.png" alt="logo img" />
            </Link>
        </header>
        // <header>
        //     <img src="/img/logo.png" />
        // </header>
    )
}

export default Header;

