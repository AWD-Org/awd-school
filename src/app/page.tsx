"use client";

import { useEffect, useState } from "react";
import I18nProvider from "../components/I18nProvider";
import AWSchoolNavbar from "../components/AWSchoolNavbar";
import AWSchoolFooter from "../components/AWSchoolFooter";
import AWSchoolLoader from "../components/AWSchoolLoader";
import CookieBanner from "../components/CookieBanner";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import TalentPrograms from "../sections/TalentPrograms";
import Workflow from "../sections/Workflow";
import Benefits from "../sections/Benefits";
import Testimonials from "../sections/Testimonials";
import FinalCTA from "../sections/FinalCTA";
import { initAnalytics, trackPageView } from "../utils/analytics";

function MainContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);

    // Initialize analytics
    initAnalytics();
    trackPageView("home");

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const observerOptions = {
      threshold: 0.5,
      rootMargin: "-50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            const newUrl = `${window.location.pathname}#${sectionId}`;
            window.history.replaceState({}, "", newUrl);
          }
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isLoading]);

  // Show loader during loading phase
  if (isLoading) {
    return <AWSchoolLoader />;
  }

  return (
    <main className="min-h-screen bg-paper text-ink">
      <AWSchoolNavbar />
      
      {/* Main content */}
      <div className="snap-container">
        <div className="snap-section">
          <Hero />
        </div>
        <div className="snap-section snap-center-section">
          <About />
        </div>
        <div className="snap-section snap-center-section">
          <Services />
        </div>
        <div className="snap-section snap-center-section">
          <TalentPrograms />
        </div>
        <div className="snap-section snap-center-section">
          <Workflow />
        </div>
        <div className="snap-section snap-center-section">
          <Benefits />
        </div>
        <div className="snap-section snap-center-section">
          <Testimonials />
        </div>
        <div className="snap-section snap-center-section">
          <FinalCTA />
        </div>
        <div className="snap-section snap-center-section">
          <AWSchoolFooter />
        </div>
      </div>
      <CookieBanner />
    </main>
  );
}

export default function HomePage() {
  return (
    <I18nProvider>
      <MainContent />
    </I18nProvider>
  );
}
