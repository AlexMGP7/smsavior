"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentImage } from "@/components/ui/ContentImage";
import type { SiteContent } from "@/lib/site-content";

export function ActivitiesSection({ activities }: { activities: SiteContent["activities"] }) {
  return (
    <section id="actividades" className="page-shell section-space">
      <SectionHeader
        eyebrow="Bitácora institucional"
        title="Actividades y evidencias"
        description="Registro cronológico de la gestión de seguridad operacional."
      />

      <div className="activity-grid mt-12">
        {activities.map((activity, index) => (
          <motion.article
            key={activity.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`activity-card border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow ${
              index === 0 ? "activity-card-feature" : ""
            }`}
          >
            <div className="activity-media">
              {activity.image?.url ? (
                <ContentImage
                  image={activity.image}
                  fallbackAlt={activity.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gray-200" />
              )}
              <div className="activity-overlay bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="activity-topline">
                <span className="detail-chip bg-white/20 text-white border-white/30 backdrop-blur-md">
                  {activity.station}
                </span>
                <span className="text-sm font-medium text-white drop-shadow-md">
                  {activity.date}
                </span>
              </div>
              <div className="activity-headline">
                <p className="text-[0.72rem] uppercase tracking-[0.26em] text-gray-200 font-bold">
                  {activity.category}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-white">
                  {activity.title}
                </h3>
              </div>
            </div>

            <div className="activity-copy p-6">
              <p className="text-sm leading-7 text-gray-600">{activity.description}</p>
              <p className="mt-5 text-sm font-semibold text-red-600">{activity.outcome}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
