"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FadeIn from "../components/FadeIn";

const Workflow: React.FC = () => {
  const { t } = useTranslation();
  const steps = t("workflow.steps", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <motion.section
      id="methodology"
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
              {t("workflow.title")}
            </h2>
            <p className="max-w-[480px] text-sm leading-relaxed text-ink/70 sm:text-base">
              {t("workflow.subtitle")}
            </p>
          </div>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.08}>
              <article className="flex h-full min-h-[220px] flex-col justify-between rounded-2xl border border-ink/10 bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-[0_12px_24px_rgba(26,26,26,0.08)]">
                <div>
                  <span className="text-xs font-semibold text-brand-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 h-px w-full bg-ink/10" />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Workflow;
