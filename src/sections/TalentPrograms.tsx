"use client";

import { Briefcase, Code2, Compass, GraduationCap, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FadeIn from "../components/FadeIn";

const TalentPrograms: React.FC = () => {
  const { t } = useTranslation();

  const cards = [
    { key: "vocational-guidance", icon: Compass },
    { key: "learning-path", icon: GraduationCap },
    { key: "skills-stack", icon: Code2 },
    { key: "product-vision", icon: Target },
    { key: "leadership", icon: Users },
    { key: "career-launch", icon: Briefcase },
  ];

  return (
    <motion.section
      id="talent"
      className="bg-paper"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <FadeIn>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-xl font-semibold text-ink">
              {t("services.blocks.talent.title")}
            </h2>
            <p className="max-w-[420px] text-sm text-ink/70 sm:text-base">
              {t("services.blocks.talent.subtitle")}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ key, icon: Icon }, index) => (
            <FadeIn key={key} delay={index * 0.08}>
              <article className="flex min-h-[200px] flex-col justify-between gap-3 rounded-2xl border border-ink/10 bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-[0_12px_24px_rgba(26,26,26,0.08)]">
                <div className="flex flex-col gap-2">
                  <Icon className="h-5 w-5 text-ink/30" />
                  <h3 className="text-lg font-semibold text-ink">
                    {t(`services.cards.${key}.title`)}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-ink/70">
                  {t(`services.cards.${key}.description`)}
                </p>
                <p className="text-xs text-ink/40">{t(`services.cards.${key}.meta`)}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TalentPrograms;
