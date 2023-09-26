import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Table from "./components/Table";
import Error from "./components/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/error",
    element: <Error/>
  },
  {
    path: "*",
    element: <Error/>
  },
  {
    path: "/table",
    element: <Table />
  },
  {
    path: "/navbar",
    element: <Navbar />
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
