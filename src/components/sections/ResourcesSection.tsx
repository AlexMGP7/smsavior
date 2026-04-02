"use client";
import React from "react";
import { ArrowRight, ChartColumnIncreasing, Files, ShieldCheck, Siren, SquareArrowOutUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentImage } from "@/components/ui/ContentImage";
import type { SiteContent } from "@/lib/site-content";

const iconMap = {
  report: Files,
  policy: ShieldCheck,
  glossary: ChartColumnIncreasing,
  emergency: Siren,
  change: ArrowRight,
};

export function ResourcesSection({ resources }: { resources: SiteContent["resources"] }) {
  const featuredResource = resources[0];
  const remainingResources = resources.slice(1);

  const resourceActionUrl = (resource: SiteContent["resources"][number]) =>
    resource.file?.url || resource.href;

  return (
    <section id="recursos" className="page-shell section-space">
      <SectionHeader
        eyebrow="Biblioteca de trabajo"
        title="Recursos SMS"
        description="Biblioteca institucional con acceso directo a políticas, reportes y herramientas de gestión."
      />

      <div className="resource-grid mt-12">
        {featuredResource && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="resource-card resource-card-feature"
          >
            <div className="resource-media">
              {featuredResource.image?.url ? (
                <ContentImage
                  image={featuredResource.image}
                  fallbackAlt={featuredResource.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="resource-media-fallback bg-gray-100">
                  <Files size={42} className="text-gray-400" />
                </div>
              )}
            </div>

            <div className="resource-body">
              <span className="detail-chip">{featuredResource.category}</span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-gray-900">
                {featuredResource.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-gray-600">
                {featuredResource.description}
              </p>
              {resourceActionUrl(featuredResource) ? (
                <a
                  href={resourceActionUrl(featuredResource)}
                  target={featuredResource.external ? "_blank" : undefined}
                  rel={featuredResource.external ? "noreferrer" : undefined}
                  className="primary-button mt-7"
                >
                  {featuredResource.ctaLabel}
                  <SquareArrowOutUpRight size={16} />
                </a>
              ) : (
                <p className="mt-6 text-sm text-gray-500">
                  Carga un enlace o archivo desde el CMS.
                </p>
              )}
            </div>
          </motion.article>
        )}

        {remainingResources.map((resource, index) => {
          const Icon = iconMap[resource.icon as keyof typeof iconMap] ?? Files;

          return (
            <motion.article
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="resource-card"
            >
              <div className="resource-card-top">
                {resource.image?.url ? (
                  <ContentImage
                    image={resource.image}
                    fallbackAlt={resource.title}
                    className="h-32 w-full rounded-[1rem] object-cover"
                  />
                ) : (
                  <div className="resource-icon-box">
                    <Icon size={24} />
                  </div>
                )}
                <span className="detail-chip">{resource.category}</span>
              </div>

              <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.03em] text-gray-900">
                {resource.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                {resource.description}
              </p>
              {resourceActionUrl(resource) ? (
                <a
                  href={resourceActionUrl(resource)}
                  target={resource.external ? "_blank" : undefined}
                  rel={resource.external ? "noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  {resource.ctaLabel}
                  <SquareArrowOutUpRight size={15} />
                </a>
              ) : (
                <p className="mt-6 text-sm text-gray-500">Carga un enlace o archivo.</p>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
