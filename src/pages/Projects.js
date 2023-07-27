import { Box, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../components/styles.css";
import img1 from "../image/1.png";
import img2 from "../image/2.png";
import img3 from "../image/3.png";
import img4 from "../image/4.png";
import img5 from "../image/5.png";
import img6 from "../image/6.png";
import img7 from "../image/7.png";
import img8 from "../image/8.png";
import img9 from "../image/9.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const projVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      <Box sx={{ p: 5, pt: 10, width: "100%", zIndex: -5 }} align="center">
        <Grid container sx={{ maxWidth: "100%" }} spacing={2}>
          <Grid item xs={12} md={6} sm={12} sx={{ p: 3 }}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={projVariants}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                  bgclor: "#1B142E",
                }}
              >
                <img
                  src={img1}
                  alt="project 1"
                  className="projimg"
                  style={{ width: "100%" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon
                      size="big"
                      icon={faArrowUpRightFromSquare}
                    />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          {/*  */}
          <Grid item xs={12} md={6} sm={12} sx={{ p: 3 }}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={projVariants}
            >
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <img
                  src={img2}
                  alt="project 2"
                  className="projimg"
                  style={{ width: "100%" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          {/*  */}
        </Grid>

        {/*  */}

        <Grid container sx={{ maxWidth: "100%" }} spacing={2}>
          <Grid item xs={12} md={6} sm={12} sx={{ p: 3 }}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={projVariants}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <img
                  src={img4}
                  alt="project 3"
                  className="projimg"
                  style={{ width: "100%" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          {/*  */}
          <Grid item xs={12} md={6} sm={12} sx={{ p: 3 }}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={projVariants}
            >
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <img
                  src={img5}
                  alt="project 4"
                  className="projimg"
                  style={{ width: "100%" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          {/*  */}
        </Grid>

        {/*  */}

        <Grid container sx={{ maxWidth: "100%" }} spacing={2}>
          <Grid item xs={12} md={6} sm={12} sx={{ p: 3 }}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={projVariants}
            >
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <img
                  src={img3}
                  alt="project 5"
                  className="projimg"
                  style={{ width: "100%" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          {/*  */}
          <Grid item xs={12} md={6} sm={12} sx={{ p: 3 }}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={projVariants}
            >
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <img
                  src={img6}
                  alt="project 6"
                  className="projimg"
                  style={{ width: "100%" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          {/*  */}
        </Grid>

        {/*  */}

        <Grid container sx={{ maxWidth: "100%" }} spacing={2}>
          <Grid item xs={12} md={6} sm={12} sx={{ p: 3 }}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={projVariants}
            >
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <img
                  src={img7}
                  alt="project 7"
                  className="projimg"
                  style={{ width: "100%" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          {/*  */}
          <Grid item xs={12} md={6} sm={12} sx={{ p: 3 }}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={projVariants}
            >
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <img
                  src={img8}
                  alt="project 8"
                  className="projimg"
                  style={{ width: "100%" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} sm={12} sx={{ p: 3 }}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={projVariants}
            >
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <img
                  src={img9}
                  alt="project 9"
                  className="projimg"
                  style={{ width: "100%" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000" }}
                    size="small"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          {/*  */}
        </Grid>
      </Box>

      <a href="/resume">
        <Box sx={{ p: 15 }}>
          Resume <FontAwesomeIcon icon={faArrowRight} />
        </Box>
      </a>
    </>
  );
}
