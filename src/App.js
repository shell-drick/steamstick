import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Front.js';
import ServerDashPage from './Pages/ServerDashPage';
import Navbar from './Components/Navbar';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ServerDeploy' element={<ServerDashPage />} />
        </Routes>
     </Router>
  );
}

export default App;