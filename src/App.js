import React from 'react';
import Header from './component/header/Header';
import Side_bar from './component/sidebar/Side_bar';
import Feed from './component/feed/Feed.js'
import Wedge from './component/wedge/Wedge'
import './App.css'
function App() {
  return (
    <div className="App">
   {/* header */}
   <Header/>
   <div className='app_body'>
     <Side_bar/>
     <Feed/>
     <Wedge/>
   </div>
 
   
   
    </div>
  );
}

export default App;
