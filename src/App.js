import React, { useState } from "react";
import Toggle from "./components/Toggle";
import "./App.css";

function App() {
  const [images, setImages] = useState([])

  return (
    <div className="App">
      <Toggle setImages={setImages} />
    </div>
  );
}

export default App
