"use client";

import { Box, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Clock, 
  Target, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  CheckCircle
} from "lucide-react";
import AWSchoolTitle from "../components/AWSchoolTitle";
import AWSchoolCard from "../components/AWSchoolCard";

const Benefits = () => {
  const { t } = useTranslation();

  const benefits = t("benefits.list", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    metric: string;
  }>;

  const benefitIcons = [
    <Clock key="clock" size={48} />,
    <Target key="target" size={48} />,
    <Zap key="zap" size={48} />,
    <Shield key="shield" size={48} />,
    <Users key="users" size={48} />,
    <TrendingUp key="trending-up" size={48} />,
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
              text={t("benefits.title")}
              highlight={[t("benefits.highlight")]}
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
                mb: 1,
              }}
            >
              {t("benefits.subtitle")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem" },
                color: "#666666",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
                opacity: 0.8,
              }}
            >
              {t("benefits.description")}
            </Typography>
          </Box>
        </motion.div>

        {/* Benefits Grid */}
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <AWSchoolCard
                title={benefit.title}
                description={benefit.description}
                icon={benefitIcons[index]}
                animationDelay={index * 0.1}
                backgroundColor="#FFFFFF"
                hoverBackgroundColor="#FA206F"
                textColor="#101010"
                hoverTextColor="#FBFBFB"
              >
                {/* Metric highlight */}
                <Box sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      p: 2,
                      backgroundColor: "rgba(250, 32, 111, 0.1)",
                      borderRadius: "16px",
                      border: "1px solid rgba(250, 32, 111, 0.2)",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <CheckCircle size={16} />
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        textAlign: "center",
                      }}
                    >
                      {benefit.metric}
                    </Typography>
                  </Box>
                </Box>
              </AWSchoolCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
