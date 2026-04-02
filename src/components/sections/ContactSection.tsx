"use client";
import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { SiteContent } from "@/lib/site-content";
import { withBasePath } from "@/lib/site-paths";

export function ContactSection({ contact }: { contact: SiteContent["contact"] }) {
  const adminPath = withBasePath("/admin/");

  return (
    <section id="contacto" className="page-shell section-space">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="contact-band"
      >
        <div>
          <p className="section-label">Coordinación</p>
          <h2 className="section-title mt-5 text-gray-900">{contact.title}</h2>
          <p className="section-copy mt-5 max-w-2xl">{contact.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={adminPath} className="primary-button">
              Abrir panel administrativo
              <SquareArrowOutUpRight size={16} />
            </a>
            <a href="#inicio" className="secondary-button">
              Volver al inicio
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {contact.channels.map((channel, index) => (
            <motion.article
              key={channel.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="contact-card border border-gray-200 bg-white rounded-2xl shadow-sm"
            >
              <p className="text-[0.72rem] uppercase tracking-[0.25em] text-gray-500 font-semibold">
                {channel.label}
              </p>
              <p className="mt-3 text-lg font-semibold text-gray-900">{channel.value}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
