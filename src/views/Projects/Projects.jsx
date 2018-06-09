import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import request from "request";
import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid
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

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: "000068e1f4b26337",
          name: "Wind Turbines",
          image:
            "https://images.pexels.com/photos/414807/pexels-photo-414807.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
          id: "000068e2845cf10b",
          name: "Wind Turbines",
          image:
            "https://images.pexels.com/photos/414807/pexels-photo-414807.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
          id: "000068e338c8ebb9",
          name: "Wind Turbines",
          image:
            "https://images.pexels.com/photos/414807/pexels-photo-414807.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
          id: "000068e446a5bab8",
          name: "Wind Turbines",
          image:
            "https://images.pexels.com/photos/414807/pexels-photo-414807.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        },
        {
          id: "000068e66f3f87a3",
          name: "Wind Turbines",
          image:
            "https://images.pexels.com/photos/414807/pexels-photo-414807.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        }
      ]
    };
    this.getProjects = this.getProjects.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(id) {
    this.props.history.push(`/project/${id}`);
  }
  getProjects(classes) {
    return this.state.projects.map(item => {
      return (
        <Grid item>
          <Card
            className={classes.card}
            onClick={() => this.handleSubmit(item.id)}
          >
            <CardMedia
              className={classes.media}
              image={`${item.image}`}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {item.name}
              </Typography>
              <Typography component="p">
                Wind power involves converting wind energy into electricity by
                using wind turbines. A wind turbine is composed of 3
                propellers-like blades called a rotor.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={4}>
            <StatsCard
              icon={Store}
              iconColor="green"
              title="Funded"
              description="$34,245"
              statIcon={DateRange}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={4}>
            <StatsCard
              icon={InfoOutline}
              iconColor="blue"
              title="Balance"
              description="54"
              statIcon={LocalOffer}
              statText="Transparency Tokens"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={4}>
            <StatsCard
              icon={Accessibility}
              iconColor="red"
              title="Smart Contracts"
              description="+587"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
        </Grid>
        <p>&nbsp;</p>
        <Grid container justify="center" spacing={16}>
          {this.getProjects(classes)}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Projects);
