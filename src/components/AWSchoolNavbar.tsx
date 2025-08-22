"use client";

import { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Typography, Switch, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import AWSchoolButton from "./AWSchoolButton";
import { track } from "../utils/analytics";
import Image from "next/image";
import AwdSchoolLogo from "../assets/awd-school_Mesa de trabajo 1 copia 4.png";

const AWSchoolNavbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSpanish, setIsSpanish] = useState(i18n.language === "es");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: t("nav.home"), path: "#home" },
    { label: t("nav.about"), path: "#about" },
    { label: t("nav.services"), path: "#services" },
    { label: t("nav.workflow"), path: "#workflow" },
    { label: t("nav.benefits"), path: "#benefits" },
    // { label: t("nav.industries"), path: "#industries" },
    // { label: t("nav.cases"), path: "#cases" },
    // { label: t("nav.faqs"), path: "#faqs" },
    { label: t("nav.contact"), path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fontColor = "#FA206F"; // Always use pink primary color

  const toggleLanguage = () => {
    const newLanguage = isSpanish ? "en" : "es";
    i18n.changeLanguage(newLanguage);
    setIsSpanish(!isSpanish);
    track("language_change", { language: newLanguage });
  };

  const handleNavClick = (path: string, label: string) => {
    track("nav_click", { section: label });

    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    track("cta_click", { location: "navbar" });
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: isScrolled
            ? "rgba(251, 251, 251, 0.95)"
            : "rgba(251, 251, 251, 0.1)",
          boxShadow: isScrolled ? "0px 2px 8px rgba(0, 0, 0, 0.1)" : "none",
          transition: "all 0.3s ease-in-out",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 1, sm: 3, md: 4, lg: 6 },
            minHeight: { xs: 64, sm: 70 },
          }}
        >
          {/* Logo Section */}
          <Box
            display="flex"
            alignItems="center"
            onClick={() => handleNavClick("#home", "logo")}
            sx={{ cursor: "pointer" }}
          >
            <Image
              src={AwdSchoolLogo}
              alt="Amoxtli School Logo"
              width={80}
              height={80}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "80px",
                maxHeight: "80px",
              }}
            />
          </Box>

          {/* Desktop Navigation Links */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item.label}
                component="button"
                onClick={() => handleNavClick(item.path, item.label)}
                sx={{
                  color: fontColor,
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                  fontWeight: 600,
                  textTransform: "none",
                  cursor: "pointer",
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  transition: "all 0.3s ease-in-out",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    color: "#FA206F",
                    transform: "translateY(-1px)",
                  },
                  "&:focus-visible": {
                    outline: "2px solid #FA206F",
                    outlineOffset: "2px",
                    borderRadius: "4px",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Right Section: Language + CTA + Mobile Menu */}
          <Box display="flex" alignItems="center" gap={2}>
            {/* Language Switcher */}
            <Box display="flex" alignItems="center">
              <Typography
                variant="body2"
                sx={{
                  color: fontColor,
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  mr: 1,
                  transition: "color 0.3s ease-in-out",
                }}
              >
                {isSpanish ? "ES" : "EN"}
              </Typography>
              <Switch
                checked={isSpanish}
                onChange={toggleLanguage}
                color="default"
                size="small"
                sx={{
                  "& .MuiSwitch-thumb": {
                    backgroundColor: fontColor,
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: "#FA206F",
                    opacity: 0.3,
                  },
                }}
                inputProps={{ "aria-label": "Language toggle" }}
              />
            </Box>

            {/* CTA Button - Hidden on mobile */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <AWSchoolButton
                onClick={handleCTAClick}
                borderColor={fontColor}
                fontColor={fontColor}
                backgroundColor="transparent"
                hoverBackgroundColor={fontColor}
                hoverFontColor="#FBFBFB"
                size="small"
              >
                {t("hero.cta")}
              </AWSchoolButton>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{
                display: { xs: "block", lg: "none" },
                color: fontColor,
                p: 1,
              }}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: 320 },
            backgroundColor: "#FBFBFB",
            padding: 2,
            borderLeft: "2px solid #FA206F",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#FA206F" }}>
            Amoxtli School
          </Typography>
          <IconButton
            onClick={() => setMobileMenuOpen(false)}
            sx={{ color: "#FA206F", p: 1 }}
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </IconButton>
        </Box>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              onClick={() => handleNavClick(item.path, item.label)}
              sx={{
                cursor: "pointer",
                borderRadius: "12px",
                marginBottom: 1,
                "&:hover": {
                  backgroundColor: "#FA206F",
                  "& .MuiListItemText-primary": {
                    color: "#FBFBFB",
                  },
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontWeight: 600,
                    color: "#FA206F",
                    transition: "color 0.3s ease-in-out",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        {/* Mobile CTA */}
        <Box sx={{ mt: 3 }}>
          <AWSchoolButton
            onClick={handleCTAClick}
            fullWidth
            borderColor="#FA206F"
            fontColor="#FA206F"
            backgroundColor="transparent"
            hoverBackgroundColor="#FA206F"
            hoverFontColor="#FBFBFB"
          >
            {t("hero.cta")}
          </AWSchoolButton>
        </Box>
      </Drawer>
    </>
  );
};

export default AWSchoolNavbar;
