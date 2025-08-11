import React from "react";
import { Button, useTheme } from "@mui/material";

interface AWSchoolButtonProps {
  href?: string;
  onClick?: () => void;
  borderColor?: string;
  fontColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverFontColor?: string;
  children: React.ReactNode;
  variant?: "outlined" | "contained" | "text";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const AWSchoolButton: React.FC<AWSchoolButtonProps> = ({
  href,
  onClick,
  borderColor = "#FA206F",
  fontColor = "#FA206F",
  backgroundColor = "transparent",
  hoverBackgroundColor = "#FA206F",
  hoverFontColor = "white",
  children,
  variant = "outlined",
  size = "medium",
  fullWidth = false,
  disabled = false,
  type = "button",
  startIcon,
  endIcon,
}) => {
  const theme = useTheme();

  const buttonProps = {
    variant,
    size,
    fullWidth,
    disabled,
    type,
    startIcon,
    endIcon,
    ...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick }),
    sx: {
      border: variant === "outlined" ? `1px solid ${borderColor}` : "none",
      color: fontColor,
      backgroundColor,
      textTransform: "none",
      borderRadius: "24px",
      fontSize: { 
        xs: size === "small" ? "0.8rem" : size === "large" ? "1.1rem" : "0.9rem",
        sm: size === "small" ? "0.9rem" : size === "large" ? "1.2rem" : "1rem",
      },
      fontWeight: 500,
      padding: { 
        xs: size === "small" ? "6px 16px" : size === "large" ? "10px 32px" : "8px 24px",
        sm: size === "small" ? "8px 20px" : size === "large" ? "12px 36px" : "10px 28px",
      },
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        backgroundColor: hoverBackgroundColor,
        color: hoverFontColor,
        borderColor: hoverBackgroundColor,
        transform: "translateY(-2px)",
        boxShadow: "0px 8px 16px rgba(250, 32, 111, 0.2)",
        "@media (hover: none)": {
          backgroundColor,
          color: fontColor,
          borderColor,
          transform: "none",
          boxShadow: "none",
        },
      },
      "&:focus-visible": {
        outline: `2px solid ${borderColor}`,
        outlineOffset: "2px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: size === "small" ? "0.8rem" : size === "large" ? "1rem" : "0.9rem",
        padding: size === "small" ? "6px 16px" : size === "large" ? "10px 24px" : "8px 20px",
      },
    },
  };

  return (
    <Button {...buttonProps}>
      {children}
    </Button>
  );
};

export default AWSchoolButton;
