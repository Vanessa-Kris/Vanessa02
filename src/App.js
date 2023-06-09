import * as React from "react";
import mebg from "./mebg.jpg";
import "./index.css";
//import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
//import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function App() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container>
        <Grid xs={12} md={6}>
          <Typography
            variant="h3"
            align="center"
            paddingTop={{ sm: 10, md: 15 }}
          >
            The rowSpacing and columnSpacing props let you specify row and
            column gaps independently of one another. They behave similarly to
            the row-gap and column-gap properties of CSS Grid.
          </Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <img className="banner" src={mebg} alt="me" width="80%" />
        </Grid>
      </Grid>
    </Box>
  );
}
