import React, { useState } from "react";
import Toggle from "./components/Toggle";
import ColorArray from './assets/ColorArray';
import "./App.css";

function App() {
  const [background, setBackground] = useState(ColorArray[0]);

  function handleChange() {
    setBackground(ColorArray[Math.floor(Math.random() * ColorArray.length)])
  };

  return (
    <div id="App" style={{background: `linear-gradient(to bottom right, ${background})`}}>
      <Toggle handleClick={handleChange} />
    </div>
  );
}

export default App;
