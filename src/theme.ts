import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-quicksand), Arial, Helvetica, sans-serif",
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      "@media (max-width:960px)": {
        fontSize: "3rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 600,
      "@media (max-width:960px)": {
        fontSize: "2.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 500,
      "@media (max-width:960px)": {
        fontSize: "2rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
      "@media (max-width:960px)": {
        fontSize: "1.75rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "1.125rem",
      },
    },
    body1: {
      fontSize: "1.125rem",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 300,
      "@media (max-width:600px)": {
        fontSize: "0.875rem",
      },
    },
  },
  palette: {
    primary: {
      main: "#FA206F",
      contrastText: "#FBFBFB",
    },
    secondary: {
      main: "#101010",
      contrastText: "#FBFBFB",
    },
    background: {
      default: "#FBFBFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#101010",
      secondary: "#666666",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          textTransform: "none",
          fontWeight: 500,
          transition: "all 0.3s ease-in-out",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          boxShadow: "none",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
          },
        },
      },
    },
  },
});

export default theme;
