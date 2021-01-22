import React from 'react';
import './App.css';
import SideMenu from './components/SideMenu';
import TabPanel from './components/TabPanel.jsx';
import card from './components/card.jsx';
function App() {
  return (
      <>

          <TabPanel />
          <SideMenu />
         <card/>
          </>
      
  );
}

export default App;
