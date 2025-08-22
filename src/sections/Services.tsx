"use client";

import { Box, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Brain, 
  MessageCircle, 
  Workflow, 
  BarChart3, 
  Shield, 
  Crown,
  CheckCircle
} from "lucide-react";
import AWSchoolTitle from "../components/AWSchoolTitle";
import AWSchoolCard from "../components/AWSchoolCard";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.cards.ai-fundamentals.title"),
      description: t("services.cards.ai-fundamentals.description"),
      icon: <Brain size={40} />,
      results: t("services.cards.ai-fundamentals.results", { returnObjects: true }) as string[],
    },
    {
      title: t("services.cards.prompt-engineering.title"),
      description: t("services.cards.prompt-engineering.description"),
      icon: <MessageCircle size={40} />,
      results: t("services.cards.prompt-engineering.results", { returnObjects: true }) as string[],
    },
    {
      title: t("services.cards.automation-workshop.title"),
      description: t("services.cards.automation-workshop.description"),
      icon: <Workflow size={40} />,
      results: t("services.cards.automation-workshop.results", { returnObjects: true }) as string[],
    },
    {
      title: t("services.cards.data-analytics.title"),
      description: t("services.cards.data-analytics.description"),
      icon: <BarChart3 size={40} />,
      results: t("services.cards.data-analytics.results", { returnObjects: true }) as string[],
    },
    {
      title: t("services.cards.ai-governance.title"),
      description: t("services.cards.ai-governance.description"),
      icon: <Shield size={40} />,
      results: t("services.cards.ai-governance.results", { returnObjects: true }) as string[],
    },
    {
      title: t("services.cards.digital-transformation.title"),
      description: t("services.cards.digital-transformation.description"),
      icon: <Crown size={40} />,
      results: t("services.cards.digital-transformation.results", { returnObjects: true }) as string[],
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        backgroundColor: "#F8F9FA",
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
              text={t("services.title")}
              highlight={[t("services.highlight")]}
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
              {t("services.subtitle")}
            </Typography>
          </Box>
        </motion.div>

        {/* Services Grid with uniform height */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { 
              xs: "1fr", 
              sm: "1fr",
              md: "repeat(2, 1fr)", 
              lg: "repeat(3, 1fr)" 
            },
            gap: { xs: 3, sm: 4 },
            alignItems: "stretch", // Hacer que todas las cards tengan la misma altura
            px: { xs: 1, sm: 0 },
          }}
        >
          {services.map((service, index) => (
            <AWSchoolCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              animationDelay={index * 0.1}
              backgroundColor="#FFFFFF"
              hoverBackgroundColor="#FA206F"
              textColor="#101010"
              hoverTextColor="#FBFBFB"
              minHeight="450px" // Altura mínima uniforme (más alta por contenido adicional)
            >
              {/* Results list */}
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    fontSize: "0.9rem",
                  }}
                >
                  Resultados de aprendizaje:
                </Typography>
                <List dense sx={{ p: 0 }}>
                  {service.results.map((result, resultIndex) => (
                    <ListItem key={resultIndex} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 20 }}>
                        <CheckCircle 
                          size={14}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={result}
                        sx={{
                          "& .MuiListItemText-primary": {
                            fontSize: "0.8rem",
                            lineHeight: 1.3,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </AWSchoolCard>
          ))}
        </Box>

        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box
            sx={{
              mt: 8,
              p: { xs: 4, sm: 6, md: 8 },
              backgroundColor: "#FA206F",
              borderRadius: "24px",
              textAlign: "center",
              color: "#FBFBFB",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                color: "#FBFBFB",
              }}
            >
              ¿Necesitas un programa personalizado?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem" },
                opacity: 0.95,
                mb: 4,
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
                color: "#FBFBFB",
              }}
            >
              Diseñamos programas de capacitación a medida que se adaptan perfectamente a los objetivos y cultura de tu organización.
            </Typography>
            
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {[
                "Evaluación inicial gratuita",
                "Currículo personalizado",
                "Certificación incluida"
              ].map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 1,
                    backgroundColor: "rgba(251, 251, 251, 0.15)",
                    borderRadius: "20px",
                    border: "1px solid rgba(251, 251, 251, 0.3)",
                  }}
                >
                  <CheckCircle size={16} style={{ color: "#FBFBFB" }} />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontSize: "0.9rem",
                      color: "#FBFBFB",
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;
