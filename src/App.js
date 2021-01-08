import React from 'react';
import './App.css';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import logo from './logo.png';
function App() {
  return (
      <>
          
          <Navbar />
          <SideMenu />
          <img src={logo}/>
          
          </>
      
  );
}

export default App;
