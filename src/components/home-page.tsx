/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {
  ArrowRight,
  ChartColumnIncreasing,
  Files,
  Flame,
  MapPin,
  ShieldCheck,
  Siren,
  SquareArrowOutUpRight,
} from "lucide-react";
import type { SiteContent } from "@/lib/site-content";
import { withBasePath } from "@/lib/site-paths";

const iconMap = {
  report: Files,
  policy: ShieldCheck,
  glossary: ChartColumnIncreasing,
  emergency: Siren,
  change: ArrowRight,
};

type HomePageProps = {
  content: SiteContent;
};

function ContentImage({
  image,
  className,
  fallbackAlt,
}: {
  image?: { url?: string; alt?: string };
  className: string;
  fallbackAlt: string;
}) {
  if (!image?.url) {
    return null;
  }

  return (
    <img
      src={image.url}
      alt={image.alt || fallbackAlt}
      className={className}
      loading="lazy"
    />
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="section-label">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      <p className="section-copy mt-5">{description}</p>
    </div>
  );
}

export function HomePage({ content }: HomePageProps) {
  const logoPath = withBasePath("/logo-sms-avior.png");
  const adminPath = withBasePath("/admin/");
  const logoImage = content.branding.logo;
  const headerLogoAlt = logoImage?.alt || "Logo SMS Avior Airlines";
  const heroActionUrl = (resource: SiteContent["resources"][number]) =>
    resource.file?.url || resource.href;
  const planActionUrl = (plan: SiteContent["emergencyPlans"][number]) =>
    plan.file?.url || plan.href;

  return (
    <main className="pb-20">
      <header className="sticky top-0 z-30 border-b border-white/8 bg-black/45 backdrop-blur-xl">
        <div className="page-shell flex items-center justify-between gap-6 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            {logoImage?.url ? (
              <ContentImage
                image={logoImage}
                fallbackAlt={headerLogoAlt}
                className="h-11 w-11 rounded-xl object-cover ring-1 ring-white/10"
              />
            ) : (
              <Image
                src={logoPath}
                alt={headerLogoAlt}
                width={80}
                height={80}
                className="h-11 w-11 rounded-xl object-cover ring-1 ring-white/10"
                priority
              />
            )}
            <div>
              <p className="font-[family-name:var(--font-display)] text-base font-semibold">
                SMS Avior Airlines
              </p>
              <p className="text-sm text-white/55">
                Sistema de Gestión de la Seguridad Operacional
              </p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 lg:flex">
            <a href="#sobre">Sobre SMS</a>
            <a href="#recursos">Recursos</a>
            <a href="#planes">Planes</a>
            <a href="#actividades">Actividades</a>
            <a href="#indicadores">Indicadores</a>
          </nav>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white transition hover:bg-white/14"
          >
            Coordinación SMS
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section id="inicio" className="page-shell grid gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 px-7 py-8 sm:px-10 sm:py-12">
          <div className="absolute inset-0 soft-grid opacity-15" />
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#ef1b1f]/20 blur-3xl" />
          <div className="relative">
            <p className="section-label">{content.hero.eyebrow}</p>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,6.5rem)] leading-[0.88] tracking-[-0.06em]">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              {content.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={content.hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ef1b1f] px-6 py-3.5 font-medium text-white transition hover:bg-[#ff2b2f]"
              >
                {content.hero.primaryCta.label}
                <ArrowRight size={18} />
              </a>
              <a
                href={content.hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3.5 font-medium text-white transition hover:bg-white/12"
              >
                {content.hero.secondaryCta.label}
              </a>
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {content.hero.stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/8 bg-white/8 p-4"
                >
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <aside className="surface-card rounded-[2rem] p-7 sm:p-8">
          {content.hero.heroImage?.url ? (
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/30">
              <ContentImage
                image={content.hero.heroImage}
                fallbackAlt="Imagen principal del sitio SMS"
                className="h-56 w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-black/35 p-3 ring-1 ring-white/10">
                {logoImage?.url ? (
                  <ContentImage
                    image={logoImage}
                    fallbackAlt={headerLogoAlt}
                    className="h-16 w-16 object-cover"
                  />
                ) : (
                  <Image
                    src={logoPath}
                    alt="Identidad SMS Avior"
                    width={88}
                    height={88}
                    className="h-16 w-16 object-cover"
                  />
                )}
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-white/45">
                  Gestión SMS
                </p>
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                  Avior Airlines
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 space-y-4">
            {content.hero.focusAreas.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.35rem] border border-white/8 bg-black/25 p-4"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[#ff7a7d]">
                  {item.kicker}
                </p>
                <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-white/6 p-5">
            <p className="text-sm text-white/65">
              {content.hero.adminNote}
            </p>
            <a
              href={adminPath}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              Ir al panel administrativo
              <SquareArrowOutUpRight size={16} />
            </a>
          </div>
        </aside>
      </section>

      <section id="sobre" className="page-shell py-10 lg:py-16">
        <SectionHeader
          eyebrow="Sobre SMS"
          title={content.about.title}
          description={content.about.description}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="surface-card rounded-[2rem] p-7 sm:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="section-label">Misión</p>
                <p className="mt-4 text-base leading-8 text-white/76">
                  {content.about.mission}
                </p>
              </div>
              <div>
                <p className="section-label">Visión</p>
                <p className="mt-4 text-base leading-8 text-white/76">
                  {content.about.vision}
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {content.about.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[1.3rem] border border-white/8 bg-black/20 p-4"
                >
                  <p className="font-[family-name:var(--font-display)] text-lg font-semibold">
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-5">
            {content.about.sectionImage?.url ? (
              <article className="overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/6">
                <ContentImage
                  image={content.about.sectionImage}
                  fallbackAlt="Imagen de la sección sobre SMS"
                  className="h-60 w-full object-cover"
                />
              </article>
            ) : null}
            {content.about.highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-[1.75rem] border border-white/8 bg-white/6 p-6"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                  {highlight.eyebrow}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="recursos" className="page-shell py-10 lg:py-16">
        <SectionHeader
          eyebrow="Recursos"
          title="Accesos clave para la gestión SMS"
          description="Esta sección replica la lógica del sitio de referencia, pero llevada a una estructura más clara y administrable desde el CMS."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.resources.map((resource) => {
            const Icon = iconMap[resource.icon] ?? Files;
            const resourceActionUrl = heroActionUrl(resource);

            return (
              <article
                key={resource.title}
                className="surface-card flex h-full flex-col overflow-hidden rounded-[1.75rem]"
              >
                {resource.image?.url ? (
                  <ContentImage
                    image={resource.image}
                    fallbackAlt={resource.title}
                    className="h-44 w-full object-cover"
                  />
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-2xl bg-[#ef1b1f]/12 p-3 text-[#ff7a7d]">
                      <Icon size={24} />
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/42">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold">
                    {resource.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-white/64">
                    {resource.description}
                  </p>
                  {resourceActionUrl ? (
                  <a
                    href={resourceActionUrl}
                    target={resource.external ? "_blank" : undefined}
                    rel={resource.external ? "noreferrer" : undefined}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white"
                  >
                    {resource.ctaLabel}
                    {resource.file?.url ? (
                      <span className="rounded-full border border-white/12 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-white/48">
                        Archivo
                      </span>
                    ) : null}
                    <SquareArrowOutUpRight size={15} />
                  </a>
                ) : (
                  <p className="mt-5 text-sm text-white/38">
                    Cargue un enlace o archivo desde el CMS.
                  </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="planes" className="page-shell py-10 lg:py-16">
        <SectionHeader
          eyebrow="Planes y sedes"
          title="Respuesta ante emergencias por estación"
          description="Cada plan puede administrarse de forma independiente con su responsable, estado, documento principal y notas de actualización."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {content.emergencyPlans.map((plan) => (
            <article
              key={plan.title}
              className="relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-black/26 p-7"
            >
              <div className="absolute right-[-24px] top-[-24px] rounded-full bg-[#ef1b1f]/14 p-10 blur-2xl" />
              <div className="relative">
                {plan.image?.url ? (
                  <div className="mb-6 overflow-hidden rounded-[1.4rem] border border-white/10">
                    <ContentImage
                      image={plan.image}
                      fallbackAlt={plan.title}
                      className="h-44 w-full object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-1">
                    <MapPin size={14} />
                    {plan.station}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#ef1b1f]/30 bg-[#ef1b1f]/10 px-3 py-1 text-[#ff9a9c]">
                    <Flame size={14} />
                    {plan.status}
                  </span>
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold">
                  {plan.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/66">
                  {plan.description}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {plan.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.2rem] border border-white/8 bg-white/6 px-4 py-3 text-sm text-white/78"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                {planActionUrl(plan) ? (
                  <a
                    href={planActionUrl(plan)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white"
                    target={plan.external ? "_blank" : undefined}
                    rel={plan.external ? "noreferrer" : undefined}
                  >
                    {plan.file?.url
                      ? `Abrir ${plan.file.originalFilename ?? "archivo del plan"}`
                      : "Ver documento principal"}
                    <SquareArrowOutUpRight size={16} />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="actividades" className="page-shell py-10 lg:py-16">
        <SectionHeader
          eyebrow="Actividades"
          title="Cronología de evidencias y promoción"
          description="Pensado para que tu papá agregue actividades nuevas como si llenara una ficha: título, estación, fecha, texto e imagen."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.activities.map((activity) => (
            <article
              key={activity.title}
              className="surface-card flex flex-col overflow-hidden rounded-[1.75rem]"
            >
              <div
                className={
                  activity.image?.url
                    ? "relative h-52 overflow-hidden"
                    : "h-48 bg-[radial-gradient(circle_at_top_left,_rgba(239,27,31,0.58),_transparent_36%),linear-gradient(135deg,_rgba(255,255,255,0.14),_rgba(255,255,255,0.03))] p-6"
                }
              >
                {activity.image?.url ? (
                  <>
                    <ContentImage
                      image={activity.image}
                      fallbackAlt={activity.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/20 p-6" />
                  </>
                ) : null}
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/12 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/70">
                      {activity.station}
                    </span>
                    <span className="text-sm text-white/70">{activity.date}</span>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-white/65">
                      {activity.category}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold">
                      {activity.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm leading-7 text-white/66">
                  {activity.description}
                </p>
                <p className="mt-4 text-sm font-medium text-[#ff9a9c]">
                  {activity.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="indicadores" className="page-shell py-10 lg:py-16">
        <SectionHeader
          eyebrow="Indicadores"
          title="Seguimiento visual de metas SMS"
          description="Basado en los componentes del modelo del sitio de referencia, pero presentado de forma más clara para lectura rápida."
        />
        <div className="mt-10 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[1.85rem] border border-white/10 bg-white/6 p-7">
            <p className="section-label">Resumen 2026</p>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold">
              {content.metricsSummary.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-white/66">
              {content.metricsSummary.description}
            </p>
          </aside>
          <div className="space-y-4">
            {content.metrics.map((metric) => (
              <article
                key={metric.title}
                className="rounded-[1.5rem] border border-white/8 bg-black/25 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-white">{metric.title}</p>
                    <p className="mt-1 text-sm text-white/55">{metric.description}</p>
                  </div>
                  <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#ff9a9c]">
                    {metric.value}%
                  </span>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#ef1b1f,#ff7a7d)]"
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="page-shell py-10 lg:py-16">
        <div className="surface-card grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
          <div>
            <p className="section-label">Coordinación</p>
            <h2 className="section-title mt-4">{content.contact.title}</h2>
            <p className="section-copy mt-5">{content.contact.description}</p>
          </div>
          <div className="grid gap-4">
            {content.contact.channels.map((channel) => (
              <article
                key={channel.label}
                className="rounded-[1.3rem] border border-white/8 bg-black/25 p-4"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-white/42">
                  {channel.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{channel.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="page-shell mt-12 border-t border-white/8 py-8 text-sm text-white/45">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>{content.footer.copy}</p>
          <div className="flex flex-wrap gap-4">
            {content.footer.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
