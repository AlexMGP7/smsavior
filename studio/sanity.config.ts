import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ??
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
  "j7xmosjq";

const dataset =
  process.env.SANITY_STUDIO_DATASET ??
  process.env.NEXT_PUBLIC_SANITY_DATASET ??
  "production";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath =
  process.env.SANITY_STUDIO_BASE_PATH ??
  (process.env.GITHUB_ACTIONS === "true" && repoName
    ? `/${repoName}/admin`
    : "/admin");

export default defineConfig({
  name: "smsavior-studio",
  title: "SMS Avior CMS",
  projectId,
  dataset,
  basePath,
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
