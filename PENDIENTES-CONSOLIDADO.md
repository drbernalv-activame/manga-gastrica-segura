# PENDIENTES CONSOLIDADO — MANGA GÁSTRICA SEGURA

**Actualizado: 3 de septiembre de 2026.** De los 80 marcadores originales, **72 quedaron
resueltos** en el commit de cierre. Quedan **8 marcadores abiertos**, que corresponden a
**5 datos que nunca se entregaron**, más 3 rutas de imagen pendientes y 2 verificaciones.

> ⚠️ **La página sigue sin poder publicarse.** `grep -rn "COMPLETAR\|VALIDAR" index.html`
> **no sale vacío**: devuelve 8 líneas. No se inventó ninguno de esos datos.

---

## 1. Marcadores abiertos: 5 datos que faltan (8 líneas en `index.html`)

Ninguno de estos cinco venía en las respuestas de cierre. **No se inventaron** porque son
credenciales profesionales, destinos de datos de pacientes y obligaciones legales: inventarlos
sería peor que dejar la página sin publicar.

| # | Qué falta | Quién responde | Ubicación |
|---|---|---|---|
| 1 | **Cédula profesional y especialidad completa** del Dr. Bernal, verificable en el Registro Nacional de Profesionistas. | Dr. Bernal | `index.html:150` (perfil), `:842` (pie) |
| 2 | **Certificaciones**: qué consejo o consejos lo certifican y su vigencia, verificables. | Dr. Bernal | `index.html:154` |
| 3 | **Destino del formulario**: correo, CRM o webhook a donde deben llegar los datos de los pacientes. Mientras siga abierto, `analitica.js` **bloquea el envío** para no perder solicitudes reales. | Administración | `index.html:746` (`action`), `:748` (aviso visible) |
| 4 | **URL del aviso de privacidad** (y el documento publicado). Sin él, la casilla de consentimiento del formulario no es válida. | Legal | `index.html:812` (formulario), `:860` (pie) |
| 5 | **Publicidad sanitaria (COFEPRIS)**: revisar requisitos y, si aplica, número de registro. | Legal | `index.html:874` |

## 2. Rutas de imagen pendientes (no son `[COMPLETAR]`, no salen en el grep)

Marcadas como `[RUTA PENDIENTE: …]` según lo acordado. La página ya tiene los `<img>` con su
texto alternativo; solo falta subir el archivo y poner la ruta real.

| Archivo | Ubicación | Estado |
|---|---|---|
| `foto-equipo.jpg` | `index.html:77` (hero) | **La foto existe**, falta subirla y enrutarla. |
| `foto-dr-bernal.jpg` | `index.html:130` (Experiencia) y `:937` (schema `image`) | **No se confirmó que exista.** Si no hay retrato, hay que decidir si se retira la figura o se usa un encuadre de la foto de equipo. |
| `og-manga-gastrica-segura-1200x630.jpg` | `index.html:20` (`og:image`) | Imagen para redes, 1200×630 px. Se compone a partir de las anteriores. |

## 3. Verificaciones pendientes (comentarios en el HTML, no marcadores)

| Qué | Dónde |
|---|---|
| **Disponibilidad del dominio `mangagastricasegura.com`** antes de publicar. Ya está puesto en `canonical`, `og:url` y en los tres `@id` del schema. | Comentario `VERIFICAR` en `index.html:7` |
| **Revisión legal de testimonios**: normativa de publicidad sanitaria y consentimiento firmado de cada paciente. | Comentario `PENDIENTE LEGAL` en `index.html:412` |

## 4. 🔴 La sección de testimonios está vacía

La decisión fue conservarla, pero **no se entregó ningún testimonio**, así que hoy renderiza con
el título y nada debajo. Antes de publicar hay que **llenarla o eliminarla**; no puede salir así.
Las instrucciones de qué necesita cada testimonio están en un comentario HTML dentro de la
sección.

## 5. Sin marcador, pero conviene revisar

| Qué | Nota |
|---|---|
| **IDs de Google Analytics 4 y Meta Pixel** | El comentario del `<head>` ya no lleva marcador: se pegan los scripts cuando existan. Los eventos ya están implementados. |
| **Eventos de analítica** | La página emite `click_cta_simulacion`, `click_cta_plan`, `click_cta_dudas`, `click_whatsapp`, `form_submit` y `faq_open`. `click_cta_valoracion` ya no existe. |

---

## 6. Resueltos el 3 de septiembre de 2026 (72 marcadores)

| Grupo | Antes | Cerrados | Abiertos |
|---|---|---|---|
| Dr. Bernal (clínico) | 29 | 26 | 3 (cédula ×2, certificaciones) |
| Financiera / administración | 34 | 32 | 2 (destino del formulario) |
| Legal | 4 | 1 | 3 (aviso de privacidad ×2, COFEPRIS) |
| Marketing | 13 | 13 | 0 |
| **Total** | **80** | **72** | **8** |

Los 32 marcadores de financiera se cerraron en su mayoría **retirando las cifras de la página**,
no llenándolas: la decisión de fondo fue que ningún precio, mensualidad, anticipo, tasa ni CAT
aparece publicado, y todo se explica al paciente por teléfono o en persona.

El detalle de qué se cerró y cómo está en [`CAMBIOS.md`](CAMBIOS.md).
