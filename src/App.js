import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarContainer from './components/navbar/navbar.component';
import AboutPage from './pages/about/about.component';
import MeatsPage from './pages/meats/meats.component';
import ContactPage from './pages/contact/contact.component';
import HomePage from './pages/home/home.component';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarContainer />      
      </div>
      <Routes>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/meats' element={<MeatsPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/' element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;