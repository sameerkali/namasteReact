import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import Table from "./Component/Table";
import Navbar from "./Component/navbar";
import Contact from "./Component/constact";
import Error from "./Component/error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/login";
import API from "./Component/apiData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/navbar",
    element: <Navbar />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/table",
    element: <Table />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/api",
    element: <API />
  },
  {
    path: "*",
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
