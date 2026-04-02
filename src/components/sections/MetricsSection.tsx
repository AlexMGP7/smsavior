"use client";
import React from "react";
import { Radar, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { SiteContent } from "@/lib/site-content";

export function MetricsSection({
  metricsSummary,
  metrics,
}: {
  metricsSummary: SiteContent["metricsSummary"];
  metrics: SiteContent["metrics"];
}) {
  return (
    <section id="indicadores" className="page-shell section-space">
      <SectionHeader
        eyebrow="Seguimiento ejecutivo"
        title="Indicadores"
        description="Panel de métricas con lectura narrativa para el seguimiento de la gestión."
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="summary-tower"
        >
          <p className="section-label">Resumen 2026</p>
          <h3 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.05em] text-gray-900">
            {metricsSummary.title}
          </h3>
          <p className="mt-6 text-base leading-8 text-gray-600">
            {metricsSummary.description}
          </p>

          <div className="mt-10 space-y-3">
            <div className="summary-chip">
              <ShieldCheck size={16} className="text-red-600" />
              Gobernanza visible
            </div>
            <div className="summary-chip">
              <Radar size={16} className="text-red-600" />
              Riesgo operacional
            </div>
            <div className="summary-chip">
              <Sparkles size={16} className="text-red-600" />
              Promoción continua
            </div>
          </div>
        </motion.aside>

        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="metric-card bg-white border border-gray-200 rounded-2xl shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="max-w-xl">
                  <p className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.03em] text-gray-900">
                    {metric.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-gray-600">{metric.description}</p>
                </div>
                <span className="metric-value">{metric.value}%</span>
              </div>

              <div className="progress-track mt-5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${metric.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  className="progress-fill"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
