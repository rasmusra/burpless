import './App.css'
import React, { useEffect, useState } from "react"
import Main from "./components/Main"
import Panel from "./components/Panel"
import burplessFeature from "./features/burpless.feature"

function App() {
  const [features, setFeatures] = useState({})
  const [scenarios, setScenarios] = useState({})

  useEffect(() => {
    setFeatures([burplessFeature])
  }, [])

  function handleClick(feature) {
    setScenarios(feature.Scenarios)
  }

  return (
    <div className="App-container">
      <div className="App-block">
        <Panel data={features} handleClick={(e) => handleClick(e)} />
      </div>
      <div className="App-block">
        <Main data={scenarios}/>
      </div>
    </div>
  );
}

export default App
