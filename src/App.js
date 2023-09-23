import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";

const Main = () => {
  return (
    <div id="container">
      <Header />
      <Search />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
