import logo from './logo.svg';
import './App.css';

import React from "react"
import Main from "./components/Main"
import Panel from "./components/Panel"

function App() {
  return (
    <div className="App-container">
      <div  className="App-block"><Panel /></div>
      <div  className="App-block"><Main /></div>
    </div>
  );
}

export default App;
