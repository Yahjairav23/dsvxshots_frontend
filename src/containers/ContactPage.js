import React from 'react'
import contactImage from '../images/contact-image.jpeg'

function ContactContainer() {
    return(
        <div>
            <h1>Contact Us</h1>
            <div className='row'>
                <div className='col'>
                    <div className='contact-decor'>
                        <img src={contactImage} alt='photographer-headshot' className='contact-img'/>
                    </div>
                </div>
                <div className='col'>
                    <div className='contact-details-container'>
                        <div className='mid'>
                        <h2 className='contact-name'>Dee Snelson</h2>
                        <h4 className='contact-number'>000-000-0000</h4>
                        <h4 className='contact-email'>demo@demo.com</h4>
                        <div className='contact-inquiry'>
                        <input className="email" type="text" placeholder="Email"/>
                        <textarea className='contact-text-box' rows='5' placeholder='Inquire here...'/>
                        <br/>
                        <input type='submit' value='Submit'/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactContainer