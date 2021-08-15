import React from 'react'
import './Post.css'
import InputOption from './inputOption'
function Post({ userImg, userName, followers, onlineUpdate, discription, post,key }) {
    return (
        <div className='post'>
            <p>{key}</p>
            <div className="post_header">
                <div className='post_information'>
                    <img src={userImg} alt='' />
                    <div className='post_information_text'>
                        <h5>{userName}</h5>
                        <p> {followers} followers</p>
                        <p className='public'>{onlineUpdate}h<span className="material-icons dot">fiber_manual_record</span><span className="material-icons globle">public</span></p>
                    </div>
                </div>
                <span class="material-icons">more_horiz</span>
            </div>
            <p>{discription}</p>
            <img src={post} alt="" />
            <div>
                {/* icon */}
            </div>
            <div className='post_bottom'>

                <InputOption title="Like" icon="thumb_up_off_alt" color='gray'  />
                <InputOption title="Commenr" icon="chat" color='gray' />
                <InputOption title="Share" icon="share" color='gray' />
                <InputOption title="send" icon="send" color='gray' />

            </div>
        </div>
    )
}

export default Post
