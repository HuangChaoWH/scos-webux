import React from "react";
import { Grid } from "material-ui";
import Circle from "react-circle";
import { RegularCard, Table, ItemGrid, ProfileCard, Button } from "components";

import avatar from "assets/img/faces/marc.jpg";

function TableList({ ...props }) {
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
          cardTitle="Funding Status"
          cardSubtitle=""
          content={
            <Circle
              progress={60}
              animate={true} // Boolean: Animated/Static progress
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={50} // Number: Defines the size of the circle.
              lineWidth={20}
            />
          }
        />
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Simple Table"
          cardSubtitle="Here is a subtitle for this table"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["Mason Porter", "Chile", "Gloucester", "$78,615"]
              ]}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

export default TableList;
