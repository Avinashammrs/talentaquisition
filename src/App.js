import React from 'react';
import Header from './Header/Header'
import Sidebar from './SideBar/SideBar';
import ApplicationsInfo from './MainContent/ApplicationsInfo';
import MainContent from './MainContent/MainContent';
import './App.css';


function App() {
  return (
    <div className="dashboard">
      <Header />
     
      <div className="main-content">
      <Sidebar />
        {/* Add main content area here */}
        <div className="content">
          {/* Your content goes here */}
          
         <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;




