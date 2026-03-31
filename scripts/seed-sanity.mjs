const projectId = process.env.SANITY_PROJECT_ID ?? "j7xmosjq";
const dataset = process.env.SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("Missing SANITY_API_TOKEN");
  process.exit(1);
}

const documents = [
  {
    _id: "homepage",
    _type: "homepage",
    heroEyebrow: "Sistema de Gestión de la Seguridad Operacional",
    heroTitle: "Seguridad operacional con criterio, visibilidad y respuesta.",
    heroDescription:
      "Micrositio institucional para centralizar la cultura SMS de Avior Airlines: recursos clave, planes por estación, evidencias de actividades y seguimiento de metas.",
    primaryCtaLabel: "Explorar recursos SMS",
    primaryCtaHref: "#recursos",
    secondaryCtaLabel: "Ver planes por sede",
    secondaryCtaHref: "#planes",
    adminNote:
      "Este sitio quedó preparado para que los textos, imágenes, planes y actividades se administren desde un panel simple sin tocar código.",
    stats: [
      { _key: "stat-1", _type: "stat", value: "4", label: "componentes SMS visibles y actualizables" },
      { _key: "stat-2", _type: "stat", value: "6+", label: "módulos de contenido listos para publicar" },
      { _key: "stat-3", _type: "stat", value: "24/7", label: "consulta pública desde GitHub Pages" },
    ],
    focusAreas: [
      {
        _key: "focus-1",
        _type: "focusArea",
        kicker: "Prevención",
        title: "Identificación temprana de peligros",
        description:
          "La estructura editorial permite mantener a la vista taxonomías, políticas, reportes y acciones preventivas.",
      },
      {
        _key: "focus-2",
        _type: "focusArea",
        kicker: "Respuesta",
        title: "Planes por estación",
        description:
          "Cada sede puede publicar sus rutas, responsables, anexos y documentación crítica en una sola ficha.",
      },
      {
        _key: "focus-3",
        _type: "focusArea",
        kicker: "Cultura",
        title: "Promoción constante",
        description:
          "La sección de actividades facilita cargar evidencias, charlas, reuniones, auditorías y simulacros de forma continua.",
      },
    ],
  },
  {
    _id: "aboutSms",
    _type: "aboutSms",
    title: "Un sitio SMS pensado para consulta rápida y administración sencilla.",
    description:
      "La web toma la lógica del sitio de referencia y la reordena en una experiencia más moderna, clara y mucho más fácil de actualizar para una persona no técnica.",
    mission:
      "Mantener una operación respaldada por procesos de seguridad operacional claros, prevención de peligros, comunicación oportuna y respuesta coordinada ante contingencias.",
    vision:
      "Consolidar una cultura SMS visible, práctica y sostenible, donde las estaciones operativas y sus responsables tengan acceso ágil a información confiable y vigente.",
    pillars: [
      {
        _key: "pillar-1",
        _type: "pillar",
        title: "Política y objetivos",
        description:
          "Visibilizar lineamientos, compromisos y prioridades de seguridad operacional en un solo punto.",
      },
      {
        _key: "pillar-2",
        _type: "pillar",
        title: "Gestión del riesgo",
        description:
          "Facilitar acceso a reportes, taxonomías y acciones para la identificación y tratamiento de peligros.",
      },
      {
        _key: "pillar-3",
        _type: "pillar",
        title: "Aseguramiento y promoción",
        description:
          "Documentar actividades, simulacros, auditorías y avances para fortalecer la mejora continua.",
      },
    ],
    highlights: [
      {
        _key: "highlight-1",
        _type: "highlight",
        eyebrow: "Edición fácil",
        title: "Formulario, no código",
        description:
          "Tu papá podrá cambiar contenidos como si llenara una ficha sencilla: título, texto, botón, imagen y guardar.",
      },
      {
        _key: "highlight-2",
        _type: "highlight",
        eyebrow: "Actualización segura",
        title: "Todo organizado por bloques",
        description:
          "El panel está pensado para que no tenga que decidir estructura. Solo edita los bloques correctos y el sitio se actualiza.",
      },
      {
        _key: "highlight-3",
        _type: "highlight",
        eyebrow: "Escalable",
        title: "Listo para crecer",
        description:
          "Si más adelante quieren sumar nuevas sedes, más actividades o nuevas secciones, la base ya queda preparada.",
      },
    ],
  },
  {
    _id: "siteSettings",
    _type: "siteSettings",
    metricsSummaryTitle: "Mapa de avance por componente",
    metricsSummaryDescription:
      "Los porcentajes actuales son demostrativos y pueden editarse desde el CMS. La presentación está pensada para lectura rápida y seguimiento ejecutivo.",
    contactTitle: "Coordinación y seguimiento del sistema",
    contactDescription:
      "La información de contacto también puede administrarse desde el CMS para mantener responsables, correo y notas siempre actualizados.",
    contactChannels: [
      { _key: "channel-1", _type: "channel", label: "Responsable", value: "Coordinación SMS Avior Airlines" },
      { _key: "channel-2", _type: "channel", label: "Estado", value: "Información pública y preparada para actualización" },
      { _key: "channel-3", _type: "channel", label: "Panel", value: "CMS simplificado para edición de textos e imágenes" },
    ],
    footerCopy:
      "SMS Avior Airlines · sitio institucional preparado para publicación y administración simple.",
    footerLinks: [
      { _key: "footer-1", _type: "footerLink", label: "Inicio", href: "#inicio" },
      { _key: "footer-2", _type: "footerLink", label: "Recursos", href: "#recursos" },
      { _key: "footer-3", _type: "footerLink", label: "Planes", href: "#planes" },
      { _key: "footer-4", _type: "footerLink", label: "Actividades", href: "#actividades" },
    ],
  },
  {
    _id: "resource-report-sms",
    _type: "resourceLink",
    orderRank: 10,
    title: "Reporte SMS",
    description:
      "Acceso principal al sistema de identificación y reporte de peligros, sucesos u observaciones operacionales.",
    category: "Gestión",
    ctaLabel: "Configurar enlace",
    icon: "report",
  },
  {
    _id: "resource-taxonomia",
    _type: "resourceLink",
    orderRank: 20,
    title: "Taxonomía de peligros",
    description:
      "Biblioteca de referencia para clasificar peligros y orientar la carga correcta de información.",
    category: "Consulta",
    ctaLabel: "Configurar enlace",
    icon: "glossary",
  },
  {
    _id: "resource-politicas",
    _type: "resourceLink",
    orderRank: 30,
    title: "Políticas y objetivos SMS",
    description:
      "Documento marco con lineamientos corporativos, metas de seguridad operacional y compromisos institucionales.",
    category: "Gobernanza",
    ctaLabel: "Configurar enlace",
    icon: "policy",
  },
  {
    _id: "resource-glosario",
    _type: "resourceLink",
    orderRank: 40,
    title: "Glosario SMS",
    description:
      "Listado de términos y conceptos para consulta rápida del personal operativo y administrativo.",
    category: "Formación",
    ctaLabel: "Configurar enlace",
    icon: "glossary",
  },
  {
    _id: "resource-cambio",
    _type: "resourceLink",
    orderRank: 50,
    title: "Gestión del cambio",
    description:
      "Espacio para solicitudes, evaluación y seguimiento de cambios con impacto en la seguridad operacional.",
    category: "Proceso",
    ctaLabel: "Configurar enlace",
    icon: "change",
  },
  {
    _id: "resource-responsabilidades",
    _type: "resourceLink",
    orderRank: 60,
    title: "Responsabilidades y comité SMS",
    description:
      "Acceso consolidado a roles, responsabilidades y funcionamiento del comité SMS de la organización.",
    category: "Estructura",
    ctaLabel: "Configurar enlace",
    icon: "policy",
  },
  {
    _id: "plan-miq",
    _type: "emergencyPlan",
    orderRank: 10,
    station: "MIQ",
    status: "Disponible para actualización",
    title: "Plan de respuesta ante la emergencia",
    description:
      "Ficha pensada para agrupar contactos, rutagramas, tarjetas de acción y documentación operativa por estación.",
    items: [
      "Contactos críticos y responsables",
      "Tarjetas de acción por escenario",
      "Ruta de evacuación y anexos",
      "Fecha de última revisión",
    ],
  },
  {
    _id: "plan-lsp",
    _type: "emergencyPlan",
    orderRank: 20,
    station: "LSP",
    status: "Disponible para actualización",
    title: "Plan por estación operacional",
    description:
      "Diseñado para que cada sede tenga su propio contenido sin depender de nuevas páginas manuales o HTML sueltos.",
    items: [
      "Archivo principal o enlace externo",
      "Notas operativas de la estación",
      "Datos del coordinador local",
      "Estado de vigencia del plan",
    ],
  },
  {
    _id: "plan-vig",
    _type: "emergencyPlan",
    orderRank: 30,
    station: "VIG",
    status: "Disponible para actualización",
    title: "Respuesta coordinada y visible",
    description:
      "La idea es que la información crítica pueda abrirse rápido desde cualquier dispositivo, incluso con estructura simple y directa.",
    items: [
      "Versión publicada",
      "Responsables asignados",
      "Actualizaciones recientes",
      "Anexos descargables",
    ],
  },
  {
    _id: "plan-svz",
    _type: "emergencyPlan",
    orderRank: 40,
    station: "SVZ",
    status: "Disponible para actualización",
    title: "Mismo modelo para todas las sedes",
    description:
      "En lugar de micrositios distintos, la nueva web centraliza el modelo y deja cada estación editable como contenido.",
    items: [
      "Ficha consistente por estación",
      "Menos mantenimiento técnico",
      "Carga simple para el editor",
      "Mayor claridad para consulta pública",
    ],
  },
  {
    _id: "activity-1",
    _type: "activity",
    orderRank: 10,
    title: "Promoción del SMS",
    category: "Cultura operacional",
    station: "MIQ",
    eventDate: "2026-03-01",
    displayDate: "Marzo 2026",
    description:
      "Espacio preparado para publicar charlas, inducciones, campañas internas y acciones de sensibilización sobre seguridad operacional.",
    outcome: "Ideal para cargar evidencias con fecha e imagen.",
  },
  {
    _id: "activity-2",
    _type: "activity",
    orderRank: 20,
    title: "Simulacro de emergencia",
    category: "Entrenamiento",
    station: "LSP",
    eventDate: "2026-04-01",
    displayDate: "Abril 2026",
    description:
      "Bloque para documentar simulacros en mesa o ejercicios operacionales con su resumen, hallazgos y material visual.",
    outcome: "Se puede replicar por estación sin crear páginas nuevas.",
  },
  {
    _id: "activity-3",
    _type: "activity",
    orderRank: 30,
    title: "Revisión documental SMS",
    category: "Aseguramiento",
    station: "MIQ",
    eventDate: "2026-05-01",
    displayDate: "Mayo 2026",
    description:
      "Pensado para registrar avances, revisiones internas, auditorías o hitos de certificación con lenguaje claro y cronológico.",
    outcome: "Sirve como bitácora institucional visible.",
  },
  {
    _id: "activity-4",
    _type: "activity",
    orderRank: 40,
    title: "Auditoría interna",
    category: "Cumplimiento",
    station: "VIG",
    eventDate: "2026-06-01",
    displayDate: "Junio 2026",
    description:
      "Cada registro puede incluir descripción, estado, resultado y observaciones para preservar memoria operativa.",
    outcome: "Aporta trazabilidad sin complejidad técnica.",
  },
  {
    _id: "activity-5",
    _type: "activity",
    orderRank: 50,
    title: "Socialización de políticas",
    category: "Comunicación",
    station: "SVZ",
    eventDate: "2026-07-01",
    displayDate: "Julio 2026",
    description:
      "Útil para dejar evidencia de jornadas de inducción, difusión de políticas, responsabilidades y actualización normativa.",
    outcome: "Todo editable desde un formulario simple.",
  },
  {
    _id: "activity-6",
    _type: "activity",
    orderRank: 60,
    title: "Seguimiento de acciones",
    category: "Mejora continua",
    station: "MIQ",
    eventDate: "2026-08-01",
    displayDate: "Agosto 2026",
    description:
      "Sección preparada para mostrar acciones de seguimiento derivadas de reportes, reuniones o revisiones del comité.",
    outcome: "Mantiene visible el ciclo de mejora del SMS.",
  },
  {
    _id: "metric-1",
    _type: "metric",
    orderRank: 10,
    title: "Componente I · Política y objetivos",
    description: "Gobernanza, liderazgo y directrices visibles para toda la organización.",
    value: 72,
  },
  {
    _id: "metric-2",
    _type: "metric",
    orderRank: 20,
    title: "Componente II · Gestión del riesgo",
    description: "Identificación de peligros, evaluación y tratamiento de riesgos operacionales.",
    value: 68,
  },
  {
    _id: "metric-3",
    _type: "metric",
    orderRank: 30,
    title: "Componente III · Aseguramiento",
    description: "Seguimiento, verificación y evidencia del funcionamiento del sistema.",
    value: 74,
  },
  {
    _id: "metric-4",
    _type: "metric",
    orderRank: 40,
    title: "Componente IV · Promoción",
    description: "Capacitación, comunicación y cultura operacional sostenida.",
    value: 81,
  },
];

const body = {
  mutations: documents.map((document) => ({
    createOrReplace: document,
  })),
};

const response = await fetch(
  `https://${projectId}.api.sanity.io/v2025-02-06/data/mutate/${dataset}?returnIds=true`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  },
);

if (!response.ok) {
  console.error(await response.text());
  process.exit(1);
}

const result = await response.json();
console.log(`Seeded ${result.results.length} documents into ${projectId}/${dataset}`);
