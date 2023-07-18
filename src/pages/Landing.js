import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "../App.css";

export default function Landing() {
  return (
    <Box sx={{ height: "100%" }}>
      <Box container className="Landing">
        <Typography
          // variant={{ sm: "h4", md: "h1" }}
          align="center"
          paddingTop={{ xs: 10, md: 10 }}
          sx={{ fontSize: { md: "100px", xs: "50px" }, fontWeight: "700" }}
        >
          Hey, You found{" "}
          <span style={{ color: "#913895" }}>Vanessa Christopher</span>
        </Typography>
      </Box>

      {/* About Me */}
      {/* <Box>
        <Typography
          // variant={{ sm: "h4", md: "h1" }}
          align="center"
          paddingTop={{ xs: 10, md: 10 }}
          sx={{ fontSize: { md: "80px", xs: "30px" }, fontWeight: "300" }}
        >
          About <span style={{ color: "#913895" }}>Me</span>
        </Typography>
        <Grid container>
          <Grid xs={12} md={6}>
            <Box component="img" src={mebg} sx={{ width: "100%" }}></Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Typography>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  );
}
