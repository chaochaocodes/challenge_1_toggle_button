import React from "react";
import Switch from './components/Switch'

function App() {
  const[valueOn, setValueOn] = useState(false);

  return (
    <div className="App">
      <Switch 
        buttonOn={ valueOn }
        handleToggle={ () => setValueOn(!valueOn) }
        onColor='#EF476F'
      />
    </div>
  );
}

export default App;
