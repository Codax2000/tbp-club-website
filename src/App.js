/**
 * Alex Knowlton
 * 8/17/2022
 *
 * Main page for the website. Routes to different projects using
 * React-Router, and has a standard nav menu and footer. Gives the
 * impression of multiple webpages.
 */

import React from "react";
import { Route, Switch } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import HomePage from "./components/home/HomePage";
import Calendar from "./components/calendar/Calendar";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/calendar" exact component={Calendar} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
