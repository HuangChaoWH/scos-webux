import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Main from "./Main";
import logo from "./logo.png";
import "./App.css";
import Eos from "eosjs";

// const eos = Eos.Testnet("10.101.1.116:8888");
// const eos = Eos({ httpEndpoint: "http://10.101.1.116:8888" });

// eos.getBlock();

// eos.getBlock("27634").then(result => {
//   console.log(result);
// });

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Smart City Steroids</h1>
          <Link to="/dashboard">
            <Button>DASHBOARD</Button>
          </Link>
          <Link to="/">
            <Button>PROJECTS</Button>
          </Link>
          <Link to="/wallet">
            <Button>WALLET</Button>
          </Link>
          <p>&nbsp;</p>
          <Main />
        </header>
      </div>
    );
  }
}

export default App;
