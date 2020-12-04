import logo from './logo.svg';
import './App.css';

import React from "react"

function Panel() {
  return (
    <div>panel</div>)
}
function Main() {
  return (
    <div>main</div>)
}

function App() {
  return (
    <div className="App-container">
      <div  className="App-block"><Panel /></div>
      <div  className="App-block"><Main /></div>
    </div>
  );
}

export default App;
