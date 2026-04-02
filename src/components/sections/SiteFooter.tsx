"use client";
import React from "react";
import type { SiteContent } from "@/lib/site-content";

export function SiteFooter({ footer }: { footer: SiteContent["footer"] }) {
  return (
    <footer className="page-shell mt-10 border-t border-gray-200 py-8 text-sm text-gray-500">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>{footer.copy}</p>
        <div className="flex flex-wrap gap-4">
          {footer.links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-gray-900 font-medium">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
