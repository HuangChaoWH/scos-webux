import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Project from "./Project";
import Wallet from "./Wallet";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Projects} />
      <Route exact path="/project/:id" component={Project} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/wallet" component={Wallet} />
    </Switch>
  </main>
);

export default Main;
