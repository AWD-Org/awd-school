"use client";

import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AWSchoolButton from "../components/AWSchoolButton";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
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
    <BackgroundBeamsWithCollision className="min-h-screen flex items-center relative overflow-hidden">
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          position: "relative",
          zIndex: 20,
          pt: { xs: 10, sm: 12, md: 8 },
          pb: { xs: 6, sm: 8, md: 10 },
          px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
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
              maxWidth: "none",
            }}
          >
            {/* Main Title */}
            <motion.div variants={textVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 400,
                  lineHeight: { xs: 1.2, sm: 1.1 },
                  fontSize: {
                    xs: "1.75rem",
                    sm: "2.5rem",
                    md: "3.2rem",
                    lg: "3.8rem",
                    xl: "4.5rem"
                  },
                  color: "#333333",
                  mb: { xs: 2, sm: 3 },
                  width: "100%",
                  px: { xs: 1, sm: 0 }, // Add side padding on mobile
                  textAlign: "center",
                  "& strong": {
                    fontWeight: 700,
                    color: "#FA206F",
                    display: "inline-block",
                    wordBreak: "break-word",
                  }
                }}
              >
                {t("hero.title").split("{{highlight}}")[0]}
                <strong>{t("hero.highlight")}</strong>
                {t("hero.title").split("{{highlight}}")[1]}
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={textVariants}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.3rem", md: "1.6rem", lg: "1.8rem" },
                  fontWeight: 400,
                  mb: { xs: 2, sm: 3 },
                  lineHeight: 1.5,
                  maxWidth: { xs: "100%", sm: "90%", md: "800px" },
                  mx: "auto",
                  px: { xs: 1, sm: 0 }, // Add side padding on mobile
                  color: "#666666",
                  textAlign: "center",
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
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
