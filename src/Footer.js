import React from 'react';
import {FaHeart} from 'react-icons/fa';
import './App.css';


function Footer() {
    return(
    <div className="footer">
       <span className='footertext'>© 2022, HILIFE.AI Pvt. Ltd. All Rights Reserved.</span>
        <br /><br />
        <span className='hearts'>Made with &ensp;<FaHeart className='heart' /> &ensp; in TRICHY  &ensp;| &ensp; திருச்சியில் உருவாக்கப்பட்டது &ensp;<FaHeart className='heart' />  </span>
    </div>
    );
  }
export default Footer;