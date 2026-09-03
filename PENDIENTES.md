# PENDIENTES — Manga Gástrica Segura

> ⚠️ **Documento histórico.** El cierre del 3 de septiembre de 2026 resolvió 72 de los 80
> marcadores; muchos de los puntos de abajo ya no aplican. El estado real está en
> [`PENDIENTES-CONSOLIDADO.md`](PENDIENTES-CONSOLIDADO.md) y la bitácora en
> [`CAMBIOS.md`](CAMBIOS.md).

> 📌 **Para trabajar día a día usa [`PENDIENTES-CONSOLIDADO.md`](PENDIENTES-CONSOLIDADO.md).**
> Ahí están los 80 marcadores de la página (`[COMPLETAR]` y `[VALIDAR]`) agrupados por quién
> debe responder —Dr. Bernal, financiera/administración, legal y marketing—, ordenados de
> bloqueante a deseable, y con las 13 respuestas que resuelven 46 marcadores de un golpe.
> Este archivo se conserva como registro original de los `[COMPLETAR]` y su contexto.

Registro de **todo lo que está marcado como `[COMPLETAR]`** en la landing page.
Los marcadores `[VALIDAR]` del bloque de financiamiento (planes de pago, qué incluye el
procedimiento y preguntas frecuentes sobre financiamiento) están listados aparte en
[`CAMBIOS.md`](CAMBIOS.md).
Nada de esto se inventó: la página muestra un marcador visible (fondo ámbar con borde
punteado) en cada punto donde falta información oficial.

**Regla del proyecto:** ningún dato clínico, precio, cifra, credencial o testimonio se publica
sin que el Dr. Héctor Bernal lo entregue y lo valide por escrito.

---

## 1. Bloqueantes: la página NO debe publicarse sin esto

| # | Pendiente | Dónde está | Quién lo entrega |
|---|---|---|---|
| 1 | **Número de WhatsApp** (formato internacional, ej. 52XXXXXXXXXX) | `index.html`: hero, sección de valoración, pie, botón flotante y schema `telephone` | Dr. Bernal |
| 2 | **Destino del formulario** (correo, CRM, Google Sheets o webhook) | `index.html`, atributo `action` del `<form class="formulario">` | Dr. Bernal / equipo técnico |
| 3 | **Ciudad y hospital donde se realiza la cirugía** | `<title>`, sección del médico, FAQ "¿Dónde se realiza la cirugía?", schema `address` y `areaServed` | Dr. Bernal |
| 4 | **Cédula profesional y especialidad** (verificable en el Registro Nacional de Profesionistas) | Sección del médico y pie de página | Dr. Bernal |
| 5 | **Certificaciones y vigencia** (consejo que lo certifica) | Sección del médico | Dr. Bernal |
| 6 | **Aviso de privacidad** (documento y URL) | Casilla de consentimiento del formulario y pie de página | Dr. Bernal / asesoría legal |
| 7 | **Revisión de publicidad sanitaria (COFEPRIS)** y número de registro si aplica | Pie de página | Asesoría legal |
| 8 | **Explicación real de cómo se logra la accesibilidad** — ya redactada (esquema de financiamiento en mensualidades). Falta el nombre de la institución financiera: ver `[VALIDAR]` en `CAMBIOS.md` | Sección "Cómo logramos la accesibilidad", tarjeta derecha | Dr. Bernal (debe validarla) |
| 9 | **Fotos reales**: Dr. Bernal con su equipo (hero) y retrato profesional | Hero y sección del médico | Dr. Bernal |

> Mientras el formulario no tenga destino, `assets/js/analitica.js` **bloquea el envío** y muestra
> un aviso, para no perder datos de pacientes reales.

---

## 2. Contenido clínico y de proceso

| # | Pendiente | Dónde está |
|---|---|---|
| 10 | Duración aproximada de la cirugía | Proceso paso a paso, punto 4 |
| 11 | Días de hospitalización | Proceso paso a paso, punto 5 |
| 12 | Nombres y roles del equipo (anestesiología, enfermería, nutrición, psicología), si se desean publicar | Sección del médico |
| 13 | Cifras de resultados: **decidir si se publican o no**. Si se publican, deben venir de literatura científica citada y aclarar si son %TWL (porcentaje del peso total perdido) o %EWL (porcentaje del exceso de peso perdido) | Sección "Resultados: qué sí podemos decirte" |

---

## 3. Precio y financiamiento

| # | Pendiente | Dónde está |
|---|---|---|
| 14 | Monto de contado, mensualidades, anticipos, costo total, intereses/comisiones y CAT | Sección "Planes de pago" (tres tarjetas) |
| 15 | Qué incluye y qué **no** incluye el procedimiento | Sección "Qué incluye tu procedimiento" |
| 16 | Institución financiera, vigencia real de las condiciones y respuestas de las ocho preguntas de financiamiento | Sección "Preguntas frecuentes sobre el financiamiento" |

Todo esto está marcado en la página como `[VALIDAR: …]` y listado con archivo y línea en
[`CAMBIOS.md`](CAMBIOS.md). **Regla de la página:** no se publica ningún monto, plazo, tasa,
anticipo, mes sin intereses ni nombre de financiera sin documento que lo respalde.

---

## 4. Testimonios

| # | Pendiente | Dónde está |
|---|---|---|
| 17 | Testimonios reales con **consentimiento escrito firmado**, nombre o iniciales y fecha aproximada. Incluir al menos uno que hable del trato y del seguimiento, no solo de kilos | Sección "Lo que dicen quienes ya pasaron por aquí" |

> **Instrucción de publicación:** si al lanzar no hay testimonios con consentimiento,
> **elimina la sección completa** del HTML (está marcada con un comentario en `index.html`).
> No se publican testimonios inventados ni fotos de banco de imágenes.

---

## 5. Técnico, SEO y analítica

| # | Pendiente | Dónde está |
|---|---|---|
| 18 | URL definitiva del sitio | `canonical`, `og:url` y los tres `@id` del schema |
| 19 | Imagen para redes sociales (Open Graph, 1200×630 px, foto real) | `og:image` |
| 20 | ID de Google Analytics 4 (`G-XXXXXXXXXX`) | Comentario de analítica en el `<head>` |
| 21 | ID de Meta Pixel | Comentario de analítica en el `<head>` |
| 22 | Dirección completa para el schema: calle y número, ciudad, estado y código postal | JSON-LD `MedicalBusiness` |
| 23 | Verificar dato de audiencia del brief (rango de edad y proporción de mujeres) con datos reales antes de usarlo en campañas | Documento de estrategia, no en la página |

Los eventos `click_cta_valoracion`, `click_whatsapp`, `form_submit` y `faq_open` **ya están
implementados** en `assets/js/analitica.js`; empiezan a registrar en cuanto se instalen GA4 o
Meta Pixel.

---

## 6. Decisiones tomadas al construir (para revisión del Dr.)

- **No se publicó ningún número inventado.** La única cifra publicada es "más de 4,000 cirugías".
  Los años de experiencia quedaron como `[VALIDAR: 18 o más de 20 años]` porque los materiales
  del proyecto se contradicen (ver `CAMBIOS.md`).
- **No hay promesas de resultado.** No aparecen las frases "sin riesgos", "sin dolor",
  "100 % efectivo" ni cifras de kilos.
- **La sección de riesgos tiene el mismo peso visual** que las demás y va antes del precio.
- **El precio aparece hasta el final**, después de seguridad, médico, procedimiento, proceso y
  riesgos, tal como pide el brief (principio de anclaje). La única mención anterior es la línea
  de mensualidad del hero, acompañada de su aviso legal.
- **Tipografía del sistema en lugar de Google Fonts.** Evita peticiones externas y mejora
  Lighthouse. Si se prefiere Inter o Manrope como fuente de marca, hay que decidirlo y alojarla
  localmente (variable `--fuente` en `assets/css/styles.css`).
- **Sin urgencia falsa, sin contadores, sin comparaciones contra otros cirujanos u hospitales.**

---

## 7. Checklist previo a publicar

- [ ] Los 22 puntos anteriores resueltos o retirados de la página de forma consciente.
- [ ] Ningún marcador visible en producción: `grep -rn "COMPLETAR\|VALIDAR" index.html` debe salir vacío.
- [ ] Fotos reales cargadas, comprimidas (WebP) y con texto alternativo descriptivo.
- [ ] Formulario probado de punta a punta: llega el dato y alguien lo contesta.
- [ ] Enlace de WhatsApp probado desde un teléfono real, con el mensaje prellenado correcto.
- [ ] Aviso de privacidad publicado y enlazado.
- [ ] Revisión legal/regulatoria de publicidad sanitaria terminada.
- [x] Lighthouse móvil verificado en local: Rendimiento 100, Accesibilidad 100,
      Buenas prácticas 100, SEO 91. El único punto pendiente de SEO es el `rel="canonical"`,
      que sigue como marcador hasta tener la URL definitiva (punto 18). Volver a medir ya
      con las fotos reales cargadas y en el servidor final.
- [x] Contraste AA verificado en toda la paleta: botones, texto sobre fondo azul, pie,
      marcadores `[COMPLETAR]` y botón de WhatsApp.
- [ ] Servidor final con compresión (gzip o Brotli) y caché de assets estáticos.
