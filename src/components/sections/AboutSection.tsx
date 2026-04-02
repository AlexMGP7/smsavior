"use client";
import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentImage } from "@/components/ui/ContentImage";
import type { SiteContent } from "@/lib/site-content";

export function AboutSection({ content }: { content: SiteContent["about"] }) {
  return (
    <section id="sobre" className="page-shell section-space">
      <SectionHeader
        eyebrow="Arquitectura SMS"
        title={content.title}
        description={content.description}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="editorial-panel"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="section-label">Misión</p>
              <p className="mt-5 text-base leading-8 text-gray-700">
                {content.mission}
              </p>
            </div>
            <div>
              <p className="section-label">Visión</p>
              <p className="mt-5 text-base leading-8 text-gray-700">
                {content.vision}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {content.pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="lux-card"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <Sparkles size={16} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.03em] text-gray-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{pillar.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.article>

        <div className="grid gap-5">
          <motion.article
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="media-panel relative"
          >
            {content.sectionImage?.url ? (
              <ContentImage
                image={content.sectionImage}
                fallbackAlt="Imagen institucional del bloque sobre SMS"
                className="h-full min-h-[340px] w-full object-cover"
              />
            ) : (
              <div className="media-panel-fallback bg-gray-100">
                <div className="relative p-8 w-full">
                  <p className="section-label">Manual visual</p>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.05em] text-gray-900">
                    Seguridad operacional.
                  </h3>
                  <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600">
                    Sube una foto en el CMS para dar vida a esta sección.
                  </p>
                </div>
              </div>
            )}
          </motion.article>

          {content.highlights.map((highlight, index) => (
            <motion.article
              key={highlight.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="callout-card"
            >
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-gray-500 font-semibold">
                {highlight.eyebrow}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-gray-900">
                {highlight.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{highlight.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
