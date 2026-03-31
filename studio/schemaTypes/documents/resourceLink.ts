import { defineField, defineType } from "sanity";

export const resourceLinkType = defineType({
  name: "resourceLink",
  title: "Recurso",
  type: "document",
  fields: [
    defineField({ name: "orderRank", title: "Orden", type: "number", initialValue: 10 }),
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "description", title: "Descripción", type: "text", rows: 4 }),
    defineField({ name: "category", title: "Categoría", type: "string" }),
    defineField({
      name: "image",
      title: "Imagen del recurso",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "ctaLabel",
      title: "Texto del botón",
      type: "string",
      initialValue: "Abrir recurso",
    }),
    defineField({ name: "href", title: "Enlace", type: "url" }),
    defineField({
      name: "file",
      title: "Archivo del recurso",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx",
      },
    }),
    defineField({
      name: "external",
      title: "Abrir en pestaña nueva",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "icon",
      title: "Icono",
      type: "string",
      options: {
        list: [
          { title: "Reporte", value: "report" },
          { title: "Política", value: "policy" },
          { title: "Glosario", value: "glossary" },
          { title: "Emergencia", value: "emergency" },
          { title: "Cambio", value: "change" },
        ],
      },
      initialValue: "report",
    }),
  ],
});
