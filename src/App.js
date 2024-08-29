
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RealTimeChanges from './components/RealTimeChanges';
import './App.css';

function App() {
  return (
    <div>
     
      <Navbar />
      <div style={{
        backgroundImage: `url(${require('../src/photos/background_image.png')})`,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
      <Hero />
      </div>
      <RealTimeChanges />
    </div>
  );
}

export default App;
