import React from 'react';
import Instagramicon from '@mui/icons-material/Instagram';
import Twittericon from '@mui/icons-material/Twitter';
import Facebookicon from '@mui/icons-material/Facebook';
import LinkedInicon from '@mui/icons-material/LinkedIn';
import "../style/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagramicon />
            <Twittericon />
            <Facebookicon />
            <LinkedInicon />
        </div>
        <p> &copy; 2023 bharathpizza.com</p>
    </div>
  )
}

export default Footer