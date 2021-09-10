import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';

function App() {

  return (
    <div className="App">
      <Header name="Chirpus"/>
      <AdDesigner/>
    </div>
  );
}

export default App;
