"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import { ContentImage } from "@/components/ui/ContentImage";
import { withBasePath } from "@/lib/site-paths";

export function SiteHeader({
  logoImage,
  headerLogoAlt,
}: {
  logoImage?: { url?: string; alt?: string };
  headerLogoAlt: string;
}) {
  const logoPath = withBasePath("/logo-sms-avior.png");
  const adminPath = withBasePath("/admin/");

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-2xl shadow-sm">
      <div className="page-shell flex items-center justify-between gap-6 py-4">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          {logoImage?.url ? (
            <ContentImage
              image={logoImage}
              fallbackAlt={headerLogoAlt}
              className="h-12 w-12 rounded-2xl object-cover ring-1 ring-gray-200"
            />
          ) : (
            <Image
              src={logoPath}
              alt={headerLogoAlt}
              width={88}
              height={88}
              className="h-12 w-12 rounded-2xl object-cover ring-1 ring-gray-200"
              priority
            />
          )}
          <div className="min-w-0">
            <p className="truncate font-[family-name:var(--font-display)] text-base font-semibold tracking-[-0.02em] text-gray-900">
              SMS Avior Airlines
            </p>
            <p className="truncate text-sm text-gray-500">
              Seguridad operacional visible y administrable
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-gray-200 bg-gray-50 p-1 text-sm xl:flex">
          {[
            ["Sobre SMS", "#sobre"],
            ["Recursos", "#recursos"],
            ["Planes", "#planes"],
            ["Actividades", "#actividades"],
            ["Indicadores", "#indicadores"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="nav-pill">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={adminPath} className="hidden secondary-button lg:inline-flex">
            CMS
            <SquareArrowOutUpRight size={16} />
          </a>
          <a href="#contacto" className="primary-button">
            Coordinación SMS
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
