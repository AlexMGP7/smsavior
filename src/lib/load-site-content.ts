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
      branding: metricsSummary?.brandLogo
        ? {
            logo: {
              url: metricsSummary.brandLogo.asset?.url,
              alt: metricsSummary.brandLogo.alt,
            },
          }
        : defaultSiteContent.branding,
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
            heroImage: hero.heroImage
              ? {
                  url: hero.heroImage.asset?.url,
                  alt: hero.heroImage.alt,
                }
              : undefined,
            stats: hero.stats,
            focusAreas: hero.focusAreas,
          }
        : defaultSiteContent.hero,
      about: about
        ? {
            title: about.title,
            description: about.description,
            mission: about.mission,
            vision: about.vision,
            sectionImage: about.sectionImage
              ? {
                  url: about.sectionImage.asset?.url,
                  alt: about.sectionImage.alt,
                }
              : undefined,
            pillars: about.pillars,
            highlights: about.highlights,
          }
        : defaultSiteContent.about,
      resources: resources?.length
        ? resources.map((resource: NonNullable<typeof resources>[number]) => ({
            ...resource,
            image: resource.image
              ? {
                  url: resource.image.asset?.url,
                  alt: resource.image.alt,
                }
              : undefined,
            file: resource.file?.asset
              ? {
                  url: resource.file.asset.url,
                  originalFilename: resource.file.asset.originalFilename,
                }
              : undefined,
          }))
        : defaultSiteContent.resources,
      emergencyPlans: emergencyPlans?.length
        ? emergencyPlans.map((plan: NonNullable<typeof emergencyPlans>[number]) => ({
            ...plan,
            image: plan.image
              ? {
                  url: plan.image.asset?.url,
                  alt: plan.image.alt,
                }
              : undefined,
            file: plan.file?.asset
              ? {
                  url: plan.file.asset.url,
                  originalFilename: plan.file.asset.originalFilename,
                }
              : undefined,
          }))
        : defaultSiteContent.emergencyPlans,
      activities: activities?.length
        ? activities.map((activity: NonNullable<typeof activities>[number]) => ({
            ...activity,
            image: activity.image
              ? {
                  url: activity.image.asset?.url,
                  alt: activity.image.alt,
                }
              : undefined,
          }))
        : defaultSiteContent.activities,
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
