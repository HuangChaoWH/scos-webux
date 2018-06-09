import React, { Component } from "react";
import request from "request";

class Wallet extends Component {
  handleSubmit = event => {
    event.preventDefault();

    var options = {
      method: "POST",
      url: "http://127.0.0.1:8888/v1/wallet/create",
      body: "jerry",
      json: true
    };

    request(options, function(error, response, body) {
      if (error) throw new Error(error);

      console.log(body);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <label>
          Create Wallet
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <button type="submit">Add</button> */}
      </form>
    );
  }
}

export default Wallet;
