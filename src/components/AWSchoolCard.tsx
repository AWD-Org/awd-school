import React, { useState } from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface AWSchoolCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  borderRadius?: string;
  elevation?: number;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  animationDelay?: number;
  minHeight?: string; // Nueva prop para altura mínima
}

const AWSchoolCard: React.FC<AWSchoolCardProps> = ({
  title,
  description,
  icon,
  backgroundColor = "#FFFFFF",
  hoverBackgroundColor = "#FA206F",
  textColor = "#FA206F",
  hoverTextColor = "#FBFBFB",
  borderRadius = "24px",
  elevation = 0,
  children,
  onClick,
  className = "",
  animationDelay = 0,
  minHeight = "400px", // Altura mínima por defecto
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: animationDelay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ height: "100%" }} // Asegurar que el contenedor tome toda la altura
    >
      <Card
        className={className}
        onClick={onClick}
        sx={{
          backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
          color: isHovered ? hoverTextColor : textColor,
          borderRadius: borderRadius,
          boxShadow: elevation > 0 ? `0px ${elevation}px ${elevation * 2}px rgba(0, 0, 0, 0.1)` : "none",
          height: "100%", // Tomar toda la altura del grid
          minHeight: minHeight, // Altura mínima
          cursor: onClick ? "pointer" : "default",
          transition: "all 0.3s ease-in-out",
          transform: isHovered ? "translateY(-4px) scale(1.02)" : "translateY(0) scale(1)",
          display: "flex", // Usar flexbox
          flexDirection: "column", // Columna para mejor distribución
          "&:hover": {
            boxShadow: "0px 12px 24px rgba(250, 32, 111, 0.15)",
          },
          "&:focus-visible": {
            outline: "2px solid #FA206F",
            outlineOffset: "2px",
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tabIndex={onClick ? 0 : -1}
        role={onClick ? "button" : undefined}
        onKeyDown={(e) => {
          if (onClick && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <CardContent
          sx={{
            padding: { xs: 2, sm: 3, md: 4 },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            flex: 1, // Ocupar todo el espacio disponible
          }}
        >
          {/* Icon */}
          {icon && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 1,
                minHeight: "60px", // Altura fija para iconos
                // Force all SVG icons to change color
                "& svg": {
                  color: isHovered ? hoverTextColor : "#FA206F",
                  stroke: isHovered ? hoverTextColor : "#FA206F",
                  transition: "all 0.3s ease-in-out",
                },
                // For any other icon elements
                "& *": {
                  color: isHovered ? hoverTextColor : "#FA206F",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              {icon}
            </Box>
          )}

          {/* Title */}
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
              textAlign: "center",
              color: isHovered ? hoverTextColor : textColor,
              transition: "color 0.3s ease-in-out",
              minHeight: "60px", // Altura fija para títulos
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              textAlign: "center",
              color: isHovered ? hoverTextColor : textColor,
              opacity: 0.9,
              lineHeight: 1.6,
              transition: "color 0.3s ease-in-out",
              flex: 1, // Tomar el espacio restante
              display: "flex",
              alignItems: "flex-start", // Alinear texto al inicio
            }}
          >
            {description}
          </Typography>

          {/* Additional children content */}
          {children && (
            <Box
              sx={{
                mt: "auto", // Empujar al final
                "& *": {
                  color: isHovered ? hoverTextColor : textColor,
                  transition: "color 0.3s ease-in-out",
                },
                // Also handle icons in children content
                "& svg": {
                  color: isHovered ? hoverTextColor : "#FA206F",
                  stroke: isHovered ? hoverTextColor : "#FA206F",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              {children}
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AWSchoolCard;
