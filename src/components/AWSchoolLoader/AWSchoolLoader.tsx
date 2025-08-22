"use client";

import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import axo from "@/assets/about/grid_2.gif";
import { gsap } from "gsap";

const AWDLoader: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const text = "< AWD School />";
      const typewriter = gsap.timeline();

      text.split("").forEach((char, i) => {
        typewriter.to(textRef.current, {
          textContent: text.substring(0, i + 1),
          duration: 0.05,
          ease: "none",
        });
      });
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#FF3266",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={axo} alt="AWD Logo" width={200} height={200} />
      </Box>
      <Typography
        ref={textRef}
        variant="h5"
        sx={{
          color: "#fbfbfb",
          ml: { xs: 0, md: 2 },
          fontWeight: 700,
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {/* Placeholder for GSAP typewriter animation */}
      </Typography>
    </Box>
  );
};

export default AWDLoader;
