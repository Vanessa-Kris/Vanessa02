import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import pnf from "../images/anime.png";
import "../components/styles.css";
import { fontWeight } from "@mui/system";

export default function PageNotFound() {
  return (
    <Box
      className="pnf"
      align="center"
      sx={{ py: { md: 20, xs: 17 }, fontWeight: 900 }}
    >
      <h1 style={{ fontWeight: 900, fontSize: 100 }}>404</h1>
      <h5 style={{ fontWeight: 700 }}>
        You actualy got lost (SMH), Let's go back{" "}
        <a style={{ textDecoration: "underline", color: "#FF5964" }} href="/">
          home
        </a>
        .
      </h5>
    </Box>
  );
}
