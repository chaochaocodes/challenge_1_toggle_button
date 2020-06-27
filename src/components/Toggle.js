import React, { useState } from "react";

const Toggle = ({ collection, onClickEvent, buttonStyle }) => {
  const [stateIndex, setStateIndex] = useState(0);

  const loopStates = nextIndex => {
    if (nextIndex >= collection.length) {
      return 0;
    } else {
      return nextIndex;
    }
  };

  const buttonAction = () => {
    onClickEvent(); // additional functionality
    setStateIndex(loopStates(stateIndex + 1));
  };

  return (
    <button className={buttonStyle} onClick={() => buttonAction()}>
      <img src={collection[stateIndex]} alt="toggle-button" />
    </button>
  );
};

export default Toggle;
