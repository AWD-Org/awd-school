import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface AWSchoolTitleProps {
  text: string;
  highlight?: string[];
  alignText?: "left" | "center" | "right";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  className?: string;
}

const AWSchoolTitle: React.FC<AWSchoolTitleProps> = ({ 
  text, 
  highlight = [], 
  alignText = "center",
  variant = "h3",
  color = "#101010",
  className = "",
}) => {
  const { t } = useTranslation();
  
  // Process text with interpolation and highlighting
  const processText = (inputText: string) => {
    // Handle i18next interpolation
    const interpolatedText = t(inputText, { 
      highlight: highlight.join(" "),
      returnObjects: false,
      defaultValue: inputText
    });
    
    if (!highlight.length) {
      return <span>{interpolatedText}</span>;
    }

    // Create regex for highlighting
    const regex = new RegExp(`(${highlight.join("|")})`, "gi");
    const parts = interpolatedText.split(regex);

    return parts.map((part, index) => {
      const isHighlight = highlight.some((word) => 
        word.toLowerCase() === part.toLowerCase()
      );
      
      if (isHighlight) {
        return (
          <span
            key={index}
            style={{
              fontWeight: "bold",
              color: "#FA206F",
            }}
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <Typography
      variant={variant}
      className={className}
      sx={{
        fontSize: { 
          xs: variant === "h1" ? "3rem" : variant === "h2" ? "2.5rem" : variant === "h3" ? "2rem" : "1.5rem",
          sm: variant === "h1" ? "4rem" : variant === "h2" ? "3rem" : variant === "h3" ? "2.5rem" : "2rem",
          md: variant === "h1" ? "6rem" : variant === "h2" ? "4rem" : variant === "h3" ? "3rem" : "2.5rem",
        },
        fontWeight: variant === "h1" ? 700 : variant === "h2" ? 600 : 500,
        lineHeight: 1.2,
        textAlign: alignText,
        color: color,
        marginBottom: 2,
      }}
    >
      {processText(text)}
    </Typography>
  );
};

export default AWSchoolTitle;
