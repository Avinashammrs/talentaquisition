import React from 'react';
import Header from './Header/Header'
import Sidebar from './SideBar/SideBar';
import MainContent from './MainContent/MainContent';
import './App.css';


function App() {
  return (
    <div className="dashboard">
      <Header />
      <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ width: '3%' }}>
        <Sidebar />
      </div>
      <div style={{ width: '97%' }}>
        <MainContent />
      </div>
    </div>

    </div>
  );
}

export default App;




