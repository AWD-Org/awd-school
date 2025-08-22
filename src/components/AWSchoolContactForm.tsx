"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  CircularProgress,
  Grid,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Loader2 } from "lucide-react";
import AWSchoolButton from "./AWSchoolButton";
import AWSchoolTitle from "./AWSchoolTitle";
import { submitContactForm, ContactFormData, industryOptions, companySizeOptions } from "../utils/form";
import { track } from "../utils/analytics";

// Form provider configuration - using SendGrid for email delivery
const FORM_PROVIDER: "netlify" | "supabase" | "sendgrid" = "sendgrid";

const AWSchoolContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      industry: "",
      companySize: "",
      message: "",
      honeypot: "", // Anti-spam field
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      track("form_submit_attempt", { provider: FORM_PROVIDER });
      
      const result = await submitContactForm(data, FORM_PROVIDER);
      
      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: t("contact.form.success"),
        });
        reset();
        track("form_submit_success", { 
          provider: FORM_PROVIDER,
          industry: data.industry,
          companySize: data.companySize,
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || t("contact.form.error"),
        });
        track("form_submit_error", { 
          provider: FORM_PROVIDER,
          error: result.message,
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: t("contact.form.error"),
      });
      track("form_submit_error", { 
        provider: FORM_PROVIDER,
        error: "unexpected_error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: { xs: 3, sm: 4, md: 5 },
        backgroundColor: "#FFFFFF",
        borderRadius: "24px",
        boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.1)",
      }}
    >

      {/* Honeypot field - hidden from users */}
      <Controller
        name="honeypot"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            sx={{ display: "none" }}
          />
        )}
      />

      <AWSchoolTitle
        text={t("contact.title")}
        highlight={[t("contact.highlight")]}
        variant="h4"
        alignText="center"
        color="#101010"
      />

      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          mb: 4,
          color: "#666666",
          lineHeight: 1.6,
        }}
      >
        {t("contact.subtitle")}
      </Typography>

      {/* Status Alert */}
      {submitStatus.type && (
        <Alert
          severity={submitStatus.type}
          sx={{ mb: 3 }}
          onClose={() => setSubmitStatus({ type: null, message: "" })}
        >
          {submitStatus.message}
        </Alert>
      )}

      <Grid container spacing={3}>
        {/* Name */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "El nombre es requerido" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label={t("contact.form.name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                disabled={isSubmitting}
                autoComplete="name"
              />
            )}
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "El email es requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label={t("contact.form.email")}
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                disabled={isSubmitting}
                autoComplete="email"
              />
            )}
          />
        </Grid>

        {/* Company */}
        <Grid item xs={12}>
          <Controller
            name="company"
            control={control}
            rules={{ required: "La empresa es requerida" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label={t("contact.form.company")}
                error={!!errors.company}
                helperText={errors.company?.message}
                disabled={isSubmitting}
                autoComplete="organization"
              />
            )}
          />
        </Grid>

        {/* Industry */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="industry"
            control={control}
            rules={{ required: "La industria es requerida" }}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.industry}>
                <InputLabel>{t("contact.form.industry")}</InputLabel>
                <Select
                  {...field}
                  label={t("contact.form.industry")}
                  disabled={isSubmitting}
                >
                  {industryOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {t(`contact.form.industries.${option.value}`)}
                    </MenuItem>
                  ))}
                </Select>
                {errors.industry && (
                  <Typography variant="caption" color="error" sx={{ mt: 1, ml: 2 }}>
                    {errors.industry.message}
                  </Typography>
                )}
              </FormControl>
            )}
          />
        </Grid>

        {/* Company Size */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="companySize"
            control={control}
            rules={{ required: "El tamaño de empresa es requerido" }}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.companySize}>
                <InputLabel>{t("contact.form.companySize")}</InputLabel>
                <Select
                  {...field}
                  label={t("contact.form.companySize")}
                  disabled={isSubmitting}
                >
                  {companySizeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {t(`contact.form.companySizes.${option.value}`)}
                    </MenuItem>
                  ))}
                </Select>
                {errors.companySize && (
                  <Typography variant="caption" color="error" sx={{ mt: 1, ml: 2 }}>
                    {errors.companySize.message}
                  </Typography>
                )}
              </FormControl>
            )}
          />
        </Grid>

        {/* Message */}
        <Grid item xs={12}>
          <Controller
            name="message"
            control={control}
            rules={{ required: "El mensaje es requerido" }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label={t("contact.form.message")}
                multiline
                rows={4}
                error={!!errors.message}
                helperText={errors.message?.message}
                disabled={isSubmitting}
              />
            )}
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <AWSchoolButton
            type="submit"
            fullWidth
            size="large"
            disabled={isSubmitting}
            backgroundColor="#FA206F"
            fontColor="#FBFBFB"
            hoverBackgroundColor="#E01D63"
            hoverFontColor="#FBFBFB"
            startIcon={
              isSubmitting ? (
                <Loader2 size={20} className="animate-spin" />
              ) : undefined
            }
          >
            {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
          </AWSchoolButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AWSchoolContactForm;
