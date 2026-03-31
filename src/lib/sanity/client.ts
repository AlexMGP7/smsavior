import { createClient } from "next-sanity";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "j7xmosjq";
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const hasSanityConfig = Boolean(projectId && dataset);

export const sanityClient = hasSanityConfig
  ? createClient({
      apiVersion: "2025-02-06",
      dataset,
      projectId,
      useCdn: true,
      perspective: "published",
    })
  : null;
