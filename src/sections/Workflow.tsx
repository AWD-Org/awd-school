"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AWSchoolTitle from "../components/AWSchoolTitle";

const Workflow = () => {
  const { t } = useTranslation();

  const steps = t("workflow.steps", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;


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
                  mb: { xs: 4, md: 6 },
                  gap: { xs: 3, md: 4 },
                  px: { xs: 1, sm: 0 },
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
                      fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#666666",
                      lineHeight: 1.6,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      maxWidth: { xs: "100%", sm: "90%", md: "400px" },
                      mx: { xs: "auto", md: index % 2 === 0 ? "0 0 0 auto" : "0" },
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>

                {/* Step Number Only */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    minWidth: { xs: 80, md: 120 },
                    py: { xs: 2, md: 0 },
                  }}
                >
                  {/* Step Number */}
                  <Box
                    sx={{
                      width: { xs: 60, md: 80 },
                      height: { xs: 60, md: 80 },
                      borderRadius: "50%",
                      backgroundColor: "#FA206F",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: { xs: "1.4rem", md: "1.8rem" },
                      zIndex: 2,
                      boxShadow: "0px 4px 12px rgba(250, 32, 111, 0.3)",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 8px 24px rgba(250, 32, 111, 0.4)",
                      },
                    }}
                  >
                    {index + 1}
                  </Box>
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
                    height: 3,
                    background: "linear-gradient(to right, #FA206F, #E0E0E0, #FA206F)",
                    borderRadius: "2px",
                    mb: 6,
                    mx: "auto",
                    opacity: 0.6,
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#FA206F",
                      boxShadow: "0px 2px 8px rgba(250, 32, 111, 0.3)",
                    },
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
