import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutSmsType = defineType({
  name: "aboutSms",
  title: "Sobre SMS",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título de la sección",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción de la sección",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "sectionImage",
      title: "Foto de la sección",
      type: "image",
      description: "Opcional. Se muestra al lado del contenido de Sobre SMS.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
        }),
      ],
    }),
    defineField({ name: "mission", title: "Misión", type: "text", rows: 5 }),
    defineField({ name: "vision", title: "Visión", type: "text", rows: 5 }),
    defineField({
      name: "pillars",
      title: "Pilares",
      type: "array",
      of: [defineArrayMember({ type: "pillar" })],
    }),
    defineField({
      name: "highlights",
      title: "Tarjetas destacadas",
      type: "array",
      of: [defineArrayMember({ type: "highlight" })],
    }),
  ],
});
