import React from 'react'
import './HeaderOption.css'
function HeaderOption({icon,img,more, title }) {
    return (
        <div className='headeroption'>
          {more} 
     
          
        {img && <img className='header_icon_user' src={img} />}
         {icon &&  <span class="material-icons header_icon">{icon}</span>}
            
           
         <h3>  {title}</h3> 
        </div>
        
    )
}

export default HeaderOption
