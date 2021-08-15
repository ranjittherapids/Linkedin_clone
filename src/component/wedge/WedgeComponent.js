import React from 'react'

import Topic from './Topic'
import './wedgecomponent.css'
export default function WedgeComponent({title}) {
 
    return (
    
        <div className="WedgeComponent_container">
            <div className='WedgeComponent_container_header'>
                <h4>{title}</h4>
                <span class="material-icons">info</span>
            </div>
            <div className='WedgeComponent_text'>
                {/* topicKC */}
               <Topic title="this is for you" time="2" reader='33'/>
               <Topic title="form zero to hero" time="1" reader='333'/>
               <Topic title="how to make money" time="6" reader='25'/>

            </div>
        </div>
    )
}
