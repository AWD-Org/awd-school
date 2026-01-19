"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import AWSchoolButton from "./AWSchoolButton";
import { track } from "../utils/analytics";
import Image from "next/image";

const AWSchoolNavbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSpanish, setIsSpanish] = useState(i18n.language === "es");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [panelOpen, setPanelOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const menuItems = useMemo(
    () => [
      { label: t("nav.home"), path: "#home" },
      { label: t("nav.about"), path: "#about" },
      { label: t("nav.programs"), path: "#programs" },
      { label: t("nav.methodology"), path: "#methodology" },
      { label: t("nav.benefits"), path: "#benefits" },
      { label: t("nav.stories"), path: "#stories" },
      { label: t("nav.contact"), path: "#contact" },
    ],
    [t]
  );

  useEffect(() => {
    const container = document.querySelector(".snap-container") as HTMLElement | null;
    const hero = document.getElementById("home");
    if (!hero || !container) return;

    const handleScroll = () => {
      const threshold = hero.offsetHeight - 88;
      setIsScrolled(container.scrollTop > threshold);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setIsSpanish(lng.startsWith("es"));
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setPanelOpen(false);
      return;
    }

    const timer = window.requestAnimationFrame(() => setPanelOpen(true));
    return () => window.cancelAnimationFrame(timer);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (mobileMenuOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      return;
    }

    if (dialog.open) {
      dialog.close();
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const container = document.querySelector(".snap-container") as HTMLElement | null;
    const sections = menuItems
      .map((link) => document.querySelector(link.path))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length || !container) return;

    let rafId = 0;
    const updateActive = () => {
      const offset = 120;
      const current = sections
        .filter((section) => section.offsetTop <= container.scrollTop + offset)
        .pop();
      if (current) {
        setActiveSection(`#${current.id}`);
      }
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateActive();
        rafId = 0;
      });
    };

    updateActive();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [menuItems]);

  const toggleLanguage = () => {
    const newLanguage = isSpanish ? "en" : "es";
    i18n.changeLanguage(newLanguage);
    setIsSpanish(!isSpanish);
    track("language_change", { language: newLanguage });
  };

  const handleNavClick = (path: string, label: string) => {
    track("nav_click", { section: label });

    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    track("cta_click", { location: "navbar" });
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-paper/95 backdrop-blur border-b border-black/5" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8">
          <button
            className="flex items-center text-ink"
            onClick={() => handleNavClick("#home", "logo")}
            aria-label="Amoxtli School"
          >
            <Image
              src="/assets/main.svg"
              alt="Amoxtli School"
              width={112}
              height={112}
              className="h-7 w-auto"
              priority
            />
          </button>

          <nav className="hidden items-center gap-6 lg:flex">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path, item.label)}
                className={`text-sm transition-colors ${
                  activeSection === item.path ? "text-brand-accent" : "text-ink/70 hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="hidden rounded-full border border-ink/20 px-3 py-1 text-xs font-semibold text-ink/70 transition hover:border-ink/50 hover:text-ink md:flex"
              aria-label="Toggle language"
            >
              {isSpanish ? "ES" : "EN"}
            </button>

            <div className="hidden md:block">
              <AWSchoolButton onClick={handleCTAClick} size="sm" variant="outline">
                {t("hero.cta")}
              </AWSchoolButton>
            </div>

            <button
              className="inline-flex items-center justify-center rounded-full border border-ink/10 p-2 text-ink lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <dialog
        ref={dialogRef}
        className="m-0 h-full w-full bg-transparent p-0"
        onClose={() => setMobileMenuOpen(false)}
        onCancel={() => setMobileMenuOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setMobileMenuOpen(false);
          }
        }}
        aria-label={t("nav.openMenu")}
      >
        <div className={`fixed inset-0 bg-ink/40 backdrop-blur ${panelOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
          <div className={`ml-auto h-full w-full max-w-sm bg-paper p-6 transition-transform duration-300 ${panelOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <span className="text-xs text-ink/50">Amoxtli School</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full border border-ink/10 p-2"
                aria-label="Close mobile menu"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-4 text-base">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-ink/80 transition-all duration-300 hover:text-ink"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCTAClick();
                }}
                className="min-h-[44px] rounded-full border border-brand-accent px-5 py-2 text-center text-sm font-semibold text-brand-accent transition-colors hover:bg-brand-accent hover:text-paper"
              >
                {t("hero.cta")}
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AWSchoolNavbar;
