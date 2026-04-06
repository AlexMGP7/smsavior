"use client";
import React from "react";
import { Flame, MapPin, Siren, SquareArrowOutUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentImage } from "@/components/ui/ContentImage";
import type { SiteContent } from "@/lib/site-content";

export function PlansSection({ plans }: { plans: SiteContent["emergencyPlans"] }) {
  const planActionUrl = (plan: SiteContent["emergencyPlans"][number]) =>
    plan.file?.url || plan.href;

  return (
    <section id="planes" className="page-shell section-space">
      <SectionHeader
        eyebrow="Respuesta y continuidad"
        title="Planes por estación"
        description="Fichas de emergencia organizadas por estación con acceso rápido a puntos clave y documentos de respuesta."
      />

      <div className="mt-12 space-y-6">
        {plans.map((plan, index) => (
          <motion.article
            key={plan.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="plan-card grid grid-cols-1 lg:grid-cols-[1fr_2fr] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="plan-media">
              {plan.image?.url ? (
                <ContentImage
                  image={plan.image}
                  fallbackAlt={plan.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="plan-media-fallback bg-gray-100 flex items-center justify-center">
                  <Siren size={38} className="text-gray-400" />
                </div>
              )}
            </div>

            <div className="plan-content p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="detail-chip detail-chip-dark">
                  <MapPin size={14} />
                  {plan.station}
                </span>
                <span className="detail-chip bg-red-100 text-red-700 border-red-200">
                  <Flame size={14} />
                  {plan.status}
                </span>
              </div>

              <h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-gray-900">
                {plan.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
                {plan.description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {plan.items.map((item) => (
                  <div key={item} className="plan-point bg-gray-50 border-gray-200 text-gray-700">
                    {item}
                  </div>
                ))}
              </div>

              {planActionUrl(plan) ? (
                <a
                  href={planActionUrl(plan)}
                  className="secondary-button mt-7"
                  target={plan.external ? "_blank" : undefined}
                  rel={plan.external ? "noreferrer" : undefined}
                >
                  {plan.file?.url
                    ? `Abrir ${plan.file.originalFilename ?? "archivo"}`
                    : "Ver documento principal"}
                  <SquareArrowOutUpRight size={16} />
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
