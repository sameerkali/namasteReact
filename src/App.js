import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import About from "./components/Others/about";
import Contact from "./components/Others/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Main = () => {
  return (
    <div id="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "*",
    element: <Error />
  }
]);



const App = () => {
  return (
    <RouterProvider router={router}>
      <Main />
    </RouterProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
