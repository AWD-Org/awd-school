"use client";

import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import { track } from "../utils/analytics";

const AWSchoolFooter: React.FC = () => {
  const { t } = useTranslation();

  const handleLinkClick = (linkType: string, url: string) => {
    track("footer_link_click", { type: linkType, url });
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/amoxtli.tech/",
      icon: <Instagram size={20} />,
      label: t("footer.social.instagram"),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/amoxtli-web-developers",
      icon: <Linkedin size={20} />,
      label: t("footer.social.linkedin"),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61551487858288",
      icon: <Facebook size={20} />,
      label: t("footer.social.facebook"),
    },
  ];

  const footerLinks = [
    { label: t("footer.links.programs"), path: "#programs" },
    { label: t("footer.links.methodology"), path: "#methodology" },
    { label: t("footer.links.benefits"), path: "#benefits" },
    { label: t("footer.links.contact"), path: "#contact" },
  ];

  const legalLinks = [
    { 
      label: t("footer.legal.privacy"), 
      url: "/privacy"
    },
    { 
      label: t("footer.legal.terms"), 
      url: "/terms"
    },
  ];

  const handleInternalLinkClick = (path: string, label: string) => {
    track("footer_internal_link", { section: label });
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-10 rounded-[32px] border border-black/5 bg-paper px-6 py-10 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
          <div>
            <p className="text-xs text-ink/50">Amoxtli School</p>
            <h3 className="mt-3 text-xl font-semibold text-ink">{t("footer.title")}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">{t("footer.description")}</p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick("social", social.url)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink/60 transition hover:border-ink/50 hover:text-ink"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">{t("footer.navigation")}</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-ink/70">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleInternalLinkClick(link.path, link.label)}
                  className="text-left transition hover:text-ink"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">{t("footer.legal.title")}</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-ink/70">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  onClick={() => handleLinkClick("legal", link.url)}
                  className="transition hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-ink/50">{t("footer.contactLabel")}</p>
            <a
              href="mailto:school@amoxtli.tech"
              onClick={() => handleLinkClick("email", "school@amoxtli.tech")}
              className="mt-2 block text-sm font-semibold text-ink"
            >
              {t("footer.contact")}
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-ink/50 md:flex-row md:items-center md:justify-between">
          <span>{t("footer.copyright")}</span>
          <span>{t("footer.note")}</span>
        </div>
      </div>
    </footer>
  );
};

export default AWSchoolFooter;
