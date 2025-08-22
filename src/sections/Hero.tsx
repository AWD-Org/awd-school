"use client";

import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AWSchoolButton from "../components/AWSchoolButton";
import AWSchoolTitle from "../components/AWSchoolTitle";
import { track } from "../utils/analytics";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const Hero = () => {
  const { t } = useTranslation();

  const handleCTAClick = () => {
    track("cta_click", { location: "hero" });
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        background: "linear-gradient(135deg, #FBFBFB 0%, #F5F5F5 100%)",
        pt: { xs: 10, sm: 12, md: 8 },
        pb: { xs: 6, sm: 8, md: 10 },
        width: "100%",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: { xs: 200, sm: 300, md: 400 },
          height: { xs: 200, sm: 300, md: 400 },
          borderRadius: "50%",
          background: "linear-gradient(45deg, #FA206F15, #FA206F05)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />
      
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: { xs: 150, sm: 250, md: 350 },
          height: { xs: 150, sm: 250, md: 350 },
          borderRadius: "50%",
          background: "linear-gradient(45deg, #FA206F10, #FA206F03)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* Full width container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          position: "relative",
          zIndex: 1,
          px: { xs: 3, sm: 4, md: 6, lg: 8, xl: 12 }, // Responsive padding
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Box
            sx={{
              textAlign: "center",
              width: "100%",
              maxWidth: "none", // Remove max width constraint
            }}
          >
            {/* Main Title */}
            <motion.div variants={textVariants}>
                <Typography
                variant="h1"
                sx={{
                  fontWeight: 400,
                  lineHeight: 1.1,
                  fontSize: { 
                  xs: "2rem", 
                  sm: "2.8rem", 
                  md: "3.5rem", 
                  lg: "4.2rem",
                  xl: "5rem" 
                  },
                  color: "#333333",
                  mb: 3,
                  width: "100%",
                  "& strong": {
                  fontWeight: 700,
                  color: "#FA206F",
                  }
                }}
                >
                {t("hero.title", { highlight: "" }).replace("{{highlight}}", "")}
                <strong> {t("hero.highlight")} </strong>
                para transformar tus procesos
                </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={textVariants}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem", lg: "1.9rem" },
                  fontWeight: 400,
                  mb: 3,
                  lineHeight: 1.5,
                  maxWidth: "1000px",
                  mx: "auto",
                  color: "#666666",
                }}
              >
                {t("hero.subtitle")}
              </Typography>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AWSchoolButton
                onClick={handleCTAClick}
                size="large"
                backgroundColor="#FA206F"
                fontColor="#FBFBFB"
                borderColor="#FA206F"
                hoverBackgroundColor="#E01D63"
                hoverFontColor="#FBFBFB"
              >
                {t("hero.cta")}
              </AWSchoolButton>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
