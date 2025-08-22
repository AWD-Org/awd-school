"use client";

import { Box, Container, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AWSchoolTitle from "../components/AWSchoolTitle";

const Industries = () => {
  const { t } = useTranslation();

  const industries = t("industries.list", { returnObjects: true }) as string[];

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        backgroundColor: "#FBFBFB",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <AWSchoolTitle
              text={t("industries.title")}
              highlight={[t("industries.highlight")]}
              variant="h2"
              alignText="center"
            />
            <Box
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                color: "#666666",
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
                mt: 2,
              }}
            >
              {t("industries.subtitle")}
            </Box>
          </Box>
        </motion.div>

        {/* Industries chips */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 1.5, sm: 2 },
              justifyContent: "center",
              maxWidth: { xs: "100%", sm: "90%", md: "900px" },
              mx: "auto",
              px: { xs: 1, sm: 0 },
            }}
          >
            {industries.map((industry, index) => (
              <motion.div key={index} variants={chipVariants}>
                <Chip
                  label={industry}
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    fontWeight: 500,
                    px: { xs: 1.5, sm: 2, md: 3 },
                    py: { xs: 0.8, sm: 1, md: 1.2 },
                    height: "auto",
                    minHeight: { xs: "36px", sm: "40px", md: "44px" },
                    backgroundColor: "#FFFFFF",
                    color: "#101010",
                    borderRadius: "30px",
                    transition: "all 0.3s ease-in-out",
                    cursor: "default",
                    "&:hover": {
                      backgroundColor: "#FA206F",
                      color: "#101010",
                      borderColor: "#FA206F",
                      transform: "translateY(-4px)",
                      boxShadow: "0px 8px 24px rgba(250, 32, 111, 0.3)",
                    },
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box
            sx={{
              mt: 10,
              p: { xs: 4, sm: 6, md: 8 },
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              textAlign: "center",
              boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
              border: "1px solid #F0F0F0",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
                gap: 4,
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  sx={{
                    fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
                    fontWeight: 700,
                    color: "#FA206F",
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  8+
                </Box>
                <Box
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    color: "#666666",
                    fontWeight: 500,
                  }}
                >
                  Industrias transformadas
                </Box>
              </Box>
              
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Box
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                    fontWeight: 600,
                    color: "#101010",
                    mb: 2,
                  }}
                >
                  Adaptamos nuestra metodología a tu sector
                </Box>
                <Box
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    color: "#666666",
                    lineHeight: 1.6,
                  }}
                >
                  Cada industria tiene desafíos únicos. Nuestro enfoque personalizado 
                  considera las regulaciones, procesos y objetivos específicos de tu sector 
                  para garantizar implementaciones exitosas y sostenibles.
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Industries;
