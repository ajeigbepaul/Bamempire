import React from 'react'
import "./Newsletter.css"
import SendIcon from '@mui/icons-material/Send';

function Newsletter() {
  return (
    <div className='newsletter'>
        <div className='newsletter__header'>
            <h2>Newsletter</h2>
            <p>Get timely update on our latest products</p>
        </div>
        <div className="newsletter__form">
            <form>
                <div className="newletter__input">
                    <input type="text" placeholder='Your email'/>
                    <button><SendIcon className="newletter__btn"/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Newsletter