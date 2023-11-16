import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // HW why do we write super props
    console.log(props.name);
    this.state = {
      count: 0,
      coun1: 1,
      coun2: 2
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase the count
        </button>
        <p>Name: {this.props.name}</p>
        <p>Location: Ghaziabad {this.state.coun2}</p>
        <p>Contact: @sameer_faridi_</p>
      </>
    );
  }
}

export default UserClass;
