import React from 'react'
import Logo from './Logo'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import {linka,linkb} from "../utils/footerlinks"
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import "./Footer.css"

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className="footer__left">
          <h2>BamEmpire</h2>
          <div className='footer__desc'>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
             optio, eaque rerum! Provident similique accusantium nemo autem.
            </p>
          </div>
          <div className='footer__social'>
          <div className='icon'><FacebookIcon/></div>
          <div className='icon2'><InstagramIcon/></div>
          <div className='icon3'><TelegramIcon/></div>
          </div>
        </div>
        <div className="footer__center">
           <h2>Links</h2>
          <div className='footer__links'>
            <div className='footer__linksa'>
              {linka.map(link=><a href={link.links}><div className='footer__linkitems' key={link.id}>{link.heading}</div></a>
)}
            </div>
            <div className='footer__linksb'>
            {linkb.map(link=><a href={link.links}><div className='footer__linkitems' key={link.id}>{link.heading}</div></a>
)}
            </div>

          </div>
        </div>
        <div className='footer__right'>
          <h2>Contact</h2>
          <span><HomeIcon/>Address: addres here.</span>
          <span><PhoneIcon/>tel: 08033173928</span>
          <span><MailIcon/>Email: email@yahoo.com</span>
          <div className='footer__img'>
            <div className='footer__imgcont'><img src='/images/visa-mastercard.png' alt='cardimg'/>
</div>
          </div>
        </div>
    </div>
    <div className='footer__bottom'>
      Made By Diaryofatechnovies @copyright 2022
    </div>
    </>
    
  )
}

export default Footer