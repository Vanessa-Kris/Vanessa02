import { Box, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import resume from "../images/Resume.pdf";

const styles = {
  pdfContainer: {
    width: "100%",

    paddingTop: "70px",
  },
};

function Resume() {
  return (
    <Box sx={{ height: "100vh", mb: 17 }}>
      <Box sx={styles.pdfContainer}>
        <object
          data={resume}
          type="application/pdf"
          width="100%"
          height="100%"
          aria-label="Resume PDF"
        >
          <p>
            Your browser does not support PDFs. Please download the PDF to view
            it:
            <a href={resume}>Download PDF</a>
          </p>
        </object>

        <Button sx={{ pb: 10 }}>Download</Button>

        <a href="/contact">
          <Box sx={{ p: 15 }}>
            Contact <FontAwesomeIcon icon={faArrowRight} />
          </Box>
        </a>
      </Box>
    </Box>
  );
}

export default Resume;
