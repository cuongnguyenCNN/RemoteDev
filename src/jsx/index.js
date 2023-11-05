import React, { useContext } from "react";

/// React router dom
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from "./components/Dashboard/Home";
import Workers from "./workers"
import Profile from "./components/Profile";

const Markup = () => {
  const routes = [
    /// Dashboard
    { url: "", component: Home },
    { url: "workers", component: Workers },
    { url: "profile", component: Profile }
  ];
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  let pagePath = path.split("-").includes("page");
  return (
    <Router basename="/">
      <div
        id={`${!pagePath ? "main-wrapper" : ""}`}
        className= "show mh100vh"
      >

        <div className={`${!pagePath ? "content-body" : ""}`}>
          <div
            className={`${!pagePath ? "container-fluid" : ""}`}
            style={{ minHeight: window.screen.height - 60 }}
          >
            <Routes>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`/${data.url}`}
                  element={<data.component/>}
                />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Markup;
