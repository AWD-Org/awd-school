"use client";

import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import AWSchoolTitle from "../components/AWSchoolTitle";

// Placeholder components for remaining sections
const UseCases = () => {
  const { t } = useTranslation();
  
  return (
    <Box sx={{ py: { xs: 8, sm: 10, md: 12 }, backgroundColor: "#FBFBFB" }}>
      <Container maxWidth="lg">
        <AWSchoolTitle
          text={t("useCases.title")}
          highlight={[t("useCases.highlight")]}
          variant="h2"
          alignText="center"
        />
        {/* TODO: Implement use cases comparison */}
      </Container>
    </Box>
  );
};

export default UseCases;
