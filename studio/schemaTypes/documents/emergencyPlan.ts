import { defineArrayMember, defineField, defineType } from "sanity";

export const emergencyPlanType = defineType({
  name: "emergencyPlan",
  title: "Plan por estación",
  type: "document",
  fields: [
    defineField({ name: "orderRank", title: "Orden", type: "number", initialValue: 10 }),
    defineField({
      name: "station",
      title: "Código de estación",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Estado",
      type: "string",
      initialValue: "Disponible para actualización",
    }),
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "description", title: "Descripción", type: "text", rows: 4 }),
    defineField({
      name: "items",
      title: "Elementos visibles",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "href", title: "Enlace principal", type: "url" }),
    defineField({
      name: "external",
      title: "Abrir en pestaña nueva",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
