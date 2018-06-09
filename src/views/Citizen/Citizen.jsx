import React, { Component } from "react";
import { Grid, InputLabel } from "material-ui";
import request from "request";
import Typography from "@material-ui/core/Typography";
import {
  ProfileCard,
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid,
  Button,
  CustomInput
} from "components";

import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "@material-ui/icons";

import avatar from "assets/img/faces/marcus.jpg";
import axios from "axios";

var balanceOptions = {
  method: "POST",
  url: "http://10.101.1.116:8888/v1/chain/get_table_rows",
  data: {
    scope: "c11111123",
    code: "eossmartcity",
    table: "citizen",
    json: true
  }
};

class Citizen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBalance: "0"
    };
  }
  async componentWillMount() {
    const balanceRes = await axios(balanceOptions);
    console.log(balanceRes);
    if (balanceRes.data.rows.length > 0) {
      this.setState({
        currentBalance: balanceRes.data.rows[0].balance
      });
    }
  }
  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
            <RegularCard
              cardTitle="Wallet Details"
              headerColor="orange"
              cardSubtitle=""
              content={
                <div>
                  <Typography gutterBottom variant="display1" component="h2">
                    $10,000
                  </Typography>
                  <Typography component="p">
                    Last Updated 10 Jun 2018
                  </Typography>
                </div>
              }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ProfileCard
              avatar={avatar}
              subtitle="Indian Citizen"
              title="Gautam Anand"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <RegularCard
              cardTitle="Projects Voted / Worth"
              headerColor="purple"
              cardSubtitle=""
              content={
                <div>
                  <Typography gutterBottom variant="display1" component="h1">
                    54 / $100,000
                  </Typography>
                  <Typography component="p">
                    Last Updated 10 Jun 2018
                  </Typography>
                </div>
              }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              cardTitle="Projects Voted"
              headerColor="green"
              cardSubtitle="Voted by citizens for public projects"
              content={
                <Table
                  tableHeaderColor="success"
                  tableHead={["Name", "Description", "Tokens"]}
                  tableData={[
                    [
                      "Wind Turbines",
                      "Wind power involves converting wind energy into electricity by using wind turbines. A wind turbine is composed of 3 propellers-like blades called a rotor.",
                      "10"
                    ],
                    [
                      "Drinking Water",
                      "Potable water is water that is considered safe to drink. It has been either treated, cleaned or filtered and meets your local established drinking water standards.",
                      "5"
                    ],
                    [
                      "Education",
                      "Education is the wise, hopeful and respectful cultivation of learning undertaken in the belief that all should have the chance to share in life.",
                      "30"
                    ],
                    [
                      "Smart House",
                      "Passive solar energy is the heating space that utilizes the design of the house or building so as trap solar heat when necessary.",
                      "6"
                    ]
                  ]}
                />
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

export default Citizen;
