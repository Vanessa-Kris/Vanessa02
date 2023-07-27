import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Box, Grid } from "@mui/material";
import "../components/styles.css";

const Contact = () => {
  return (
    <Box sx={{ height: "100%", py: 15, px: 4 }}>
      <Grid container spacing={4}>
        <Grid item md={4} xs={12}>
          <Box sx={{ bgcolor: "#1B142E", p: 5 }}>
            <FontAwesomeIcon style={{ paddingRight: 12 }} icon={faEnvelope} />
            Email
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box sx={{ bgcolor: "#1B142E", p: 5 }}>
            <FontAwesomeIcon style={{ paddingRight: 12 }} icon={faPhone} />
            Call
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box sx={{ bgcolor: "#1B142E", p: 5 }}>
            <FontAwesomeIcon style={{ paddingRight: 12 }} icon={faGithub} />
            GitHub
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box sx={{ bgcolor: "#1B142E", p: 5 }}>
            <FontAwesomeIcon style={{ paddingRight: 12 }} icon={faFacebook} />
            Facebook
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box sx={{ bgcolor: "#1B142E", p: 5 }}>
            <FontAwesomeIcon style={{ paddingRight: 12 }} icon={faTwitter} />
            Twitter
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box sx={{ bgcolor: "#1B142E", p: 5 }}>
            <FontAwesomeIcon style={{ paddingRight: 12 }} icon={faLinkedin} />
            LinkedIn
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box sx={{ bgcolor: "#1B142E", p: 5 }}>
            <FontAwesomeIcon style={{ paddingRight: 12 }} icon={faInstagram} />
            Instagram
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
