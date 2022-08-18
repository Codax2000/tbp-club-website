/**
 * Alex Knowlton
 * 9/14/2020
 *
 * Main page for the website. Routes to different projects using
 * React-Router, and has a standard nav menu and footer
 */

import React from "react";
// import { Route, Switch } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavMenu />
      {/* <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/calendar" exact component={Calendar} />
        <Route path="/about" exact component={About} />
      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
