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
  icon
}`;

export const emergencyPlansQuery = groq`*[_type == "emergencyPlan"] | order(orderRank asc, _createdAt asc){
  station,
  status,
  title,
  description,
  items,
  href,
  external
}`;

export const activitiesQuery = groq`*[_type == "activity"] | order(orderRank asc, eventDate desc){
  title,
  category,
  station,
  "date": coalesce(displayDate, eventDate),
  description,
  outcome
}`;

export const metricsSummaryQuery = groq`*[_type == "siteSettings"][0]{
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
