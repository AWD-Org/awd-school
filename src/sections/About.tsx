"use client";

import { BookOpen, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FadeIn from "../components/FadeIn";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="about"
      className="bg-paper"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeIn>
            <div>
              <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">
                {t("about.title")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                {t("about.subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  t("about.metrics.training"),
                  t("about.metrics.automation"),
                  t("about.metrics.analytics"),
                  t("about.metrics.governance"),
                  t("about.metrics.adoption"),
                  t("about.metrics.support"),
                ].map((label) => (
                  <div
                    key={label}
                    className="flex items-center justify-center rounded-full border border-ink/10 bg-paper px-4 py-2 transition-colors hover:border-brand-accent/40 hover:text-ink"
                  >
                    <p className="text-xs font-semibold text-ink/70">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid gap-4">
              {[
                { key: "training", icon: BookOpen },
                { key: "consulting", icon: Sparkles },
                { key: "adoption", icon: ShieldCheck },
                { key: "results", icon: Sparkles },
              ].map(({ key, icon: Icon }) => (
                <article
                  key={key}
                  className="rounded-2xl border border-ink/10 bg-paper px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-[0_12px_24px_rgba(26,26,26,0.08)]"
                >
                  <Icon className="h-5 w-5 text-ink/30" />
                  <p className="mt-3 text-sm font-semibold text-ink">
                    {t(`about.cards.${key}.title`)}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {t(`about.cards.${key}.description`)}
                  </p>
                </article>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
