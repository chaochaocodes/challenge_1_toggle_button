import React from "react";
import ReactDOM from "react-dom";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    // todo
  }

  render() {
    return <button>ON</button>;
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));
