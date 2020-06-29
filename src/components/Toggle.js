import React from "react";

class Toggle extends React.Component {
  state = {
    toggleOn: true,
    color: '#000'
  };

  handleClick = () => {
    this.setState({
      toggleOn: !this.state.toggleOn,
      color: '#FFF'
    });
    // console.log(this.state.toggleOn)
  }

  render() {
    return (
      <div className='Toggle'>
      <button onClick={this.handleClick}>
        {this.state.toggleOn ? 'ON' : 'OFF'}
      </button>
      </div>
    )}
}

// ReactDOM.render(<Toggle />, document.getElementById("root"));
export default Toggle;