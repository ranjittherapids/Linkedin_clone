import React from 'react'
import './Side_bar.css'

export default function Side_bar() {
    const recentItems = (topic) => (
        <div className="sidebar_recentItems">
            <span className="sidebar_recentItems_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
      
        <div className='sidebar'>


            <div className='sidebar_top'>
                <img src="https://www.ppt-backgrounds.net/thumbs/spots-rainbow-light-colour-photo-rainbow-clipart-keynote-backgrounds.jpg" alt="" />
                <span class="material-icons">account_circle</span>
                <h2>Ranjit kumar sah</h2>
                <h4>frontend web developer</h4>
            </div>
            <div className='stats'>
                <div className='stat'>
                    <div  className='statText'>
                         <p className='sidebar_title'>connections</p>
                    <h5>grow your network</h5>
                    </div>
                   
                    <p className='statNumber'>24</p>
                </div>
                <div className='stat'>
                    <p className='sidebar_title'>who viewed your profile</p>
                    <p className='statNumber'>24</p>
                </div>

            </div>
         <div className='sidebar_botton'>
<p>Recent</p>
{recentItems("functional coporate....")}
{recentItems("6th Annual international...")}
{recentItems("web")}
{recentItems("learn to do Zero cost...")}
{recentItems("Advance python tutorial...")}
{recentItems("this function...")}

            </div>
        </div> 
          

    )
}
