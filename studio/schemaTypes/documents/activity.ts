import { defineField, defineType } from "sanity";

export const activityType = defineType({
  name: "activity",
  title: "Actividad",
  type: "document",
  fields: [
    defineField({
      name: "orderRank",
      title: "Orden manual",
      type: "number",
      initialValue: 10,
    }),
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "category", title: "Categoría", type: "string" }),
    defineField({ name: "station", title: "Estación", type: "string" }),
    defineField({ name: "eventDate", title: "Fecha del evento", type: "date" }),
    defineField({
      name: "displayDate",
      title: "Fecha como texto",
      type: "string",
      description: "Ejemplo: Marzo 2026",
    }),
    defineField({
      name: "image",
      title: "Imagen de la actividad",
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
    defineField({ name: "description", title: "Descripción", type: "text", rows: 5 }),
    defineField({
      name: "outcome",
      title: "Resultado o nota destacada",
      type: "string",
    }),
  ],
});
