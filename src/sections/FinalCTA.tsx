"use client";

import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AWSchoolButton from "../components/AWSchoolButton";
import FadeIn from "../components/FadeIn";
import { track } from "../utils/analytics";

const FinalCTA: React.FC = () => {
  const { t } = useTranslation();

  const handleCTAClick = () => {
    track("cta_click", { location: "final" });
  };

  return (
    <motion.section
      id="contact"
      className="bg-paper"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <FadeIn>
          <div className="rounded-[36px] border border-black/5 bg-paper p-6 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-ink md:text-3xl">
                  {t("finalCTA.title")}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink/70">
                  {t("finalCTA.subtitle")}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <AWSchoolButton onClick={handleCTAClick} variant="outline" size="lg">
                    {t("hero.cta")}
                  </AWSchoolButton>
                  <AWSchoolButton href="mailto:school@amoxtli.tech" variant="solid" size="lg">
                    {t("finalCTA.secondary")}
                  </AWSchoolButton>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 rounded-3xl bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(26,26,26,0.08)]">
                <p className="text-xs text-ink/40">{t("finalCTA.card.title")}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {t("finalCTA.card.description")}
                </p>
                <div className="mt-6 space-y-4 text-sm text-ink/70">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-brand-accent" />
                    <a href="mailto:school@amoxtli.tech" className="font-medium text-ink">
                      school@amoxtli.tech
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-brand-accent" />
                    <span>{t("finalCTA.card.responseTime")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </motion.section>
  );
};

export default FinalCTA;
