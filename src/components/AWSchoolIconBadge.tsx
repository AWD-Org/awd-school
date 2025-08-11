import React from "react";
import { Box } from "@mui/material";

interface AWSchoolIconBadgeProps {
  icon: React.ReactNode;
  backgroundColor?: string;
  iconColor?: string;
  size?: "small" | "medium" | "large";
  borderRadius?: string;
  className?: string;
  showBackground?: boolean; // New prop to control background visibility
}

const AWSchoolIconBadge: React.FC<AWSchoolIconBadgeProps> = ({
  icon,
  backgroundColor = "transparent", // Changed default to transparent
  iconColor = "#FA206F",
  size = "medium",
  borderRadius = "0", // Changed default to no border radius
  className = "",
  showBackground = false, // Default to no background
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          width: showBackground ? { xs: 40, sm: 48 } : "auto",
          height: showBackground ? { xs: 40, sm: 48 } : "auto",
          "& svg": { fontSize: { xs: "1.5rem", sm: "1.8rem" } },
        };
      case "large":
        return {
          width: showBackground ? { xs: 60, sm: 72, md: 80 } : "auto",
          height: showBackground ? { xs: 60, sm: 72, md: 80 } : "auto",
          "& svg": { fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" } },
        };
      default: // medium
        return {
          width: showBackground ? { xs: 48, sm: 56, md: 64 } : "auto",
          height: showBackground ? { xs: 48, sm: 56, md: 64 } : "auto",
          "& svg": { fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } },
        };
    }
  };

  return (
    <Box
      className={className}
      sx={{
        backgroundColor: showBackground ? backgroundColor : "transparent",
        borderRadius: showBackground ? borderRadius : "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease-in-out",
        flexShrink: 0,
        ".& svg": {
          color: iconColor,
          transition: "all 0.3s ease-in-out",
        },
        "&:hover": showBackground ? {
          transform: "scale(1.1)",
          boxShadow: `0px 8px 16px ${backgroundColor}40`,
        } : {},
        ...getSizeStyles(),
      }}
    >
      {icon}
    </Box>
  );
};

export default AWSchoolIconBadge;
