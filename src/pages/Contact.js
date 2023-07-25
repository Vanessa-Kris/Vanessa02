import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faGithub,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../components/styles.css";

export const Contact = () => {
  return (
    <Box sx={{ p: 15 }} align="center" className="contact">
      <h3>Let's get connected </h3>
      <FontAwesomeIcon
        icon={faInstagram}
        beat
        style={{
          padding: 25,
          fontSize: 50,
          color: "#C13584",
          zIndex: -2,
        }}
      />
      <FontAwesomeIcon
        icon={faFacebook}
        beat
        style={{ padding: 25, fontSize: 50, color: "#1674EA" }}
      />

      <FontAwesomeIcon
        icon={faEnvelope}
        beat
        style={{
          padding: 25,
          fontSize: 50,
          color: "green",
        }}
      />

      <FontAwesomeIcon
        icon={faGithub}
        beat
        style={{ padding: 25, fontSize: 50 }}
      />

      <FontAwesomeIcon
        icon={faPinterest}
        beat
        style={{ padding: 25, fontSize: 50, color: "red" }}
      />

      <FontAwesomeIcon
        icon={faTiktok}
        beat
        style={{
          padding: 25,
          fontSize: 50,
          color: " #111111;",
          filter:
            "drop-shadow(2px 0px 0px #FD3E3E) drop-shadow(-2px -2px 0px #4DE8F4)",
        }}
      />

      <FontAwesomeIcon
        icon={faTwitter}
        beat
        style={{ padding: 25, fontSize: 50, color: "#1C96E9" }}
      />

      {/* 
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <FontAwesomeIcon
            icon={faInstagram}
            beat
            style={{ padding: 5, fontSize: 100 }}
          />
        </Grid>
        <Grid item xs={10}>
          faInstagram
        </Grid>
      </Grid>
     
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <FontAwesomeIcon
            icon={faFacebook}
            beat
            style={{ padding: 5, fontSize: 100 }}
          />
        </Grid>
        <Grid item xs={10}>
          FaceBook
        </Grid>
      </Grid>
     
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <FontAwesomeIcon
            icon={faTwitter}
            beat
            style={{ padding: 5, fontSize: 100 }}
          />
        </Grid>
        <Grid item xs={10}>
          Twitter
        </Grid>
      </Grid> */}
    </Box>
  );
};
