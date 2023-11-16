import React from "react";
import { Link } from "react-router-dom";
import UserClass from "../ClassBasedComponents/UserClass";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor Parent")
  }
  componentDidMount() {
    console.log("componentDidMount Parent")
  }
  render() {
    console.log("render Parent")
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "20rem",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          overflow: "hidden"
        }}
      >
        {/* <UserClass name="sameer faridi from props 222222" /> */}
        {/* <UserClass name="sameer faridi from props 333333" /> */}

        <h1 style={{ fontSize: "3rem" }}>Sameer's Profile</h1>
        <Link
          to="/"
          style={{
            fontSize: "1rem",
            color: "blue",
            backgroundColor: "lightgray",
            padding: "10px",
            borderRadius: "5px"
          }}
        >
          Home
        </Link>
      </div>
    );
  }
}

export default Profile;

// const Profile = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         marginTop: "20rem",
//         alignItems: "center",
//         justifyContent: "center",
//         width: "100%",
//         height: "100%",
//         overflow: "hidden"
//       }}
//     >
//       <UserClass name="sameer faridi from props 222222" />

//       <h1 style={{ fontSize: "3rem" }}>Sameer's Profile</h1>
//       <Link
//         to="/"
//         style={{
//           fontSize: "1rem",
//           color: "blue",
//           backgroundColor: "lightgray",
//           padding: "10px",
//           borderRadius: "5px"
//         }}
//       >
//         Home
//       </Link>
//     </div>
//   );
// };

// export default Profile;
