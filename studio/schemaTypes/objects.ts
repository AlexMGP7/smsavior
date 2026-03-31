import { defineField, defineType } from "sanity";

export const statType = defineType({
  name: "stat",
  title: "Indicador rápido",
  type: "object",
  fields: [
    defineField({
      name: "value",
      title: "Valor",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "label",
      title: "Etiqueta",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});

export const focusAreaType = defineType({
  name: "focusArea",
  title: "Bloque de enfoque",
  type: "object",
  fields: [
    defineField({ name: "kicker", title: "Etiqueta", type: "string" }),
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "description", title: "Descripción", type: "text", rows: 4 }),
  ],
});

export const pillarType = defineType({
  name: "pillar",
  title: "Pilar",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "description", title: "Descripción", type: "text", rows: 4 }),
  ],
});

export const highlightType = defineType({
  name: "highlight",
  title: "Tarjeta destacada",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Etiqueta pequeña", type: "string" }),
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "description", title: "Descripción", type: "text", rows: 4 }),
  ],
});

export const channelType = defineType({
  name: "channel",
  title: "Canal de contacto",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Etiqueta",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "value",
      title: "Valor",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});

export const footerLinkType = defineType({
  name: "footerLink",
  title: "Enlace de pie de página",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Texto",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "Enlace",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
