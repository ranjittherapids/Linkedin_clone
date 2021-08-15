import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'
export default function Header() {
    // for more style
    const more = (<svg height="30px" width="30px">
        <circle cx="10" cy="10" r="2" stroke="black" fill="black" />
        <circle cx="18" cy="10" r="2" stroke="black" fill="black" />
        <circle cx="26" cy="10" r="2" stroke="black" fill="black" />
        <circle cx="10" cy="18" r="2" stroke="black" fill="black" />
        <circle cx="18" cy="18" r="2" stroke="black" fill="black" />
        <circle cx="26" cy="18" r="2" stroke="black" fill="black" />
        <circle cx="10" cy="26" r="2" stroke="black" fill="black" />
        <circle cx="18" cy="26" r="2" stroke="black" fill="black" />
        <circle cx="26" cy="26" r="2" stroke="black" fill="black" />


    </svg>)
    //for job icon
    const jobIcon = (<div class="job">
        <div class="dot"> <div class="line lineUtility"></div><div class="line1 lineUtility"></div></div>
        <div class="red"><div class="rectline"></div> <div class="rectline rectline1"></div></div>
    </div>)
    return (
        <div className='header'>

            <div className='header_left'>
                <img src='./images/linkedin_logo.png' alt='some problems' />
                <div className='header_search'>
                    <span class="material-icons">
                        search
                    </span>
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className='header_right'>
                <HeaderOption title="Home" icon="home" />
                <HeaderOption title="My network" icon="group" />
                <HeaderOption title="Jobs" icon="work" />
                <HeaderOption title="Messaging" icon="chat" />
                <HeaderOption title="Notification" icon="notifications" />
                <HeaderOption title="img" img="/images/Logo.jpg" />
                <div className='more_option'>
                    <HeaderOption title="Notification" more={more} />

                </div>
            </div>

        </div>
    )
}
