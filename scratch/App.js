const heading = React.createElement(
  "h1",
  { id: "sameer", key: "1" },
  "namaste everyone"
);
const heading2 = React.createElement(
  "h1",
  { id: "sameer", key: "2" },
  "namaste everyone"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
