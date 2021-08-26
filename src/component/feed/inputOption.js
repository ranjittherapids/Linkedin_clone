import React, { useState } from 'react'
import './inputOption.css'
function InputOption({ title, icon,color }) {
   

  
    return (
        <div className="inputOption"  >
         <span  class="material-icons" style={color,{color}}>{icon}</span>
            
            <p>{title}</p>
        </div>
    )
}

export default InputOption

