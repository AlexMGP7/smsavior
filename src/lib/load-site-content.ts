import { defaultSiteContent, type SiteContent } from "@/lib/site-content";
import { sanityClient } from "@/lib/sanity/client";
import {
  aboutQuery,
  activitiesQuery,
  contactQuery,
  emergencyPlansQuery,
  heroQuery,
  metricsQuery,
  metricsSummaryQuery,
  resourcesQuery,
} from "@/lib/sanity/queries";

export async function loadSiteContent(): Promise<SiteContent> {
  if (!sanityClient) {
    return defaultSiteContent;
  }

  try {
    const [
      hero,
      about,
      resources,
      emergencyPlans,
      activities,
      metricsSummary,
      metrics,
      contact,
    ] = await Promise.all([
      sanityClient.fetch(heroQuery),
      sanityClient.fetch(aboutQuery),
      sanityClient.fetch(resourcesQuery),
      sanityClient.fetch(emergencyPlansQuery),
      sanityClient.fetch(activitiesQuery),
      sanityClient.fetch(metricsSummaryQuery),
      sanityClient.fetch(metricsQuery),
      sanityClient.fetch(contactQuery),
    ]);

    return {
      hero: hero
        ? {
            eyebrow: hero.heroEyebrow,
            title: hero.heroTitle,
            description: hero.heroDescription,
            primaryCta: {
              label: hero.primaryCtaLabel,
              href: hero.primaryCtaHref,
            },
            secondaryCta: {
              label: hero.secondaryCtaLabel,
              href: hero.secondaryCtaHref,
            },
            adminNote: hero.adminNote,
            stats: hero.stats,
            focusAreas: hero.focusAreas,
          }
        : defaultSiteContent.hero,
      about: about ?? defaultSiteContent.about,
      resources: resources?.length ? resources : defaultSiteContent.resources,
      emergencyPlans: emergencyPlans?.length
        ? emergencyPlans
        : defaultSiteContent.emergencyPlans,
      activities: activities?.length ? activities : defaultSiteContent.activities,
      metricsSummary: metricsSummary
        ? {
            title: metricsSummary.metricsSummaryTitle,
            description: metricsSummary.metricsSummaryDescription,
          }
        : defaultSiteContent.metricsSummary,
      metrics: metrics?.length ? metrics : defaultSiteContent.metrics,
      contact: contact
        ? {
            title: contact.contactTitle,
            description: contact.contactDescription,
            channels: contact.contactChannels,
          }
        : defaultSiteContent.contact,
      footer: contact
        ? {
            copy: contact.footerCopy,
            links: contact.footerLinks,
          }
        : defaultSiteContent.footer,
    };
  } catch (error) {
    console.error("Sanity fetch failed, using default content.", error);
    return defaultSiteContent;
  }
}
