import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import NavbarDash from './NavbarDash.js';
import Content from './Content.js';




function MainPanel() {
  return (
          <div className="main-panel">
          
          <NavbarDash/>
          <Content/>
          
         
      </div>
    
  );
}

export default MainPanel;
