"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FadeIn from "../components/FadeIn";

const Benefits: React.FC = () => {
  const { t } = useTranslation();
  const businessBenefits = t("benefits.business.list", {
    returnObjects: true,
  }) as Array<{ title: string; description: string; metric: string }>;
  const talentBenefits = t("benefits.talent.list", {
    returnObjects: true,
  }) as Array<{ title: string; description: string; metric: string }>;

  return (
    <motion.section
      id="benefits"
      className="bg-paper"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
              {t("benefits.title")}
            </h2>
            <p className="max-w-[420px] text-sm text-ink/70 sm:text-base">
              {t("benefits.subtitle")}
            </p>
          </div>
        </FadeIn>
        <div className="mt-12 space-y-12">
          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h3 className="text-xl font-semibold text-ink">
                {t("benefits.business.title")}
              </h3>
              <p className="max-w-[420px] text-sm text-ink/70 sm:text-base">
                {t("benefits.business.subtitle")}
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {businessBenefits.map((benefit, index) => (
                <FadeIn key={benefit.title} delay={index * 0.08}>
                  <article className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-[0_12px_24px_rgba(26,26,26,0.08)]">
                    <div>
                      <p className="text-sm font-semibold text-ink">{benefit.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">
                        {benefit.description}
                      </p>
                    </div>
                    <p className="mt-6 text-xs text-brand-accent">
                      {benefit.metric}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-ink/10" />

          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h3 className="text-xl font-semibold text-ink">
                {t("benefits.talent.title")}
              </h3>
              <p className="max-w-[420px] text-sm text-ink/70 sm:text-base">
                {t("benefits.talent.subtitle")}
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {talentBenefits.map((benefit, index) => (
                <FadeIn key={benefit.title} delay={index * 0.08}>
                  <article className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-[0_12px_24px_rgba(26,26,26,0.08)]">
                    <div>
                      <p className="text-sm font-semibold text-ink">{benefit.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">
                        {benefit.description}
                      </p>
                    </div>
                    <p className="mt-6 text-xs text-brand-accent">
                      {benefit.metric}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;
