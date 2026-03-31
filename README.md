# SMS Avior Airlines

Micrositio institucional del Sistema de Gestión de la Seguridad Operacional de Avior Airlines, construido en `Next.js` con export estático para `GitHub Pages` y preparado para administración simple mediante `Sanity CMS`.

## Stack

- `Next.js 16` + App Router
- `Tailwind CSS 4`
- `Sanity` como CMS opcional
- `GitHub Pages` para hosting gratis

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Sitio local: `http://localhost:3000`

## CMS para edición

El frontend ya funciona aunque todavía no se conecte Sanity. Mientras no existan variables de entorno, la web usa contenido inicial interno.

Cuando quieras activar el CMS:

1. Crea un proyecto gratuito en Sanity.
2. Copia `.env.example` a `.env.local`.
3. Completa:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_PROJECT_ID=tu_project_id
SANITY_STUDIO_DATASET=production
```

4. Levanta el estudio:

```bash
pnpm cms:dev
```

Panel local: `http://localhost:3333`

## Deploy en GitHub Pages

El workflow `.github/workflows/deploy.yml` publica automáticamente el sitio en GitHub Pages cuando haces push a `main`.

### Pasos en GitHub

1. Activar `Settings -> Pages -> Build and deployment -> GitHub Actions`.
2. Crear estas variables de repositorio en `Settings -> Secrets and variables -> Actions -> Variables` si vas a habilitar Sanity:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_STUDIO_PROJECT_ID`
   - `SANITY_STUDIO_DATASET`
3. Hacer push a `main`.

Si las variables de Sanity existen, el workflow también compilará el panel y lo publicará en `/admin/`.

## Notas editoriales

- La estructura del sitio está pensada para un editor no técnico.
- La navegación pública replica el espíritu del sitio de referencia, pero en una interfaz más clara.
- El panel CMS está modelado con documentos simples:
  - Página principal
  - Sobre SMS
  - Recursos
  - Planes por estación
  - Actividades
  - Indicadores
  - Configuración general
