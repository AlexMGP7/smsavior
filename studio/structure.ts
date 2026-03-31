import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenido SMS Avior")
    .items([
      S.listItem()
        .title("Página principal")
        .id("homepage")
        .child(S.document().schemaType("homepage").documentId("homepage")),
      S.listItem()
        .title("Sobre SMS")
        .id("aboutSms")
        .child(S.document().schemaType("aboutSms").documentId("aboutSms")),
      S.listItem()
        .title("Configuración general")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.divider(),
      S.documentTypeListItem("resourceLink").title("Recursos"),
      S.documentTypeListItem("emergencyPlan").title("Planes por estación"),
      S.documentTypeListItem("activity").title("Actividades"),
      S.documentTypeListItem("metric").title("Indicadores"),
    ]);
