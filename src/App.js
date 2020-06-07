import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let person = {
    name: "suMan",
    job: "SHSEO"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>My first react paragraph</p>
        <h2>{person.name + " "+ person.job }</h2>
      
      </header>
    </div>
  );
}

export default App;
