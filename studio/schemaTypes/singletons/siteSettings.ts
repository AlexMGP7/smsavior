import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Configuración general",
  type: "document",
  fields: [
    defineField({
      name: "brandLogo",
      title: "Logo principal",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo del logo",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "metricsSummaryTitle",
      title: "Título del resumen de indicadores",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "metricsSummaryDescription",
      title: "Descripción del resumen de indicadores",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "contactTitle",
      title: "Título de contacto",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contactDescription",
      title: "Descripción de contacto",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "contactChannels",
      title: "Canales de contacto",
      type: "array",
      of: [defineArrayMember({ type: "channel" })],
    }),
    defineField({
      name: "footerCopy",
      title: "Texto del pie de página",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "footerLinks",
      title: "Enlaces del pie de página",
      type: "array",
      of: [defineArrayMember({ type: "footerLink" })],
    }),
  ],
});
