import React from "react";

function Toggle(props) {
  return (
    <>
    {
      <button
        tab-index="0" 
        onClick={(event) => props.handleClick(event)}
        >
          Click Me!
      </button>
    }
    </>
  );

}

export default Toggle;
