"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Search, 
  PenTool, 
  GraduationCap, 
  Layers, 
  HeadphonesIcon 
} from "lucide-react";
import AWSchoolTitle from "../components/AWSchoolTitle";

const Workflow = () => {
  const { t } = useTranslation();

  const steps = t("workflow.steps", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const stepIcons = [
    <Search key="search" size={32} color="#FA206F" />,
    <PenTool key="design" size={32} color="#FA206F" />,
    <GraduationCap key="school" size={32} color="#FA206F" />,
    <Layers key="integration" size={32} color="#FA206F" />,
    <HeadphonesIcon key="support" size={32} color="#FA206F" />,
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
              text={t("workflow.title")}
              highlight={[t("workflow.highlight")]}
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
              {t("workflow.subtitle")}
            </Typography>
          </Box>
        </motion.div>

        {/* Timeline Steps */}
        <Box sx={{ position: "relative" }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
                  alignItems: "center",
                  mb: 6,
                  gap: 4,
                }}
              >
                {/* Content */}
                <Box
                  sx={{
                    flex: 1,
                    textAlign: { xs: "center", md: index % 2 === 0 ? "right" : "left" },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: "#101010",
                      mb: 2,
                      fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.7rem" },
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#666666",
                      lineHeight: 1.6,
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      maxWidth: "400px",
                      mx: { xs: "auto", md: index % 2 === 0 ? "0 0 0 auto" : "0" },
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>

                {/* Step Number and Icon */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {/* Step Number */}
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      backgroundColor: "#FA206F",
                      color: "#FBFBFB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      mb: 2,
                      zIndex: 2,
                    }}
                  >
                    {index + 1}
                  </Box>

                  {/* Icon - No background */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    {stepIcons[index]}
                  </Box>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 2,
                        height: 120,
                        backgroundColor: "#E0E0E0",
                        zIndex: 1,
                        display: { xs: "block", md: "none" },
                      }}
                    />
                  )}
                </Box>

                {/* Empty space for desktop layout */}
                <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} />
              </Box>

              {/* Desktop connecting line */}
              {index < steps.length - 1 && (
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    width: "100%",
                    height: 2,
                    backgroundColor: "#E0E0E0",
                    mb: 6,
                    mx: "auto",
                  }}
                />
              )}
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Workflow;
