import { aboutSmsType } from "./singletons/aboutSms";
import { homepageType } from "./singletons/homepage";
import { siteSettingsType } from "./singletons/siteSettings";
import { activityType } from "./documents/activity";
import { emergencyPlanType } from "./documents/emergencyPlan";
import { metricType } from "./documents/metric";
import { resourceLinkType } from "./documents/resourceLink";
import {
  channelType,
  footerLinkType,
  focusAreaType,
  highlightType,
  pillarType,
  statType,
} from "./objects";

export const schemaTypes = [
  homepageType,
  aboutSmsType,
  siteSettingsType,
  resourceLinkType,
  emergencyPlanType,
  activityType,
  metricType,
  statType,
  focusAreaType,
  pillarType,
  highlightType,
  channelType,
  footerLinkType,
];
