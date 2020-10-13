import React, {Component} from 'react'


class NavBar extends Component {
    render(){
        return(
            <nav>
                <ul class='navi-list'>
                    <li>
                    <a className='navi-item' href="/portfolio">Portfolio</a> 
                    </li>
                    <li>
                    <a className='navi-item' href="/rates">Rates</a> 
                    </li>
                    <li>
                        <a href='/'>
                        <img src="../logoblacktrans.png" alt='logo' className='home-logo'/>
                        </a>
                    </li>
                    <li>
                    <a className='navi-item' href="/bookings">Booking</a> 
                    </li>
                    <li>
                    <a className='navi-item' href="/contact">Contact Us</a> 
                    </li>
                </ul>
            </nav>
           
        )
    }
}

export default NavBar