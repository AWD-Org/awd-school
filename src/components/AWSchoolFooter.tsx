"use client";

import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import { track } from "../utils/analytics";

const AWSchoolFooter: React.FC = () => {
  const { t } = useTranslation();

  const handleLinkClick = (linkType: string, url: string) => {
    track("footer_link_click", { type: linkType, url });
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/amoxtli.tech/",
      icon: <Instagram size={20} />,
      label: t("footer.social.instagram"),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/amoxtli-web-developers",
      icon: <Linkedin size={20} />,
      label: t("footer.social.linkedin"),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61551487858288",
      icon: <Facebook size={20} />,
      label: t("footer.social.facebook"),
    },
  ];

  const footerLinks = [
    { label: t("footer.links.services"), path: "#services" },
    { label: t("footer.links.industries"), path: "#industries" },
    { label: t("footer.links.cases"), path: "#cases" },
    { label: t("footer.links.contact"), path: "#contact" },
  ];

  const legalLinks = [
    { 
      label: t("footer.legal.privacy"), 
      url: "https://amoxtli.tech/privacy" // Update with actual privacy policy URL
    },
    { 
      label: t("footer.legal.terms"), 
      url: "https://amoxtli.tech/terms" // Update with actual terms URL
    },
  ];

  const handleInternalLinkClick = (path: string, label: string) => {
    track("footer_internal_link", { section: label });
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#FA206F",
        color: "#FBFBFB",
        borderRadius: { xs: "16px", sm: "24px", md: "30px" },
        p: { xs: 2, sm: 3, md: 4, lg: 6 },
        mx: { xs: 1, sm: 3, md: 4, lg: 8 },
        my: { xs: 2, sm: 3, md: 4 },
        mt: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {/* Brand Section */}
        <Grid item xs={12} sm={12} md={4}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "1.5rem", sm: "1.8rem" },
            }}
          >
            Amoxtli School
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 2, sm: 3 },
              lineHeight: 1.6,
              opacity: 0.9,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
              maxWidth: { xs: "100%", md: "90%" },
            }}
          >
            {t("footer.description")}
          </Typography>
          
          {/* Social Links */}
          <Box sx={{ 
            display: "flex", 
            gap: { xs: 1.5, sm: 2 },
            justifyContent: { xs: "center", md: "flex-start" },
            mt: { xs: 1, sm: 0 }
          }}>
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick("social", social.url)}
                sx={{
                  color: "#FBFBFB",
                  transition: "all 0.3s ease-in-out",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    transform: "translateY(-2px)",
                  },
                  "&:focus-visible": {
                    outline: "2px solid #FBFBFB",
                    outlineOffset: "2px",
                  },
                }}
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: "1.1rem", sm: "1.2rem" },
            }}
          >
            Navegación
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {footerLinks.map((link) => (
              <Typography
                key={link.label}
                component="button"
                onClick={() => handleInternalLinkClick(link.path, link.label)}
                sx={{
                  color: "#FBFBFB",
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  padding: 0,
                  cursor: "pointer",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  opacity: 0.9,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                    transform: "translateX(4px)",
                  },
                  "&:focus-visible": {
                    outline: "2px solid #FBFBFB",
                    outlineOffset: "2px",
                    borderRadius: "4px",
                  },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* Legal Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: "1.1rem", sm: "1.2rem" },
            }}
          >
            Legal
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 3 }}>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick("legal", link.url)}
                sx={{
                  color: "#FBFBFB",
                  textDecoration: "none",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  opacity: 0.9,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                    transform: "translateX(4px)",
                  },
                  "&:focus-visible": {
                    outline: "2px solid #FBFBFB",
                    outlineOffset: "2px",
                    borderRadius: "4px",
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>

          {/* Contact Email */}
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              opacity: 0.8,
              mb: 1,
            }}
          >
            Contacto:
          </Typography>
          <Link
            href="mailto:school@amoxtli.tech"
            onClick={() => handleLinkClick("email", "school@amoxtli.tech")}
            sx={{
              color: "#FBFBFB",
              textDecoration: "none",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              fontWeight: 600,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                opacity: 0.8,
              },
              "&:focus-visible": {
                outline: "2px solid #FBFBFB",
                outlineOffset: "2px",
                borderRadius: "4px",
              },
            }}
          >
            {t("footer.contact")}
          </Link>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          pt: 3,
          mt: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            opacity: 0.8,
            mb: 1,
          }}
        >
          {t("footer.copyright")}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.7rem", sm: "0.8rem" },
            opacity: 0.6,
          }}
        >
          Disponible en school.amoxtli.tech
        </Typography>
      </Box>
    </Box>
  );
};

export default AWSchoolFooter;
