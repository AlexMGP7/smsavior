"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { ContentImage } from "@/components/ui/ContentImage";
import { withBasePath } from "@/lib/site-paths";

export function SiteHeader({
  logoImage,
  headerLogoAlt,
}: {
  logoImage?: { url?: string; alt?: string };
  headerLogoAlt: string;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoPath = withBasePath("/logo-sms-avior.png");

  const navLinks = [
    ["Sobre SMS", "#sobre"],
    ["Recursos", "#recursos"],
    ["Planes", "#planes"],
    ["Actividades", "#actividades"],
    ["Indicadores", "#indicadores"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-2xl shadow-sm">
      <div className="page-shell flex items-center justify-between gap-4 py-4 md:gap-6">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          {logoImage?.url ? (
            <ContentImage
              image={logoImage}
              fallbackAlt={headerLogoAlt}
              className="h-10 w-10 shrink-0 rounded-xl object-cover ring-1 ring-gray-200 md:h-12 md:w-12 md:rounded-2xl"
            />
          ) : (
            <Image
              src={logoPath}
              alt={headerLogoAlt}
              width={88}
              height={88}
              className="h-10 w-10 shrink-0 rounded-xl object-cover ring-1 ring-gray-200 md:h-12 md:w-12 md:rounded-2xl"
              priority
            />
          )}
          <div className="min-w-0">
            <p className="truncate font-[family-name:var(--font-display)] text-sm font-semibold tracking-[-0.02em] text-gray-900 md:text-base">
              SMS Avior Airlines
            </p>
            <p className="hidden truncate text-sm text-gray-500 md:block">
              Seguridad operacional visible y administrable
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 rounded-full border border-gray-200 bg-gray-50 p-1 text-sm xl:flex">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} className="nav-pill">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a href="#contacto" className="primary-button hidden md:inline-flex">
            Coordinación SMS
            <ArrowRight size={16} />
          </a>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 xl:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-2 flex items-center justify-between rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Coordinación SMS
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
