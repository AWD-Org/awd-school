"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FadeIn from "../components/FadeIn";

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", { returnObjects: true }) as Array<{
    quote: string;
    name: string;
    role: string;
  }>;

  return (
    <motion.section
      id="stories"
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
              {t("testimonials.title")}
            </h2>
            <p className="max-w-[360px] text-sm text-ink/70 sm:text-base">
              {t("testimonials.subtitle")}
            </p>
          </div>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.08}>
              <article className="relative flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent hover:shadow-[0_12px_24px_rgba(26,26,26,0.08)]">
                <p className="text-sm leading-relaxed text-ink/70">“{item.quote}”</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-ink/40">{item.role}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
