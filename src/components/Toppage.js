import React, { useState, useEffect } from 'react';
import { Button } from './NavButton';
import { Link } from 'react-router-dom';
import './Toppage.css';

import fblogo from '../assets/images/Facebook Icon .png';
import instalogo from '../assets/images/instagram-logo.png';


function Navbar() {
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
     {/*Phan navigation bar cua toppage*/}
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
              <Link to='/AboutUs' target="_self" className='nav-links' onClick={closeMobileMenu}>
                About Us
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

 {/*Phan hinh anh game cua toppage*/}
      <div className='hero-container'>
        <h1>BEST TEAM NAME</h1>
      </div>

 
 {/*Phan How to play cua toppage*/}
      <div className="How-to-play">
        <h2>how to play</h2>
        <p>プレイヤーは、障害を乗り越えるための武器や能力を手に入れることができます。
          ただし、1回しか使用できません。武器は出現回数は無制限です。
          走っている間、武器はランダムに出現します。
        </p>
      </div>


    {/*Phan contact us cua toppage*/}
      <div className='footer'>
        <p>contact us</p>
        <img src={instalogo} width="65"
          height="60" />
        <img src={fblogo} width="130"
          height="60" />
        <a href="mailto: abc@example.com">bestteamname@gmail.com</a>
      </div>
    </>
  );
}

export default Navbar;