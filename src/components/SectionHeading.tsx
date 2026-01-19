"use client";

import React from "react";
import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, description, align = "left" }) => {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <FadeIn className={`max-w-2xl ${alignClasses}`}>
      <p className="text-xs text-ink/50">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold leading-tight text-ink md:text-3xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-ink/70">{description}</p>
    </FadeIn>
  );
};

export default SectionHeading;
