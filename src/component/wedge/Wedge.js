import React from 'react'
import './wedge.css'
import WedgeComponent from './WedgeComponent'
export default function Wedge() {

    return (
        <div className='wedge_container'>
            <WedgeComponent title='Linkedin News'/>
           {/* linkedin news
           todays top courses */}
            <WedgeComponent title='Todays top course'/>
        </div>
    )
}
