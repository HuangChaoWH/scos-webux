import React, { Component } from "react";
import { Grid } from "material-ui";
import Circle from "react-circle";
import {
  RegularCard,
  Table,
  ItemGrid,
  ProfileCard,
  Button,
  Snackbar
} from "components";
import Typography from "@material-ui/core/Typography";
import request from "request";
import avatar from "assets/img/faces/marc.jpg";
import axios from "axios";
import { ThumbUp, ThumbDown, AddAlert } from "@material-ui/icons";
import names from "../../babyNames";
import eosioKeys from "../../keyfile";
import Eos from "eosjs";
import CountUp from "react-countup";
console.log(eosioKeys["c1112"]);

const eos = Eos({
  keyProvider: eosioKeys["c1112"],
  httpEndpoint: "http://10.101.1.116:8888"
});

var balanceOptions = {
  method: "POST",
  url: "http://10.101.1.116:8888/v1/chain/get_table_rows",
  data: {
    scope: "project2",
    code: "eossmartcity",
    table: "project",
    json: true
  }
};

var citizenOptions = {
  method: "POST",
  url: "http://10.101.1.116:8888/v1/chain/get_table_rows",
  data: {
    scope: "eossmartcity",
    code: "eossmartcity",
    table: "citizen",
    limit: "1000",
    json: true
  }
};

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBalance: 150000000 - 1,
      citizens: [],
      tl: false,
      tc: false,
      tr: false,
      bl: false,
      bc: false,
      br: false,
      message: "",
      progress: 98
    };

    this.handleUpVote = this.handleUpVote.bind(this);
  }

  async componentWillMount() {
    const balanceRes = await axios(balanceOptions);
    const citizenRes = await axios(citizenOptions);
    let arrays = [];
    if (citizenRes.data.rows.length > 0) {
      for (let i = 0; i < citizenRes.data.rows.length; i++) {
        arrays[i] = [
          citizenRes.data.rows[i].account,
          // citizenRes.data.rows[i].citizen_name,
          names[i],
          citizenRes.data.rows[i].projectsvoted.toString(),
          citizenRes.data.rows[i].projectsverified.toString(),
          citizenRes.data.rows[i].projectsimpactvalue.toString(),
          citizenRes.data.rows[i].age.toString(),
          citizenRes.data.rows[i].governmentid
        ];
      }

      this.setState({
        // currentBalance: balanceRes.data.rows[0].balance,
        citizens: arrays
      });
      console.log(arrays);
    }
  }

  showNotification(place) {
    var x = [];
    x[place] = true;
    this.setState(x);
    setTimeout(
      function() {
        x[place] = false;
        this.setState(x);
      }.bind(this),
      6000
    );
  }

  async handleUpVote() {
    console.log("handleUpVote");
    const options = { broadcast: true };
    // eos.transfer(
    //   { from: "citizen2", to: "project1", quantity: "1 HAK", memo: "Test" },
    //   options
    // );
    const resp = await eos.transaction({
      actions: [
        {
          account: "eosio.token",
          name: "transfer",
          authorization: [
            {
              actor: "c1112",
              permission: "active"
            }
          ],
          data: {
            from: "c1112",
            to: "project2",
            quantity: "1 HAK",
            memo: "test"
          }
        }
      ]
    });

    await this.setState({
      message: `Project upvoted successfully with Transaction ID: ${
        resp.transaction_id
      }`
    });
    console.log(resp);
    this.setState({
      currentBalance: this.state.currentBalance + 1,
      progress: 100
    });
    this.showNotification("tl");
  }

  render() {
    return (
      <Grid container>
        <Snackbar
          place="tl"
          color="success"
          icon={AddAlert}
          message={this.state.message}
          open={this.state.tl}
          closeNotification={() => this.setState({ tl: false })}
          close
        />
        <ItemGrid xs={12} sm={12} md={12}>
          <ProfileCard
            avatar={avatar}
            subtitle="Village Portable Energy"
            title="Star Forward Pvt Ltd"
            description="Star Forward is a leader in power management solutions for customers in more than 175 countries worldwide. Star Forward has a strong heritage of innovation."
            footer={
              <div>
                <Button color="success" round onClick={this.handleUpVote}>
                  <ThumbUp /> &nbsp;Upvote
                </Button>
                <Button color="danger" round>
                  <ThumbDown /> &nbsp;Downvote
                </Button>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Project Details"
            headerColor="orange"
            cardSubtitle=""
            content={
              <div>
                <Typography gutterBottom variant="headline" component="h2">
                  Wind Turbines
                </Typography>
                <Typography component="p">
                  Wind power involves converting wind energy into electricity by
                  using wind turbines. A wind turbine is composed of 3
                  propellers-like blades called a rotor.
                </Typography>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Project Cost"
            headerColor="orange"
            cardSubtitle=""
            content={
              <div>
                <Typography gutterBottom variant="display1" component="h1">
                  HAK<CountUp start={0} end={150000000} />
                </Typography>
                <Typography component="p">Funding in progress</Typography>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Funded"
            headerColor="orange"
            cardSubtitle=""
            content={
              <div>
                <Typography gutterBottom variant="display1" component="h1">
                  HAK<CountUp
                    start={this.state.currentBalance - 10}
                    end={this.state.currentBalance}
                  />
                </Typography>
                <Typography component="p">Funding in progress</Typography>
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Funding Status"
            cardSubtitle=""
            content={
              <Circle
                progress={60}
                animate={true} // Boolean: Animated/Static progress
                responsive={true} // Boolean: Make SVG adapt to parent size
                size={50} // Number: Defines the size of the circle.
                lineWidth={20}
                progressColor="#2BABE2"
              />
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Project Progress"
            headerColor="red"
            cardSubtitle=""
            content={
              <Circle
                progress={20}
                animate={true} // Boolean: Animated/Static progress
                responsive={true} // Boolean: Make SVG adapt to parent size
                size={50} // Number: Defines the size of the circle.
                lineWidth={20}
                progressColor="red"
              />
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <RegularCard
            cardTitle="Citizen Support"
            headerColor="green"
            cardSubtitle=""
            content={
              <Circle
                progress={this.state.progress}
                animate={true} // Boolean: Animated/Static progress
                responsive={true} // Boolean: Make SVG adapt to parent size
                size={50} // Number: Defines the size of the circle.
                lineWidth={20}
                progressColor="green"
              />
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle="Citizen Backers"
            cardSubtitle="Backed using Transparency Tokens"
            content={
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "Account",
                  "Name",
                  "Project Voted",
                  "Projects Verified",
                  "Projects Impact Value",
                  "Age",
                  "Government ID"
                ]}
                tableData={this.state.citizens}
              />
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle="Expenses"
            headerColor="red"
            cardSubtitle="Operational costs incurred during the project execution"
            content={
              <Table
                tableHeaderColor="danger"
                tableHead={["Name", "Type", "Tokens"]}
                tableData={[
                  ["Wind Turbines", "Hardware", "10"],
                  ["Power Supply", "Hardware", "5"],
                  ["Turbo Engines", "Hardware", "30"],
                  ["Maintenace", "Human", "6"]
                ]}
              />
            }
          />
        </ItemGrid>
      </Grid>
    );
  }
}

export default Project;
