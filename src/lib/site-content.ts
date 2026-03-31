export type ResourceIcon = "report" | "policy" | "glossary" | "emergency" | "change";

export type MediaImage = {
  url?: string;
  alt?: string;
};

export type MediaFile = {
  url?: string;
  originalFilename?: string;
};

export type SiteContent = {
  branding: {
    logo?: MediaImage;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    adminNote: string;
    heroImage?: MediaImage;
    stats: Array<{ value: string; label: string }>;
    focusAreas: Array<{
      kicker: string;
      title: string;
      description: string;
    }>;
  };
  about: {
    title: string;
    description: string;
    mission: string;
    vision: string;
    sectionImage?: MediaImage;
    pillars: Array<{ title: string; description: string }>;
    highlights: Array<{
      eyebrow: string;
      title: string;
      description: string;
    }>;
  };
  resources: Array<{
    title: string;
    description: string;
    category: string;
    ctaLabel: string;
    href?: string;
    external?: boolean;
    icon: ResourceIcon;
    image?: MediaImage;
    file?: MediaFile;
  }>;
  emergencyPlans: Array<{
    station: string;
    status: string;
    title: string;
    description: string;
    items: string[];
    href?: string;
    external?: boolean;
    image?: MediaImage;
    file?: MediaFile;
  }>;
  activities: Array<{
    title: string;
    category: string;
    station: string;
    date: string;
    description: string;
    outcome: string;
    image?: MediaImage;
  }>;
  metricsSummary: {
    title: string;
    description: string;
  };
  metrics: Array<{
    title: string;
    description: string;
    value: number;
  }>;
  contact: {
    title: string;
    description: string;
    channels: Array<{ label: string; value: string }>;
  };
  footer: {
    copy: string;
    links: Array<{ label: string; href: string }>;
  };
};

export const defaultSiteContent: SiteContent = {
  branding: {},
  hero: {
    eyebrow: "Sistema de Gestión de la Seguridad Operacional",
    title: "Seguridad operacional con criterio, visibilidad y respuesta.",
    description:
      "Micrositio institucional para centralizar la cultura SMS de Avior Airlines: recursos clave, planes por estación, evidencias de actividades y seguimiento de metas.",
    primaryCta: {
      label: "Explorar recursos SMS",
      href: "#recursos",
    },
    secondaryCta: {
      label: "Ver planes por sede",
      href: "#planes",
    },
    adminNote:
      "Este sitio quedó preparado para que los textos, imágenes, planes y actividades se administren desde un panel simple sin tocar código.",
    heroImage: undefined,
    stats: [
      { value: "4", label: "componentes SMS visibles y actualizables" },
      { value: "6+", label: "módulos de contenido listos para publicar" },
      { value: "24/7", label: "consulta pública desde GitHub Pages" },
    ],
    focusAreas: [
      {
        kicker: "Prevención",
        title: "Identificación temprana de peligros",
        description:
          "La estructura editorial permite mantener a la vista taxonomías, políticas, reportes y acciones preventivas.",
      },
      {
        kicker: "Respuesta",
        title: "Planes por estación",
        description:
          "Cada sede puede publicar sus rutas, responsables, anexos y documentación crítica en una sola ficha.",
      },
      {
        kicker: "Cultura",
        title: "Promoción constante",
        description:
          "La sección de actividades facilita cargar evidencias, charlas, reuniones, auditorías y simulacros de forma continua.",
      },
    ],
  },
  about: {
    title: "Un sitio SMS pensado para consulta rápida y administración sencilla.",
    description:
      "La web toma la lógica del sitio de referencia y la reordena en una experiencia más moderna, clara y mucho más fácil de actualizar para una persona no técnica.",
    mission:
      "Mantener una operación respaldada por procesos de seguridad operacional claros, prevención de peligros, comunicación oportuna y respuesta coordinada ante contingencias.",
    vision:
      "Consolidar una cultura SMS visible, práctica y sostenible, donde las estaciones operativas y sus responsables tengan acceso ágil a información confiable y vigente.",
    sectionImage: undefined,
    pillars: [
      {
        title: "Política y objetivos",
        description:
          "Visibilizar lineamientos, compromisos y prioridades de seguridad operacional en un solo punto.",
      },
      {
        title: "Gestión del riesgo",
        description:
          "Facilitar acceso a reportes, taxonomías y acciones para la identificación y tratamiento de peligros.",
      },
      {
        title: "Aseguramiento y promoción",
        description:
          "Documentar actividades, simulacros, auditorías y avances para fortalecer la mejora continua.",
      },
    ],
    highlights: [
      {
        eyebrow: "Edición fácil",
        title: "Formulario, no código",
        description:
          "Tu papá podrá cambiar contenidos como si llenara una ficha sencilla: título, texto, botón, imagen y guardar.",
      },
      {
        eyebrow: "Actualización segura",
        title: "Todo organizado por bloques",
        description:
          "El panel está pensado para que no tenga que decidir estructura. Solo edita los bloques correctos y el sitio se actualiza.",
      },
      {
        eyebrow: "Escalable",
        title: "Listo para crecer",
        description:
          "Si más adelante quieren sumar nuevas sedes, más actividades o nuevas secciones, la base ya queda preparada.",
      },
    ],
  },
  resources: [
    {
      title: "Reporte SMS",
      description:
        "Acceso principal al sistema de identificación y reporte de peligros, sucesos u observaciones operacionales.",
      category: "Gestión",
      ctaLabel: "Configurar enlace",
      icon: "report",
      image: undefined,
      file: undefined,
    },
    {
      title: "Taxonomía de peligros",
      description:
        "Biblioteca de referencia para clasificar peligros y orientar la carga correcta de información.",
      category: "Consulta",
      ctaLabel: "Configurar enlace",
      icon: "glossary",
      image: undefined,
      file: undefined,
    },
    {
      title: "Políticas y objetivos SMS",
      description:
        "Documento marco con lineamientos corporativos, metas de seguridad operacional y compromisos institucionales.",
      category: "Gobernanza",
      ctaLabel: "Configurar enlace",
      icon: "policy",
      image: undefined,
      file: undefined,
    },
    {
      title: "Glosario SMS",
      description:
        "Listado de términos y conceptos para consulta rápida del personal operativo y administrativo.",
      category: "Formación",
      ctaLabel: "Configurar enlace",
      icon: "glossary",
      image: undefined,
      file: undefined,
    },
    {
      title: "Gestión del cambio",
      description:
        "Espacio para solicitudes, evaluación y seguimiento de cambios con impacto en la seguridad operacional.",
      category: "Proceso",
      ctaLabel: "Configurar enlace",
      icon: "change",
      image: undefined,
      file: undefined,
    },
    {
      title: "Responsabilidades y comité SMS",
      description:
        "Acceso consolidado a roles, responsabilidades y funcionamiento del comité SMS de la organización.",
      category: "Estructura",
      ctaLabel: "Configurar enlace",
      icon: "policy",
      image: undefined,
      file: undefined,
    },
  ],
  emergencyPlans: [
    {
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
      image: undefined,
      file: undefined,
    },
    {
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
      image: undefined,
      file: undefined,
    },
    {
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
      image: undefined,
      file: undefined,
    },
    {
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
      image: undefined,
      file: undefined,
    },
  ],
  activities: [
    {
      title: "Promoción del SMS",
      category: "Cultura operacional",
      station: "MIQ",
      date: "Marzo 2026",
      description:
        "Espacio preparado para publicar charlas, inducciones, campañas internas y acciones de sensibilización sobre seguridad operacional.",
      outcome: "Ideal para cargar evidencias con fecha e imagen.",
      image: undefined,
    },
    {
      title: "Simulacro de emergencia",
      category: "Entrenamiento",
      station: "LSP",
      date: "Abril 2026",
      description:
        "Bloque para documentar simulacros en mesa o ejercicios operacionales con su resumen, hallazgos y material visual.",
      outcome: "Se puede replicar por estación sin crear páginas nuevas.",
      image: undefined,
    },
    {
      title: "Revisión documental SMS",
      category: "Aseguramiento",
      station: "MIQ",
      date: "Mayo 2026",
      description:
        "Pensado para registrar avances, revisiones internas, auditorías o hitos de certificación con lenguaje claro y cronológico.",
      outcome: "Sirve como bitácora institucional visible.",
      image: undefined,
    },
    {
      title: "Auditoría interna",
      category: "Cumplimiento",
      station: "VIG",
      date: "Junio 2026",
      description:
        "Cada registro puede incluir descripción, estado, resultado y observaciones para preservar memoria operativa.",
      outcome: "Aporta trazabilidad sin complejidad técnica.",
      image: undefined,
    },
    {
      title: "Socialización de políticas",
      category: "Comunicación",
      station: "SVZ",
      date: "Julio 2026",
      description:
        "Útil para dejar evidencia de jornadas de inducción, difusión de políticas, responsabilidades y actualización normativa.",
      outcome: "Todo editable desde un formulario simple.",
      image: undefined,
    },
    {
      title: "Seguimiento de acciones",
      category: "Mejora continua",
      station: "MIQ",
      date: "Agosto 2026",
      description:
        "Sección preparada para mostrar acciones de seguimiento derivadas de reportes, reuniones o revisiones del comité.",
      outcome: "Mantiene visible el ciclo de mejora del SMS.",
      image: undefined,
    },
  ],
  metricsSummary: {
    title: "Mapa de avance por componente",
    description:
      "Los porcentajes actuales son demostrativos y pueden editarse desde el CMS. La presentación está pensada para lectura rápida y seguimiento ejecutivo.",
  },
  metrics: [
    {
      title: "Componente I · Política y objetivos",
      description: "Gobernanza, liderazgo y directrices visibles para toda la organización.",
      value: 72,
    },
    {
      title: "Componente II · Gestión del riesgo",
      description: "Identificación de peligros, evaluación y tratamiento de riesgos operacionales.",
      value: 68,
    },
    {
      title: "Componente III · Aseguramiento",
      description: "Seguimiento, verificación y evidencia del funcionamiento del sistema.",
      value: 74,
    },
    {
      title: "Componente IV · Promoción",
      description: "Capacitación, comunicación y cultura operacional sostenida.",
      value: 81,
    },
  ],
  contact: {
    title: "Coordinación y seguimiento del sistema",
    description:
      "La información de contacto también puede administrarse desde el CMS para mantener responsables, correo y notas siempre actualizados.",
    channels: [
      { label: "Responsable", value: "Coordinación SMS Avior Airlines" },
      { label: "Estado", value: "Información pública y preparada para actualización" },
      { label: "Panel", value: "CMS simplificado para edición de textos e imágenes" },
    ],
  },
  footer: {
    copy: "SMS Avior Airlines · sitio institucional preparado para publicación y administración simple.",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Recursos", href: "#recursos" },
      { label: "Planes", href: "#planes" },
      { label: "Actividades", href: "#actividades" },
    ],
  },
};
