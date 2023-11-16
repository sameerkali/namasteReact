import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("constructor child");
    super(props); // HW why do we write super props
    this.state = {
      count: 0,
      coun1: 1,
      coun2: 2
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sameerkali");
    const response = await data.json();
    console.log(response)
    console.log("componentDidMount child");
  }
  render() {
    console.log("render child");
    return (
      <>
        <h1>{this.state.count}</h1>
        <h3>{this.state.coun1}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              coun1: this.state.coun1 + 10 // fixed the typo here
            });
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
