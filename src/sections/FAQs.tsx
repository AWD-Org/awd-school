"use client";

import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import AWSchoolTitle from "../components/AWSchoolTitle";

const FAQs = () => {
  const { t } = useTranslation();
  
  return (
    <Box sx={{ py: { xs: 8, sm: 10, md: 12 }, backgroundColor: "#F8F9FA" }}>
      <Container maxWidth="lg">
        <AWSchoolTitle
          text={t("faqs.title")}
          highlight={[t("faqs.highlight")]}
          variant="h2"
          alignText="center"
        />
        {/* TODO: Implement FAQ accordion */}
      </Container>
    </Box>
  );
};

export default FAQs;
