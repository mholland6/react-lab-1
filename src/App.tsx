import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Ad from '../models/AdModel';
import Ad from './components/Ad';
import Votes from './components/Votes';

function App() {

  return (
    <div className="App">
      <Header name="Chirpus"/>
      <Ad flavor="Chocolate" fontSize={20} darkTheme={true}/>
      <AdDesigner/>
      <Votes/>
    </div>
  );
}

export default App;
