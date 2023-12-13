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
import { useEffect } from "react";
import { useState } from "react";
import UserContext from "./components/Others/UserContext";
import { Provider } from "react-redux";
import store from "./store/store";
const Apps = lazy(() => import("./components/Others/Apps"));

const Main = () => {
  const [userInfo, setUserInfo] = useState();
  const [userInfo2, setUserInfo2] = useState();

  useEffect(() => {
    const data = {
      name: "sameer faridi",
      name2: "sameer faridi 2"
    };
    setUserInfo(data.name);
    setUserInfo2(data.name2);
  }, []);

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          loggedInUser: userInfo,
          loggedInUser2: userInfo2,
          setUserInfo2
        }}
      >
        <div id="container">
          <Header />
          <Body />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const App = () => {
  return (
    <RouterProvider router={router}>
      <Main />
    </RouterProvider>
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
