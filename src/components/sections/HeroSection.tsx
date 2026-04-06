"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Radar } from "lucide-react";
import { motion } from "framer-motion";
import { ContentImage } from "@/components/ui/ContentImage";
import { withBasePath } from "@/lib/site-paths";
import type { SiteContent } from "@/lib/site-content";

export function HeroSection({
  content,
  logoImage,
  headerLogoAlt,
}: {
  content: SiteContent["hero"];
  logoImage?: { url?: string; alt?: string };
  headerLogoAlt: string;
}) {
  const logoPath = withBasePath("/logo-sms-avior.png");
  const heroHighlights = content.focusAreas.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="inicio" className="page-shell section-space hero-grid">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="hero-copy">
          <motion.div variants={itemVariants} className="eyebrow-badge">
            <Radar size={15} />
            {content.eyebrow}
          </motion.div>
          <motion.h1 variants={itemVariants} className="headline-giant mt-7">
            {content.title}
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-summary mt-7">
            {content.description}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={content.primaryCta.href} className="primary-button">
              {content.primaryCta.label}
              <ArrowRight size={18} />
            </a>
            <a href={content.secondaryCta.href} className="secondary-button">
              {content.secondaryCta.label}
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="stat-grid mt-10">
            {content.stats.map((stat) => (
              <motion.article
                key={stat.label}
                variants={itemVariants}
                className="stat-tile"
              >
                <p className="text-3xl font-semibold tracking-[-0.04em] text-gray-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">{stat.label}</p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="hero-ribbon mt-10">
            <span>Consulta pública</span>
            <span>Actualización simple</span>
            <span>Ritmo institucional</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-visual"
      >
        <div className="hero-visual-shell">
          {content.heroImage?.url ? (
            <ContentImage
              image={content.heroImage}
              fallbackAlt="Imagen principal del sitio SMS"
              className="hero-photo"
            />
          ) : (
            <div className="hero-photo hero-photo-fallback">
              <div className="hero-fallback-brand">
                {logoImage?.url ? (
                  <ContentImage
                    image={logoImage}
                    fallbackAlt={headerLogoAlt}
                    className="h-40 w-40 object-contain"
                  />
                ) : (
                  <Image
                    src={logoPath}
                    alt={headerLogoAlt}
                    width={220}
                    height={220}
                    className="h-40 w-40 object-contain drop-shadow-xl"
                  />
                )}
                <p className="mt-6 max-w-xs text-center text-sm uppercase tracking-[0.28em] text-gray-600 font-semibold">
                  Plataforma editorial
                </p>
              </div>
            </div>
          )}

          <div className="hero-scrim" />

          <article className="hero-float hero-float-top">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-red-600 font-bold">
              Estado del sitio
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.04em] text-gray-900">
              Operativo
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Hero visual, recursos con portada, actividades con evidencia y acceso administrativo.
            </p>
          </article>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {heroHighlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="feature-strip"
            >
              <p className="section-label">{item.kicker}</p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.04em] text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.aside>
    </section>
  );
}
