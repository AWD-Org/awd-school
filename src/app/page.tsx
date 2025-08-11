"use client";

import { useEffect } from "react";
import I18nProvider from "../components/I18nProvider";
import ClientThemeProvider from "../components/ClientThemeProvider";
import AWSchoolNavbar from "../components/AWSchoolNavbar";
import AWSchoolFooter from "../components/AWSchoolFooter";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Industries from "../sections/Industries";
import Workflow from "../sections/Workflow";
import UseCases from "../sections/UseCases";
import Benefits from "../sections/Benefits";
import CaseStudies from "../sections/CaseStudies";
import FAQs from "../sections/FAQs";
import FinalCTA from "../sections/FinalCTA";
import { initAnalytics, trackPageView } from "../utils/analytics";

function MainContent() {
  useEffect(() => {
    // Initialize analytics
    initAnalytics();
    trackPageView("home");

    // Smooth scroll observer for section tracking
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "-50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            // Update URL hash without scrolling
            const newUrl = `${window.location.pathname}#${sectionId}`;
            window.history.replaceState({}, "", newUrl);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="min-h-screen bg-brand-background">
      <AWSchoolNavbar />
      
      {/* Main content with smooth scroll */}
      <div className="scroll-smooth">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="industries">
          <Industries />
        </section>
        
        <section id="workflow">
          <Workflow />
        </section>
        
        {/* <section id="cases">
          <UseCases />
        </section> */}
        
        <section id="benefits">
          <Benefits />
        </section>
        
        {/* <section id="case-studies">
          <CaseStudies />
        </section>
        
        <section id="faqs">
          <FAQs />
        </section> */}
        
        <section id="contact">
          <FinalCTA />
        </section>
      </div>

      <AWSchoolFooter />
    </main>
  );
}

export default function HomePage() {
  return (
    <ClientThemeProvider>
      <I18nProvider>
        <MainContent />
      </I18nProvider>
    </ClientThemeProvider>
  );
}
