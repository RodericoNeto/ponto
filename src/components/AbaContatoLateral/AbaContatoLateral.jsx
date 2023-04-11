import React from 'react'
import './AbaContatoLateral.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function AbaContatoLateral() {
  return (
    <div className='abalateral-container'>
        <a href='https://www.google.com'><WhatsAppIcon style={{color: 'white', fontSize: '32px'}}/></a>
        <a><InstagramIcon style={{color: 'white', fontSize: '32px'}}/></a>
    </div>
  )
}
