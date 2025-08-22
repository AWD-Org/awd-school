"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AWSchoolButton from "../components/AWSchoolButton";
import AWSchoolContactForm from "../components/AWSchoolContactForm";
import AWSchoolTitle from "../components/AWSchoolTitle";
import { track } from "../utils/analytics";

const FinalCTA = () => {
  const { t } = useTranslation();

  const handleCTAClick = () => {
    track("cta_click", { location: "final_cta" });
  };

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        background: "linear-gradient(135deg, #FA206F 0%, #E01D63 100%)",
        color: "#FBFBFB",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          filter: "blur(100px)",
        }}
      />
      
      <Box
        sx={{
          position: "absolute",
          bottom: "-30%",
          left: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.05)",
          filter: "blur(80px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              {t("finalCTA.title")}
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                fontWeight: 400,
                opacity: 0.95,
                mb: 2,
                lineHeight: 1.4,
              }}
            >
              {t("finalCTA.subtitle")}
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem" },
                fontWeight: 300,
                opacity: 0.9,
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              {t("finalCTA.description")}
            </Typography>
          </Box>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AWSchoolContactForm />
        </motion.div>
      </Container>
    </Box>
  );
};

export default FinalCTA;
