import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);                       // HW why do we write super props
    console.log(props.name);
    this.state = {
        count: 0,
        coun1: 1,
        coun2: 2
    }
  }
  render() {
    return (
      <>
        <p>Name: {this.props.name}</p>
        <p>Location: Ghaziabad {this.state.coun2}</p>
        <p>Contact: @sameer_faridi_</p>
      </>
    );
  }
}

export default UserClass;
