"use client";

import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import AWSchoolTitle from "../components/AWSchoolTitle";

const CaseStudies = () => {
  const { t } = useTranslation();
  
  return (
    <Box sx={{ py: { xs: 8, sm: 10, md: 12 }, backgroundColor: "#FBFBFB" }}>
      <Container maxWidth="lg">
        <AWSchoolTitle
          text={t("caseStudies.title")}
          highlight={[t("caseStudies.highlight")]}
          variant="h2"
          alignText="center"
        />
        {/* TODO: Implement Swiper case studies */}
      </Container>
    </Box>
  );
};

export default CaseStudies;
