import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("constructor child");
    super(props); // HW why do we write super props
    this.state = {
      userInfo: {
        name: "sameer",
        location: "GhaziabaD",
        avtar_url: ""
      }
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sameerkali");
    const response = await data.json();
    4;
    this.setState({
      userInfo: response
    });
    console.log(response);
    console.log("componentDidMount child");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("render child");
    // debugger;
    return (
      <>
        <img src={avatar_url} />
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Contact: @sameer_faridi_</p>
      </>
    );
  }
}

export default UserClass;
