import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Hidden } from "material-ui";
import Circle from "react-circle";
import { RegularCard, P, A, ItemGrid, Table } from "components";
import CountUp from "react-countup";
import iconsStyle from "assets/jss/material-dashboard-react/iconsStyle";
import Typography from "@material-ui/core/Typography";
function Icons({ ...props }) {
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          plainCard
          cardTitle="Republic of India"
          cardSubtitle={<P>Bhārat Gaṇarājya</P>}
          content={<div />}
        />
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={4}>
        <RegularCard
          cardTitle="Projects Viewed"
          headerColor="blue"
          cardSubtitle=""
          content={
            <div>
              <Typography gutterBottom variant="display1" component="h2">
                <CountUp start={0} end={34534860} />
              </Typography>
              <Typography component="p">Last Updated 10 Jun 2018</Typography>
            </div>
          }
        />
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={4}>
        <RegularCard
          cardTitle="Projects Approved"
          headerColor="green"
          cardSubtitle=""
          content={
            <div>
              <Typography gutterBottom variant="display1" component="h2">
                <CountUp start={0} end={34860} />
              </Typography>
              <Typography component="p">Last Updated 10 Jun 2018</Typography>
            </div>
          }
        />
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={4}>
        <RegularCard
          cardTitle="Projects Rejected"
          headerColor="red"
          cardSubtitle=""
          content={
            <div>
              <Typography gutterBottom variant="display1" component="h2">
                <CountUp start={0} end={10356} />
              </Typography>
              <Typography component="p">Last Updated 10 Jun 2018</Typography>
            </div>
          }
        />
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={4}>
        <RegularCard
          cardTitle="Progress Speed"
          cardSubtitle=""
          content={
            <Circle
              progress={73}
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
          cardTitle="Project Success"
          headerColor="green"
          cardSubtitle=""
          content={
            <Circle
              progress={89}
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
          cardTitle="Citizen Approval"
          headerColor="blue"
          cardSubtitle=""
          content={
            <Circle
              progress={90}
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
          cardTitle="Projects Approved"
          headerColor="green"
          cardSubtitle="Approved by government for public projects"
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
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
