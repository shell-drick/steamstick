import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Front.js';
import ServerDeploy from './Pages/ServerDeploy';
import Navbar from './Components/Navbar';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ServerDeploy' element={<ServerDeploy />} />
        </Routes>
     </Router>
  );
}

export default App;