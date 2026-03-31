import groq from "groq";

export const heroQuery = groq`*[_type == "homepage"][0]{
  heroEyebrow,
  heroTitle,
  heroDescription,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  adminNote,
  heroImage{
    alt,
    asset->{
      url
    }
  },
  stats[]{
    value,
    label
  },
  focusAreas[]{
    kicker,
    title,
    description
  }
}`;

export const aboutQuery = groq`*[_type == "aboutSms"][0]{
  title,
  description,
  mission,
  vision,
  sectionImage{
    alt,
    asset->{
      url
    }
  },
  pillars[]{
    title,
    description
  },
  highlights[]{
    eyebrow,
    title,
    description
  }
}`;

export const resourcesQuery = groq`*[_type == "resourceLink"] | order(orderRank asc, _createdAt asc){
  title,
  description,
  category,
  ctaLabel,
  href,
  external,
  icon,
  image{
    alt,
    asset->{
      url
    }
  },
  file{
    asset->{
      url,
      originalFilename
    }
  }
}`;

export const emergencyPlansQuery = groq`*[_type == "emergencyPlan"] | order(orderRank asc, _createdAt asc){
  station,
  status,
  title,
  description,
  items,
  href,
  external,
  image{
    alt,
    asset->{
      url
    }
  },
  file{
    asset->{
      url,
      originalFilename
    }
  }
}`;

export const activitiesQuery = groq`*[_type == "activity"] | order(orderRank asc, eventDate desc){
  title,
  category,
  station,
  "date": coalesce(displayDate, eventDate),
  description,
  outcome,
  image{
    alt,
    asset->{
      url
    }
  }
}`;

export const metricsSummaryQuery = groq`*[_type == "siteSettings"][0]{
  brandLogo{
    alt,
    asset->{
      url
    }
  },
  metricsSummaryTitle,
  metricsSummaryDescription
}`;

export const metricsQuery = groq`*[_type == "metric"] | order(orderRank asc, _createdAt asc){
  title,
  description,
  value
}`;

export const contactQuery = groq`*[_type == "siteSettings"][0]{
  contactTitle,
  contactDescription,
  contactChannels[]{
    label,
    value
  },
  footerCopy,
  footerLinks[]{
    label,
    href
  }
}`;
