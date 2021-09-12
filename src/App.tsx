import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Ad from './components/Ad';
import Votes from './components/Votes';

function App() {

  return (
    <div className="App">
      <Header name="Chirpus"/>
      <div className="MainContainer">
        <div>
          <div className="AdDiv">
          <Ad flavor="Chocolate" fontSize={20} darkTheme={true}/>
          <Ad flavor="Vanilla" fontSize={30} darkTheme={true}/>
          <Ad flavor="Strawberry" fontSize={20} darkTheme={false}/>
          </div>
          <AdDesigner/>
          <div>
        </div>
      </div>
      <Votes/>
      </div>
    </div>
  );
}

export default App;
