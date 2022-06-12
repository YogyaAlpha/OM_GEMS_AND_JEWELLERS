import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import MyLogo from './MyLogo.png'
export default function Footer() {
    let footerStyle = {
        position : "relative",
        width : "100%",
        top : "30vh"
    }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
        <ul className='footerListing'>
            <li><Link className="footerAnchor" to='/Contactus'>Contact Us</Link></li>
            <li><Link to = '/'className='footerAnchor'>About</Link></li>
            <li><a href = 'https://www.amazon.in/s?me=A3G0ZFBJN008N&ref=sf_seller_app_share_new'className='footerAnchor'>Amazon Store</a></li>
            <li><a href = 'https://www.instagram.com/om_gems_and_jewellers/?hl=en'className='footerAnchor'>Instagram</a></li>
        </ul>
        <p className='text-center'>Copyright &copy; OM GEMS AND JEWELLERS <img className='footerimg' src={MyLogo} alt="" width="20" height="20"/></p>
    </footer>
  );
}
