import React from 'react'
import './topic.css'
export default function Topic({ title, reader, time }) {
    return (
        <div className='topic_container'>
            <p>
                <span class="material-icons dot">adjust</span>
            </p>


            <div className='topic_container_text' >
                <h5>{title}</h5>


                <small><span>{time}d ago</span><span class="material-icons dot ">circle</span><span>{reader} reader</span></small>
            </div>


        </div>



    )
}
