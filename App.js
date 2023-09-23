import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "sameer", key: "1" },
//   "namaste everyone"
// );
// const heading2 = React.createElement(
//   "h1",
//   { id: "sameer", key: "2" },
//   "assalaammualakum everyone"
// );
// console.log(heading2)

// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   heading2
// ]);

const Dam = () => {
  return (
    <div id="container">
      <button>hello sameer i am a button</button>
    </div>
  );
}
const Sam = () => {
  return (
    <div id="container">
      <h1 id="sameer" key="1">
        namaste everyone
      </h1>
      <h1 id="sameer" key="2">
        assalaammualakum everyone
      </h1>
      <Dam />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sam />);
