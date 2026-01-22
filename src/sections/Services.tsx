"use client";

import { Brain, Cpu, LineChart, ShieldCheck, Wrench, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FadeIn from "../components/FadeIn";

const Services: React.FC = () => {
  const { t } = useTranslation();

  const businessCards = [
    { key: "ai-foundations", icon: Brain },
    { key: "automation", icon: Workflow },
    { key: "applied-analytics", icon: LineChart },
    { key: "responsible-ai", icon: ShieldCheck },
    { key: "product-labs", icon: Wrench },
    { key: "tech-strategy", icon: Cpu },
  ];

  return (
    <motion.section
      id="programs"
      className="bg-paper"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <FadeIn>
          <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
            <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
              {t("services.title")}
            </h2>
            <p className="text-sm text-ink/70 sm:text-base">
              {t("services.subtitle")}
            </p>
          </div>
        </FadeIn>
        <div className="mt-12 space-y-14">
          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h3 className="text-xl font-semibold text-ink">
                {t("services.blocks.business.title")}
              </h3>
              <p className="max-w-[420px] text-sm text-ink/70 sm:text-base">
                {t("services.blocks.business.subtitle")}
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {businessCards.map(({ key, icon: Icon }, index) => (
                <FadeIn key={key} delay={index * 0.08}>
                  <article className="flex min-h-[200px] flex-col justify-between gap-3 rounded-2xl border border-ink/10 bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-[0_12px_24px_rgba(26,26,26,0.08)]">
                    <div className="flex flex-col gap-2">
                      <Icon className="h-5 w-5 text-ink/30" />
                      <h4 className="text-lg font-semibold text-ink">
                        {t(`services.cards.${key}.title`)}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-ink/70">
                      {t(`services.cards.${key}.description`)}
                    </p>
                    <p className="text-xs text-ink/40">
                      {t(`services.cards.${key}.meta`)}
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

export default Services;
