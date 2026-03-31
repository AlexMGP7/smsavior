import { defineField, defineType } from "sanity";

export const metricType = defineType({
  name: "metric",
  title: "Indicador",
  type: "document",
  fields: [
    defineField({ name: "orderRank", title: "Orden", type: "number", initialValue: 10 }),
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "description", title: "Descripción", type: "text", rows: 3 }),
    defineField({
      name: "value",
      title: "Porcentaje",
      type: "number",
      validation: (rule) => rule.required().min(0).max(100),
    }),
  ],
});
