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

class UserProfile extends Component {
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
            <ProfileCard
              avatar={avatar}
              subtitle="American Citizen"
              title="Alec Thompson"
            />
          </ItemGrid>
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
          <ItemGrid xs={12} sm={12} md={8}>
            <RegularCard
              cardTitle="Edit Profile"
              cardSubtitle="Complete your profile"
              content={
                <div>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Company (disabled)"
                        id="company-disabled"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Username"
                        id="username"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Email address"
                        id="email-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="First Name"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Last Name"
                        id="last-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="City"
                        id="city"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Country"
                        id="country"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Postal Code"
                        id="postal-code"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={12}>
                      <InputLabel style={{ color: "#AAAAAA" }}>
                        About me
                      </InputLabel>
                      <CustomInput
                        labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                        id="about-me"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                </div>
              }
              footer={<Button color="primary">Update Profile</Button>}
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
