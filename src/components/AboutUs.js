import React, { useState, useEffect } from 'react';
import { Button } from './NavButton';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import fblogo from '../assets/images/Facebook Icon .png';
import instlogo from '../assets/images/instagram-logo.png';

function AboutUs() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);//tat di (nhan dau x)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Obstacles Crossed
                        <i class='fas fa-gamepad' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>

                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />  {/* Neu click dong thi
            hien dau x,neu chua click thi van con bars */}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/Home' target="_self" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/Login'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Login
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
            <div className='container'>
                <h1>Obstacles Crossed</h1>
                <ul>
                    <li>
                        Genre : Platform Game
                    </li>
                    <li>
                        Publisher : Best Team Name
                    </li>
                    <li>
                        Issue Date : ? / ? /2021
                    </li>
                    <li>
                        Age : 6 +
                    </li>
                </ul>

            </div>

            <div className='footer'>
                <p>contact us</p>
                <img src={instlogo} width="65"
                    height="60" />
                <img src={fblogo} width="130"
                    height="60" />
                <a href="mailto: abc@example.com">bestteamname@gmail.com</a>
            </div>
        </>
    );
}

export default AboutUs;