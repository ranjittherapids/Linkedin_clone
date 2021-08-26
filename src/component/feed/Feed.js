import React, { useState, useEffect } from 'react'
import './Feed.css'
import InputOption from './inputOption'
import Post from './Post'
import firebase from 'firebase'
import { db } from '../../fiebase'
export default function Feed() {
    const [posts, setposts] = useState([])
    const [input, setinput] = useState([])
useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => (
        setposts(snapshot.docs.map(doc =>({id:doc.id,data:doc.data()})))
    ))
},[]);
//     useEffect(() =>{
//         db.collection("posts").onSnapshot((snapshot) =>(setdposts(snapshot.docs.map((doc) => ({ id:doc.id, data:doc.data()}))) ))
// }, []);
    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            Name: "ranjit",
            followers:"10",
            time: firebase.firestore.FieldValue.serverTimestamp(),
            discription: posts,
            userimg: "/images/Logo.jpg",
            postimg: 'https://tse2.mm.bing.net/th?id=OIP.mk8EHLJstPlYJ-sWdS6PPAHaEK&pid=Api&P=0&w=305&h=172'

        });
    }

    return (
        <div className='feed'>
            <div className='feed_input_container'>
                <div className='feed_input_container_input'>
                    <span class="material-icons">create</span>
                    <form>
                        <input type='text' placeholder='Start a post' value={input} onChange={(e) => setinput(e.target.value)} />
                        <button type='submit' onClick={sendPost}>send</button>
                    </form>

                </div>
                <div className='feed_input_container_iconOption'>
                    <InputOption title="Photo" icon="image" color=" #3385ff" />
                    <InputOption title="Video" icon="smart_display" color=" #47d147" />
                    <InputOption title="Event" icon="event" color="#ffa64d" />
                    <InputOption title="Write article" icon="article" color=" #ff1a75" />
                </div>
               
            </div>
            
            {/* {posts.map(post => <Post key={post.id} userImg={post.data.userimg} post={post.data.postimg} />) */}
   
            
            
            
        
            <Post userImg="/images/Logo.jpg" userName='Ranjit kumar sah' followers='10' onlineUpdate='4' discription='hey welcome back to my website this is nothing just like a lorem' post='https://tse2.mm.bing.net/th?id=OIP.4cYjNkGuwXfSE9EAWhGZFgHaEK&pid=Api&P=0&w=270&h=153' />
            <Post userImg="/images/Logo.jpg" userName='Ranjit kumar sah' followers='10' onlineUpdate='4' discription='hey welcome back to my website this is nothing just like a lorem' post='https://tse2.mm.bing.net/th?id=OIP.37yfOPg7nG-DY94qoVKGPgHaE8&pid=Api&P=0&w=231&h=155' />
            <Post userImg="/images/Logo.jpg" userName='Ranjit kumar sah' followers='10' onlineUpdate='4' discription='hey welcome back to my website this is nothing just like a lorem' post='https://tse4.mm.bing.net/th?id=OIP.Ws2IJ5Qe_mXoMJUHdpD66AHaEo&pid=Api&P=0&w=288&h=181' />
            <Post userImg="/images/Logo.jpg" userName='Ranjit kumar sah' followers='10' onlineUpdate='4' discription='hey welcome back to my website this is nothing just like a lorem' post='https://tse2.mm.bing.net/th?id=OIP.mk8EHLJstPlYJ-sWdS6PPAHaEK&pid=Api&P=0&w=305&h=172' /> 
        </div>
    )
}
