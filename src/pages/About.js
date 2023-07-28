import React from "react";
import Scroll from "../components/scroll";
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <Box>
      <Box sx={{ p: 5, pt: 10 }}>
        <Typography variant="h2" className="dim" sx={{ fontWeight: 900 }}>
          About Me
        </Typography>
        <Typography sx={{ color: "#fafafa", bgcolor: "#000" }}>
          I’m Vanessa Christopher Igwe, a Nigerian residing in Cameroon. As a
          full-time web developer, I love building awesome projects and
          contributing to open-source projects.
        </Typography>
        <Typography sx={{ py: 5, bgcolor: "#000" }}>
          But that’s not all – I’m also exploring the world of design, always
          wanting to learn and grow in this fascinating field In addition to my
          digital endeavors, I love all things art-related. Whether I'm
          performing as a singer, expressing my culinary skills as a chef, or
          expressing my creativity through makeup, I love expressing myself
          through different spaces. That's why people often call me
          "multi-talented."
        </Typography>

        <Typography sx={{ pb: 5, bgcolor: "#000" }}>
          One of the strongest fits for me is my cooperation with others. I
          enjoy being part of a team, and my friendly attitude has impressed
          many colleagues. If we get a chance to work together, I’m sure we’ll
          stay swimming.
        </Typography>

        <Typography sx={{ bgcolor: "#000" }}>
          Currently, I am looking for exciting opportunities to develop new
          projects and collaborate with like-minded individuals. Let’s start
          this journey of creativity and innovation together! Feel free – I’m
          looking forward to making new friends and bringing great ideas to
          life.
        </Typography>
      </Box>
      <Typography
        sx={{ px: 5, py: 1, fontWeight: 900 }}
        variant="h2"
        className="dim"
      >
        Skills
      </Typography>
      <Scroll />

      <Box sx={{ p: 5, pt: 15 }}>
        <Typography className="dim" variant="h3">
          Photo Gallery
        </Typography>
        <Typography sx={{ bgcolor: "#000" }}>
          For the love of food, pictures and nature, I'd love to share my world
          through photos. But! you'll have to visit my{" "}
          <a href="https://facebook.com/vanessa.igwe.35" rel="noreferrer">
            facebook
          </a>{" "}
          or{" "}
          <a
            href="https://www.instagram.com/vanessa_christopher_i"
            rel="noreferrer"
          >
            instagram
          </a>
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
