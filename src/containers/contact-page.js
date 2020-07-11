import React from 'react'
import contactImage from '../images/contact-image.jpeg'

function ContactContainer() {
    return(
        <div>
            <h1>Contact Us</h1>
            <div class='row'>
                <div class='col'>
                    <div>
                        <div class='contact-decor-box'></div>
                        <img src={contactImage} alt='photographer-headshot' class='contact-img'/>
                    </div>
                </div>
                <div class='col'>
                    <div>
                        <h2>Dee Snelson</h2>
                        <h4>000-000-0000</h4>
                        <h4>demo@demo.com</h4>
                        <input type='text'/>
                        <br/>
                        <input type='submit' value='Submit'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactContainer