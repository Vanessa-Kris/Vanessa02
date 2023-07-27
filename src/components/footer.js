import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "../App.css";

export default function Footer() {
  return (
    <Box
      className="footer"
      component="Footer"
      sx={{
        p: 2,
      }}
    >
      {/* <Box>
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ padding: 5, marginRight: 10 }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ padding: 5, marginRight: 10 }}
        />
        <FontAwesomeIcon
          icon={faTwitter}
          style={{ padding: 5, marginRight: 10 }}
        />
      </Box> */}

      <Box>
        <Typography>© Vanessa Christopher 2023</Typography>
      </Box>
    </Box>
  );
}
