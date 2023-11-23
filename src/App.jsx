// App.js
import React from 'react';
import Slider from './Pages/Slider';
import Calculator from './Pages/Calculator';
import Contact from './Pages/Contact';
import TodoList from './Pages/TodoList';
import Api from './Pages/Api'
import DarkMode from './DarkMode';
import { useDarkMode } from './DarkModeContext';



import 'bootstrap/dist/css/bootstrap.min.css'; 

import {Link, Routes, Route} from "react-router-dom"

const App = () => {
  const { isDarkMode } = useDarkMode();

  document.body.style.background = isDarkMode ? '#333' : '#fff';
  document.body.style.color = isDarkMode ? '#fff' : '#333';


  return (
    <>      
 {/* Navbar */}
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
    <div className="container-fluid">
         <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                  <Link to="/" className="site-title nav-link active">Calculator</Link>
            </li>
            <li className="nav-item">
                  <Link to="/Slider" className="site-title nav-link active">Slider</Link>
            </li>
            <li className="nav-item">
                  <Link to="/TodoList" className="site-title nav-link active">TodoList</Link>
            </li>
            <li className="nav-item">
                  <Link to="/Contact" className="site-title nav-link active">Contact</Link>
            </li>
            <li className="nav-item">
                  <Link to="/ApiCall" className="site-title nav-link active">Api Call</Link>
            </li>
            
            
            <li className="nav-item">
<DarkMode />          
  </li>
            
        </ul>
      </div>
   </div>
</nav>


{/*Routes-Cotainer*/}

<div className='container'>

  <Routes>
    <Route path="/" element={<Calculator />} />
    <Route path="/Slider" element={<Slider />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/TodoList" element={<TodoList />} />
    <Route path="/ApiCall" element={<Api />} />


  </Routes>

</div>
</>
 );
};

export default App;

