import { Grid } from "@mui/material";
import React from "react";
import { EMPLOYEES_DATA } from "../constants";
import EmployeeCard from "./employee-card/EmployeeCard";

const Carousel = () => {
  return (
    <Grid container spacing={2}>
      {EMPLOYEES_DATA.map((item) => (
        <Grid key={item.id} item xs={12} sm>
          <EmployeeCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Carousel;
