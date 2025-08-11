"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GraduationCap, Brain, Shield } from "lucide-react";
import AWSchoolTitle from "../components/AWSchoolTitle";
import AWSchoolCard from "../components/AWSchoolCard";

const About = () => {
  const { t } = useTranslation();

  const cards = [
    {
      title: t("about.cards.training.title"),
      description: t("about.cards.training.description"),
      icon: <GraduationCap size={48} />,
    },
    {
      title: t("about.cards.consulting.title"),
      description: t("about.cards.consulting.description"),
      icon: <Brain size={48} />,
    },
    {
      title: t("about.cards.adoption.title"),
      description: t("about.cards.adoption.description"),
      icon: <Shield size={48} />,
    },
  ];

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
              text={t("about.title")}
              highlight={[t("about.highlight")]}
              variant="h2"
              alignText="center"
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                color: "#666666",
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
                mt: 2,
              }}
            >
              {t("about.subtitle")}
            </Typography>
          </Box>
        </motion.div>

        {/* Cards Grid with uniform height */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { 
              xs: "1fr", 
              md: "repeat(3, 1fr)" 
            },
            gap: 4,
            alignItems: "stretch", // Hacer que todas las cards tengan la misma altura
          }}
        >
          {cards.map((card, index) => (
            <AWSchoolCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              animationDelay={index * 0.1}
              backgroundColor="#FFFFFF"
              hoverBackgroundColor="#FA206F"
              textColor="#101010"
              hoverTextColor="#FBFBFB"
              minHeight="350px" // Altura mínima uniforme
            />
          ))}
        </Box>

        {/* Bottom section with statistics or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box
            sx={{
              mt: 8,
              p: { xs: 3, sm: 4, md: 6 },
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              textAlign: "center",
              boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: "#101010",
                mb: 3,
                fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
              }}
            >
              ¿Por qué elegir Amoxtli School?
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: "#FA206F",
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  }}
                >
                  95%
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#666666", fontWeight: 500 }}
                >
                  Tasa de adopción exitosa
                </Typography>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: "#FA206F",
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  }}
                >
                  3x
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#666666", fontWeight: 500 }}
                >
                  Mejora en productividad
                </Typography>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: "#FA206F",
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  }}
                >
                  60%
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#666666", fontWeight: 500 }}
                >
                  Reducción tiempo implementación
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
