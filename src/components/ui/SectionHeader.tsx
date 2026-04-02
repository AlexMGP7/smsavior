"use client";
import React from "react";
import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <p className="section-label">{eyebrow}</p>
      <h2 className="section-title mt-5">{title}</h2>
      <p className="section-copy mt-5">{description}</p>
    </motion.div>
  );
}
