# Despliegue — Manga Gástrica Segura

Sitio estático: HTML, CSS y un archivo JS. **Sin build, sin dependencias, sin gestor de
paquetes.** Cualquier hosting estático sirve.

> ⚠️ **Este repositorio no se ha desplegado todavía.** La sesión que preparó estos archivos no
> pudo conectar con Vercel ni con Netlify: la política de red del entorno rechaza
> `api.vercel.com` y `api.netlify.com` (403 en el gateway), y no había credenciales de ninguna
> de las dos plataformas. La configuración de abajo ya está lista para que el despliegue sea
> un click-through de dos minutos.

---

## Vercel (opción preferida)

1. En [vercel.com/new](https://vercel.com/new), importar el repositorio
   `drbernalv-activame/manga-gastrica-segura`.
2. **Project Name:** `mangagastricasegura`. Si está tomado, `manga-gastrica-segura`.
3. **Framework Preset:** `Other`. No tocar Build Command ni Output Directory: `vercel.json`
   ya los define (sin build, raíz del repo).
4. **Production Branch:** `claude/manga-gastrica-landing-page-s78nhc`
   (Settings → Git → Production Branch). Por defecto Vercel toma `main`, que **no** tiene la
   landing terminada: hay que cambiarlo.
5. Deploy. El despliegue automático en cada push a esa rama queda activo solo.
6. No conectar dominio personalizado todavía.

URL provisional resultante: `https://<nombre-del-proyecto>.vercel.app`.

## Netlify (alternativa)

1. En [app.netlify.com/start](https://app.netlify.com/start), importar el mismo repositorio.
2. **Site name:** `mangagastricasegura` o `manga-gastrica-segura`.
3. **Branch to deploy:** `claude/manga-gastrica-landing-page-s78nhc`.
4. Build command y publish directory: los toma de `netlify.toml`.

URL provisional resultante: `https://<nombre-del-sitio>.netlify.app`.

---

## Qué hacer en cuanto exista la URL

1. **Sustituir `canonical` y `og:url`** en `index.html` por la URL provisional, y los tres
   `@id` y las dos `url` del JSON-LD. Hoy apuntan a `https://mangagastricasegura.com`, que
   todavía es el dominio **sin verificar** (pendiente 5). Está marcado con un comentario
   `VERIFICAR` en `index.html:7`.
2. **Verificar en el navegador**, que es lo que la sesión no pudo hacer:
   - La página carga y los estilos se aplican.
   - El formulario abre WhatsApp con el mensaje armado.
   - Las dos figuras sin foto muestran el bloque neutro, no el ícono de imagen rota.

---

## Decisiones que ya están tomadas en la configuración

### El despliegue provisional lleva `noindex`

Tanto `vercel.json` como `netlify.toml` mandan `X-Robots-Tag: noindex, nofollow` en todas las
rutas. Dos razones:

- Una URL `*.vercel.app` indexada **compite con el dominio definitivo** y es difícil de sacar
  del índice después.
- La página todavía tiene pendientes legales: **no hay aviso de privacidad publicado** y la
  revisión de COFEPRIS está abierta. Un formulario que capta nombre, teléfono, ciudad y motivo
  de consulta de un paciente no debería ser indexable mientras eso siga así.

**Al pasar al dominio definitivo hay que quitar ese encabezado**, o el sitio real tampoco se
indexará. Está comentado en `netlify.toml`; en `vercel.json` no se pueden poner comentarios,
así que queda anotado aquí.

### La documentación interna no se publica

`.vercelignore` y las reglas de `netlify.toml` excluyen los `*.md` y la carpeta `docs/`.
Sin eso, cualquiera podría abrir `https://<sitio>/PENDIENTES-CONSOLIDADO.md` y leer los
pendientes legales, las notas de trabajo y el registro interno del proyecto.

### Sin encabezados de caché agresivos

No se añadieron `Cache-Control` de larga duración a `assets/`. Los nombres de archivo no llevan
hash (`styles.css`, `analitica.js`), así que una caché de un año dejaría a los visitantes con
una versión vieja después de cada cambio. Los valores por defecto de ambas plataformas son
correctos para este caso.
