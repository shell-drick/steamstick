import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Front.js';
import ServerDeploy from './Pages/ServerDeploy';
import Navbar from './Components/Navbar';
import Bio from './Pages/Bio';
import Refrences from './Pages/Refrences'
import Summary from './Pages/Summary';
import Background from './Pages/Background'

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ServerDeploy' element={<ServerDeploy />} />
          <Route path='/Summary' element={<Summary />} />
          <Route path='/Bio' element={<Bio />} />
          <Route path='/Refrences' element={<Refrences />} />
          <Route path='/BackGround' element={<Background />} />
        </Routes>
     </Router>
  );
}

export default App;