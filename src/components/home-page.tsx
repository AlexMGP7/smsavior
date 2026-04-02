import React from "react";
import type { SiteContent } from "@/lib/site-content";
import { SiteHeader } from "./sections/SiteHeader";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ResourcesSection } from "./sections/ResourcesSection";
import { PlansSection } from "./sections/PlansSection";
import { ActivitiesSection } from "./sections/ActivitiesSection";
import { MetricsSection } from "./sections/MetricsSection";
import { ContactSection } from "./sections/ContactSection";
import { SiteFooter } from "./sections/SiteFooter";

export function HomePage({ content }: { content: SiteContent }) {
  const logoImage = content.branding.logo;
  const headerLogoAlt = logoImage?.alt || "Logo SMS Avior Airlines";

  return (
    <main className="site-stage pb-20">
      <SiteHeader logoImage={logoImage} headerLogoAlt={headerLogoAlt} />
      
      <HeroSection 
        content={content.hero} 
        logoImage={logoImage} 
        headerLogoAlt={headerLogoAlt} 
      />
      
      <AboutSection content={content.about} />
      
      <ResourcesSection resources={content.resources} />
      
      <PlansSection plans={content.emergencyPlans} />
      
      <ActivitiesSection activities={content.activities} />
      
      <MetricsSection 
        metricsSummary={content.metricsSummary} 
        metrics={content.metrics} 
      />
      
      <ContactSection contact={content.contact} />
      
      <SiteFooter footer={content.footer} />
    </main>
  );
}
