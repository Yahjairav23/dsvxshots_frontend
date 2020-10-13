import React, {Component} from 'react'


class NavBar extends Component {
    render(){
        return(
            <nav>
                <ul class='navi-list'>
                    <li>
                    <a className='navi-item' href="#">Portfolio</a> 
                    </li>
                    <li>
                    <a className='navi-item' href="#">Rates</a> 
                    </li>
                    <li>
                        <a href='/'>
                        <img src="../logoblacktrans.png" alt='logo' className='home-logo'/>
                        </a>
                    </li>
                    <li>
                    <a className='navi-item' href="#">Booking</a> 
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