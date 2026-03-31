import { defineArrayMember, defineField, defineType } from "sanity";

export const homepageType = defineType({
  name: "homepage",
  title: "Página principal",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Etiqueta superior",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroTitle",
      title: "Título principal",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroDescription",
      title: "Descripción principal",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Texto botón principal",
      type: "string",
      initialValue: "Explorar recursos SMS",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "Enlace botón principal",
      type: "string",
      initialValue: "#recursos",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Texto botón secundario",
      type: "string",
      initialValue: "Ver planes por sede",
    }),
    defineField({
      name: "secondaryCtaHref",
      title: "Enlace botón secundario",
      type: "string",
      initialValue: "#planes",
    }),
    defineField({
      name: "adminNote",
      title: "Nota sobre administración",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroImage",
      title: "Imagen principal",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          description: "Describe la imagen en una frase corta.",
        }),
      ],
    }),
    defineField({
      name: "stats",
      title: "Indicadores rápidos",
      type: "array",
      of: [defineArrayMember({ type: "stat" })],
    }),
    defineField({
      name: "focusAreas",
      title: "Bloques de enfoque",
      type: "array",
      of: [defineArrayMember({ type: "focusArea" })],
    }),
  ],
});
