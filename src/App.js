import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import About from "./components/Others/about";
import Contact from "./components/Others/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./components/Details/Details";
import { Suspense } from "react";
const Apps = lazy(() => import("./components/Others/Apps"));

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
    path: "/apps",
    element: (
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Apps />{" "}
      </Suspense>
    )
  },
  {
    path: "*",
    element: <Error />
  },
  {
    path: "game/:gameId",
    element: <Details />
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
