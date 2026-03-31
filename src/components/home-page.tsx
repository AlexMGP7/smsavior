/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {
  ArrowRight,
  ChartColumnIncreasing,
  Files,
  Flame,
  MapPin,
  Radar,
  ShieldCheck,
  Siren,
  Sparkles,
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
  if (!image?.url) return null;

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
    <div className="max-w-3xl fade-up">
      <p className="section-label">{eyebrow}</p>
      <h2 className="section-title mt-5">{title}</h2>
      <p className="section-copy mt-5">{description}</p>
    </div>
  );
}

export function HomePage({ content }: HomePageProps) {
  const logoPath = withBasePath("/logo-sms-avior.png");
  const adminPath = withBasePath("/admin/");
  const logoImage = content.branding.logo;
  const headerLogoAlt = logoImage?.alt || "Logo SMS Avior Airlines";
  const resourceActionUrl = (resource: SiteContent["resources"][number]) =>
    resource.file?.url || resource.href;
  const planActionUrl = (plan: SiteContent["emergencyPlans"][number]) =>
    plan.file?.url || plan.href;
  const heroHighlights = content.hero.focusAreas.slice(0, 3);
  const featuredResource = content.resources[0];
  const remainingResources = content.resources.slice(1);

  return (
    <main className="site-stage pb-20">
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#09090bcc]/80 backdrop-blur-2xl">
        <div className="page-shell flex items-center justify-between gap-6 py-4">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            {logoImage?.url ? (
              <ContentImage
                image={logoImage}
                fallbackAlt={headerLogoAlt}
                className="h-12 w-12 rounded-2xl object-cover ring-1 ring-white/12"
              />
            ) : (
              <Image
                src={logoPath}
                alt={headerLogoAlt}
                width={88}
                height={88}
                className="h-12 w-12 rounded-2xl object-cover ring-1 ring-white/12"
                priority
              />
            )}
            <div className="min-w-0">
              <p className="truncate font-[family-name:var(--font-display)] text-base font-semibold tracking-[-0.02em]">
                SMS Avior Airlines
              </p>
              <p className="truncate text-sm text-white/52">
                Seguridad operacional visible y administrable
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-white/78 xl:flex">
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

      <section id="inicio" className="page-shell section-space hero-grid">
        <div className="fade-up">
          <div className="hero-copy">
            <div className="eyebrow-badge">
              <Radar size={15} />
              {content.hero.eyebrow}
            </div>
            <h1 className="headline-giant mt-7">{content.hero.title}</h1>
            <p className="hero-summary mt-7">{content.hero.description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={content.hero.primaryCta.href} className="primary-button">
                {content.hero.primaryCta.label}
                <ArrowRight size={18} />
              </a>
              <a href={content.hero.secondaryCta.href} className="secondary-button">
                {content.hero.secondaryCta.label}
              </a>
            </div>

            <div className="stat-grid mt-10">
              {content.hero.stats.map((stat, index) => (
                <article
                  key={stat.label}
                  className="stat-tile fade-up"
                  style={{ animationDelay: `${160 + index * 90}ms` }}
                >
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/58">{stat.label}</p>
                </article>
              ))}
            </div>

            <div className="hero-ribbon mt-10 fade-up" style={{ animationDelay: "320ms" }}>
              <span>Consulta pública</span>
              <span>Actualización simple</span>
              <span>Ritmo institucional</span>
            </div>
          </div>
        </div>

        <aside className="hero-visual fade-up" style={{ animationDelay: "180ms" }}>
          <div className="hero-visual-shell">
            {content.hero.heroImage?.url ? (
              <ContentImage
                image={content.hero.heroImage}
                fallbackAlt="Imagen principal del sitio SMS"
                className="hero-photo"
              />
            ) : (
              <div className="hero-photo hero-photo-fallback">
                <div className="hero-orb hero-orb-one" />
                <div className="hero-orb hero-orb-two" />
                <div className="hero-runway" />
                <div className="hero-fallback-brand">
                  {logoImage?.url ? (
                    <ContentImage
                      image={logoImage}
                      fallbackAlt={headerLogoAlt}
                      className="h-40 w-40 object-contain drop-shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
                    />
                  ) : (
                    <Image
                      src={logoPath}
                      alt={headerLogoAlt}
                      width={220}
                      height={220}
                      className="h-40 w-40 object-contain drop-shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
                    />
                  )}
                  <p className="mt-6 max-w-xs text-center text-sm uppercase tracking-[0.28em] text-white/56">
                    Plataforma editorial para seguridad operacional
                  </p>
                </div>
              </div>
            )}

            <div className="hero-scrim" />

            <article className="hero-float hero-float-top">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#ff9b9d]">
                Estado del sitio
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">
                Operativo para consulta y actualización
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/62">
                Hero visual, recursos con portada, actividades con evidencia y acceso administrativo.
              </p>
            </article>

            <article className="hero-float hero-float-bottom">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/48">
                Panel editorial
              </p>
              <p className="mt-3 text-sm leading-6 text-white/68">{content.hero.adminNote}</p>
              <a href={adminPath} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white">
                Abrir administración
                <SquareArrowOutUpRight size={15} />
              </a>
            </article>
          </div>

          <div className="hero-focus-grid">
            {heroHighlights.map((item, index) => (
              <article
                key={item.title}
                className="feature-strip fade-up"
                style={{ animationDelay: `${260 + index * 80}ms` }}
              >
                <p className="section-label">{item.kicker}</p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.description}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section id="sobre" className="page-shell section-space">
        <SectionHeader
          eyebrow="Arquitectura SMS"
          title={content.about.title}
          description={content.about.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="editorial-panel fade-up">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="section-label">Misión</p>
                <p className="mt-5 text-base leading-8 text-white/78">
                  {content.about.mission}
                </p>
              </div>
              <div>
                <p className="section-label">Visión</p>
                <p className="mt-5 text-base leading-8 text-white/78">
                  {content.about.vision}
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {content.about.pillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="lux-card fade-up"
                  style={{ animationDelay: `${100 + index * 90}ms` }}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#ff8d90]/30 bg-[#ef1b1f]/12 text-[#ff8d90]">
                    <Sparkles size={16} />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.03em]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{pillar.description}</p>
                </article>
              ))}
            </div>
          </article>

          <div className="grid gap-5">
            <article className="media-panel fade-up" style={{ animationDelay: "120ms" }}>
              {content.about.sectionImage?.url ? (
                <ContentImage
                  image={content.about.sectionImage}
                  fallbackAlt="Imagen institucional del bloque sobre SMS"
                  className="h-full min-h-[340px] w-full object-cover"
                />
              ) : (
                <div className="media-panel-fallback">
                  <div className="soft-grid absolute inset-0 opacity-10" />
                  <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-[#ef1b1f]/25 blur-3xl" />
                  <div className="relative p-8">
                    <p className="section-label">Manual visual</p>
                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.05em]">
                      Seguridad operacional con presencia editorial.
                    </h3>
                    <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
                      Cuando subas una foto en el CMS, este bloque se convierte en la pieza visual de la sección.
                    </p>
                  </div>
                </div>
              )}
            </article>

            {content.about.highlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className="callout-card fade-up"
                style={{ animationDelay: `${180 + index * 80}ms` }}
              >
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/44">
                  {highlight.eyebrow}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/63">{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="recursos" className="page-shell section-space">
        <SectionHeader
          eyebrow="Biblioteca de trabajo"
          title="Recursos SMS con más presencia visual y acceso directo"
          description="La sección deja de parecer una lista plana y pasa a comportarse como una biblioteca institucional: portada, jerarquía, categoría y acción clara."
        />

        <div className="resource-grid mt-12">
          {featuredResource ? (
            <article className="resource-card resource-card-feature fade-up">
              <div className="resource-media">
                {featuredResource.image?.url ? (
                  <ContentImage
                    image={featuredResource.image}
                    fallbackAlt={featuredResource.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="resource-media-fallback">
                    <Files size={42} />
                  </div>
                )}
                <div className="resource-media-overlay" />
              </div>

              <div className="resource-body">
                <span className="detail-chip">{featuredResource.category}</span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.05em]">
                  {featuredResource.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/64">
                  {featuredResource.description}
                </p>
                {resourceActionUrl(featuredResource) ? (
                  <a
                    href={resourceActionUrl(featuredResource)}
                    target={featuredResource.external ? "_blank" : undefined}
                    rel={featuredResource.external ? "noreferrer" : undefined}
                    className="primary-button mt-7"
                  >
                    {featuredResource.ctaLabel}
                    <SquareArrowOutUpRight size={16} />
                  </a>
                ) : (
                  <p className="mt-6 text-sm text-white/38">
                    Carga un enlace o archivo desde el CMS.
                  </p>
                )}
              </div>
            </article>
          ) : null}

          {remainingResources.map((resource, index) => {
            const Icon = iconMap[resource.icon] ?? Files;

            return (
              <article
                key={resource.title}
                className="resource-card fade-up"
                style={{ animationDelay: `${120 + index * 70}ms` }}
              >
                <div className="resource-card-top">
                  {resource.image?.url ? (
                    <ContentImage
                      image={resource.image}
                      fallbackAlt={resource.title}
                      className="h-44 w-full rounded-[1.3rem] object-cover"
                    />
                  ) : (
                    <div className="resource-icon-box">
                      <Icon size={24} />
                    </div>
                  )}
                  <span className="detail-chip">{resource.category}</span>
                </div>

                <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">
                  {resource.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-white/62">
                  {resource.description}
                </p>
                {resourceActionUrl(resource) ? (
                  <a
                    href={resourceActionUrl(resource)}
                    target={resource.external ? "_blank" : undefined}
                    rel={resource.external ? "noreferrer" : undefined}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white"
                  >
                    {resource.ctaLabel}
                    <SquareArrowOutUpRight size={15} />
                  </a>
                ) : (
                  <p className="mt-6 text-sm text-white/38">Carga un enlace o archivo.</p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section id="planes" className="page-shell section-space">
        <SectionHeader
          eyebrow="Respuesta y continuidad"
          title="Planes por estación con una lectura más operacional"
          description="Cada estación se presenta como una ficha robusta: identidad visible, estado, puntos clave y un documento principal accesible desde la misma tarjeta."
        />

        <div className="mt-12 space-y-5">
          {content.emergencyPlans.map((plan, index) => (
            <article
              key={plan.title}
              className="plan-card fade-up"
              style={{ animationDelay: `${120 + index * 90}ms` }}
            >
              <div className="plan-media">
                {plan.image?.url ? (
                  <ContentImage
                    image={plan.image}
                    fallbackAlt={plan.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="plan-media-fallback">
                    <Siren size={38} />
                  </div>
                )}
              </div>

              <div className="plan-content">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="detail-chip detail-chip-dark">
                    <MapPin size={14} />
                    {plan.station}
                  </span>
                  <span className="detail-chip">
                    <Flame size={14} />
                    {plan.status}
                  </span>
                </div>

                <h3 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.05em]">
                  {plan.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/64">
                  {plan.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {plan.items.map((item) => (
                    <div key={item} className="plan-point">
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
            </article>
          ))}
        </div>
      </section>

      <section id="actividades" className="page-shell section-space">
        <SectionHeader
          eyebrow="Bitácora institucional"
          title="Actividades y evidencias con carácter de cronología visual"
          description="La bitácora pasa a sentirse como una galería editorial: fechas claras, fotos protagonistas, categorías visibles y frases de resultado destacadas."
        />

        <div className="activity-grid mt-12">
          {content.activities.map((activity, index) => (
            <article
              key={activity.title}
              className={`activity-card fade-up ${index === 0 ? "activity-card-feature" : ""}`}
              style={{ animationDelay: `${110 + index * 75}ms` }}
            >
              <div className="activity-media">
                {activity.image?.url ? (
                  <ContentImage
                    image={activity.image}
                    fallbackAlt={activity.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="activity-fallback">
                    <div className="soft-grid absolute inset-0 opacity-10" />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                )}
                <div className="activity-overlay" />
                <div className="activity-topline">
                  <span className="detail-chip detail-chip-dark">{activity.station}</span>
                  <span className="text-sm text-white/72">{activity.date}</span>
                </div>
                <div className="activity-headline">
                  <p className="text-[0.72rem] uppercase tracking-[0.26em] text-white/58">
                    {activity.category}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.05em]">
                    {activity.title}
                  </h3>
                </div>
              </div>

              <div className="activity-copy">
                <p className="text-sm leading-7 text-white/64">{activity.description}</p>
                <p className="mt-5 text-sm font-medium text-[#ff9b9d]">{activity.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="indicadores" className="page-shell section-space">
        <SectionHeader
          eyebrow="Seguimiento ejecutivo"
          title="Indicadores con una lectura más narrativa y menos plana"
          description="Se mantiene el mismo contenido, pero ahora el bloque se comporta como un cierre de gestión: resumen fuerte a la izquierda y barras premium con más aire a la derecha."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
          <aside className="summary-tower fade-up">
            <p className="section-label">Resumen 2026</p>
            <h3 className="mt-5 font-[family-name:var(--font-display)] text-5xl font-semibold tracking-[-0.06em]">
              {content.metricsSummary.title}
            </h3>
            <p className="mt-6 text-base leading-8 text-white/66">
              {content.metricsSummary.description}
            </p>

            <div className="mt-10 space-y-3">
              <div className="summary-chip">
                <ShieldCheck size={16} />
                Gobernanza visible
              </div>
              <div className="summary-chip">
                <Radar size={16} />
                Riesgo operacional
              </div>
              <div className="summary-chip">
                <Sparkles size={16} />
                Promoción continua
              </div>
            </div>
          </aside>

          <div className="space-y-4">
            {content.metrics.map((metric, index) => (
              <article
                key={metric.title}
                className="metric-card fade-up"
                style={{ animationDelay: `${120 + index * 70}ms` }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="max-w-xl">
                    <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-white">
                      {metric.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/56">{metric.description}</p>
                  </div>
                  <span className="metric-value">{metric.value}%</span>
                </div>

                <div className="progress-track mt-5">
                  <div
                    className="progress-fill"
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="page-shell section-space">
        <div className="contact-band fade-up">
          <div>
            <p className="section-label">Coordinación</p>
            <h2 className="section-title mt-5">{content.contact.title}</h2>
            <p className="section-copy mt-5 max-w-2xl">{content.contact.description}</p>
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
            {content.contact.channels.map((channel, index) => (
              <article
                key={channel.label}
                className="contact-card fade-up"
                style={{ animationDelay: `${130 + index * 70}ms` }}
              >
                <p className="text-[0.72rem] uppercase tracking-[0.25em] text-white/44">
                  {channel.label}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{channel.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="page-shell mt-10 border-t border-white/8 py-8 text-sm text-white/45">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>{content.footer.copy}</p>
          <div className="flex flex-wrap gap-4">
            {content.footer.links.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
