import React, { Component } from "react";
import { Grid } from "material-ui";
import Circle from "react-circle";
import { RegularCard, Table, ItemGrid, ProfileCard, Button } from "components";
import Typography from "@material-ui/core/Typography";
import request from "request";
import avatar from "assets/img/faces/marc.jpg";
import axios from "axios";

// var options = {
//   method: "POST",
//   url: "http://10.101.1.116:8888/v1/chain/get_account",
//   body: { account_name: "citizen3" },
//   json: true
// };

var options2 = {
  method: "POST",
  url: "http://10.101.1.116:8888/v1/chain/get_table_rows",
  data: {
    scope: "project1",
    code: "eosio.token",
    table: "accounts",
    json: true
  }
};

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBalance: "0"
    };
  }

  async componentWillMount() {
    const response = await axios(options2);
    console.log(response.data.rows[0].balance);
    this.setState({ currentBalance: response.data.rows[0].balance });
  }
  render() {
    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <ProfileCard
            avatar={avatar}
            subtitle="Village Portable Energy"
            title="Star Forward Pvt Ltd"
            description="Star Forward is a leader in power management solutions for customers in more than 175 countries worldwide. Star Forward has a strong heritage of innovation."
            footer={
              <Button color="primary" round>
                Follow
              </Button>
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
                  $150,000,000
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
                  {this.state.currentBalance}
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
                progress={99}
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
                tableHead={["Name", "Country", "City", "Funding"]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                  ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                  ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                  [
                    "Doris Greene",
                    "Malawi",
                    "Feldkirchen in Kärnten",
                    "$63,542"
                  ],
                  ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                ]}
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
                tableHead={["Name", "Country", "City", "Cost"]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                  ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                  ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                  [
                    "Doris Greene",
                    "Malawi",
                    "Feldkirchen in Kärnten",
                    "$63,542"
                  ],
                  ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                ]}
              />
            }
          />
        </ItemGrid>
      </Grid>
    );
  }
}

export default TableList;
