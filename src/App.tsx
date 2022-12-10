import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import Login from "./components/Login";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import BlogDetails from './components/BlogDetails';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tab1" element={<Tab1 />} />
        <Route path="/tab2" element={<Tab2 />} />
        <Route path="/tab3" element={<Tab3 />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App



// <div className = 'root--root' >
//       <nav className='root--navbar--common'>
//         <div className='root--navbar--main'>
  //           <img className='logo' src="/src/assets/react.svg" />
  //           <h1 className='app-name'>Master React</h1>
  //         </div>
  //         <ul>
  //           <li className='root--navbar--item'>
  //             <Link to="/"><p>Tab1</p></Link>
  //           </li>
  //           <li className='root--navbar--item'>
  //             <Link to="/tab2"><p>Tab2</p></Link>
  //           </li>
  //           <li className='root--navbar--item'>
  //             <Link to="/tab3"><p>Tab3</p></Link>
  //           </li>
  //           <li className='root--navbar--item'>
  //             <Link to="/bootstrap"><p>LearnBootstrap</p></Link>
  //           </li>
  //         </ul>
  //       </nav>

  //       <div className='root--content-div'>
  //         <Routes>
  //           <Route path="/" element={<Tab1 />} />
  //           <Route path="/tab2" element={<Tab2 />} />
  //           <Route path="/tab3" element={<Tab3 />} />
  //           <Route path="/blogDetails/:id" element={<BlogDetails />} />
  //           <Route path="/bootstrap" element={<Bootstrap />} />
  //         </Routes>
  //       </div>

  //     </div > 