import { Box, Typography } from "@mui/material";
import React from "react";

export default function PageNotFound() {
  return (
    <Box>
      <Typography
        variant="h2"
        align="center"
        sx={{
          p: 10,
          fontWeight: 800,
          fontFamily: "Courier New', Courier, monospace",
        }}
      >
        OOPS THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST
      </Typography>
    </Box>
  );
}
