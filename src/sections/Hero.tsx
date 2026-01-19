"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AWSchoolButton from "../components/AWSchoolButton";
import { track } from "../utils/analytics";
import Image from "next/image";

const Hero = () => {
  const { t } = useTranslation();

  const handleCTAClick = () => {
    track("cta_click", { location: "hero" });
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (path: string, label: string) => {
    track("hero_nav_click", { section: label });
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative -mt-[88px] min-h-screen overflow-hidden bg-paper pt-[88px] z-0"
    >
      <Image
        src="/hero-texture.svg"
        alt=""
        fill
        className="object-cover blur-[2px]"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-paper/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,31,111,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(79,70,229,0.15),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center justify-end px-6 py-16">
        <div className="flex max-w-[560px] flex-col items-end text-right text-ink">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {t("hero.eyebrow") ? (
              <p className="text-sm text-ink/60">{t("hero.eyebrow")}</p>
            ) : null}
            <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.05] sm:text-[3.4rem] md:text-[4rem]">
              {t("hero.title")}{" "}
              <span className="text-brand-accent">{t("hero.highlight")}</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
              {t("hero.subtitle")}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-end gap-4">
              <AWSchoolButton onClick={handleCTAClick} variant="outline" size="lg">
                {t("hero.cta")}
              </AWSchoolButton>
              <AWSchoolButton onClick={() => handleNavClick("#programs", "programs")} variant="solid" size="lg">
                {t("hero.secondary")}
              </AWSchoolButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
