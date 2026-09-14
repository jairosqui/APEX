# APEX Facility Consulting LLC — Sitio web

Sitio corporativo de **APEX Facility Consulting LLC** (Addison, Illinois).
Construido con Next.js 14 (App Router), Tailwind CSS y Framer Motion. Bilingüe EN/ES.

---

## Stack

| Pieza | Elección |
|---|---|
| Framework | Next.js 14.2.35 (App Router, JavaScript) |
| Estilos | Tailwind CSS 3 |
| Animación | Framer Motion 11 |
| Tipografías | Archivo + IBM Plex Mono, **auto-alojadas** vía `@fontsource` (sin peticiones a Google Fonts) |
| Imágenes | Sin fotos de stock: todas las composiciones son SVG propias (`components/Visuals.jsx`) |
| Formulario | Web3Forms (envío directo desde el navegador) |
| Hosting | Vercel (detección automática, sin configuración) |

Todas las rutas se generan como HTML estático en el build.

---

## Estructura

```
app/
  layout.jsx          Fuentes, proveedor de idioma, Header/Footer, metadatos y JSON-LD
  template.jsx        Transición suave entre páginas
  page.jsx            Home
  about/ services/ approach/ contact/    Páginas del menú
  privacy/ terms/     Páginas legales
  sitemap.js robots.js not-found.jsx
components/
  Header.jsx Footer.jsx Hero.jsx Sections.jsx ContactSection.jsx
  ContactForm.jsx LegalPage.jsx Visuals.jsx Icons.jsx Reveal.jsx PageTransition.jsx
context/
  LanguageContext.jsx Cambio EN/ES + persistencia en localStorage
data/
  translations.js     TODO el texto del sitio (EN y ES)
  company.js          NAP: nombre, dirección, teléfono, menú
public/
  favicon.svg apple-touch-icon.png favicon-32.png
```

**Para cambiar cualquier texto se edita `data/translations.js`.** Los componentes
nunca contienen copy en duro.
**Para cambiar dirección o teléfono se edita `data/company.js`** — se propaga a
header, footer, contacto, JSON-LD y páginas legales a la vez.

---

## Desarrollo local

```bash
npm install
cp .env.example .env.local     # y pega tu access key de Web3Forms
npm run dev                    # http://localhost:3000
npm run build && npm start     # build de producción
```

---

## Variables de entorno

| Variable | Obligatoria | Descripción |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Para que el formulario envíe | Access key gratuita de [web3forms.com](https://web3forms.com) asociada al correo donde llegarán las solicitudes |

Sin esta variable el sitio compila y funciona con normalidad; el formulario
valida los campos y muestra un aviso en lugar de enviar.

Es una clave **pública por diseño** (viaja en el bundle del navegador). Vercel
mostrará el aviso *"Keep This Value Private"* al guardarla: es esperado, se
confirma con **Change to Config** y no indica un error.

---

## Subir a GitHub

El repositorio ya está inicializado con un commit inicial.

```bash
# 1. Crea un repositorio vacío en github.com (sin README, sin .gitignore)
# 2. Desde la carpeta del proyecto:
git remote add origin https://github.com/<usuario>/apex-facility-consulting.git
git branch -M main
git push -u origin main
```

O con GitHub CLI:

```bash
gh repo create apex-facility-consulting --private --source=. --remote=origin --push
```

---

## Desplegar en Vercel

1. [vercel.com/new](https://vercel.com/new) → **Import Git Repository** → elige el repo.
2. Verifica que **Framework Preset = Next.js**. No toques Build Command ni Output
   Directory: los valores por defecto (`next build` / `.next`) son los correctos.
3. **Root Directory** debe ser la carpeta que contiene `package.json` (la raíz del
   repo, marcada con el icono de Next.js).
4. En **Environment Variables** añade `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   (Production, Preview y Development).
5. **Deploy**. Cada `git push` a `main` vuelve a desplegar automáticamente.

### Dominio propio

Project Settings → **Domains** → añade `apexfacilityconsulting.com` y `www.…`
Vercel indica los registros DNS a crear. Si el DNS está en Cloudflare, añade los
registros allí en modo **DNS only** (nube gris) durante la verificación.

Después de conectar el dominio definitivo, actualiza `siteUrl` en
`data/company.js` para que el sitemap y los metadatos apunten al dominio real.

---

## Checklist de verificación (ya ejecutado)

- `npm run build` sin errores ni warnings; las 10 rutas se generan estáticas.
- Sin scroll horizontal en 390 px, 820 px y 1440 px.
- Menú móvil: abre, cierra al navegar y bloquea el scroll de fondo.
- Cambio EN/ES en todas las páginas, con persistencia tras recargar.
- Validación del formulario (campos obligatorios y formato de email).
- Sin errores de consola ni recursos 404.
- `prefers-reduced-motion` desactiva todas las animaciones.
- Enlaces `tel:` y Google Maps funcionando; foco visible en todos los controles.

---

## Notas de contenido

Siguiendo el brief: no se publican EIN, cifras de clientes, años de experiencia
ni resultados que no puedan respaldarse. El nombre, la dirección y el teléfono
son idénticos en todas las secciones y proceden de un único archivo.

© 2026 APEX Facility Consulting LLC.
