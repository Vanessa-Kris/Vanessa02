import React from "react";
import Scroll from "../components/scroll";
import { Box, Typography, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <Box>
      <Box sx={{ p: 5, pt: 15 }}>
        <Typography variant="h3">
          About <span>Me</span>
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
      <Box sx={{ pt: 10, px: 15, fontSize: "25px" }}>Skills:</Box>
      <Scroll />

      <Box sx={{ p: 5, pt: 15 }}>
        <Typography variant="h3">
          Photo <span>Gallery</span>
        </Typography>
        <Typography>
          For the love of food, pictures and nature, I'd love to share my world
          through photos.
        </Typography>
      </Box>

      <a href="/projects">
        <Box sx={{ p: 15 }}>
          Projects <FontAwesomeIcon icon={faArrowRight} />
        </Box>
      </a>
    </Box>
  );
}
