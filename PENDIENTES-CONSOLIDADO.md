# PENDIENTES CONSOLIDADO — MANGA GÁSTRICA SEGURA

**Fuente única de verdad operativa.** Reúne los **80 marcadores** que quedan en la página
(38 `[VALIDAR]` + 42 `[COMPLETAR]`), agrupados por **quién debe responder** y ordenados
dentro de cada grupo de **bloqueante → deseable**.

Actualizado: 2026-09-03. Archivos relacionados: `PENDIENTES.md` (registro original de
`[COMPLETAR]`), `CAMBIOS.md` (bitácora del ajuste de copy y financiamiento).

> **La página no se publica mientras quede un solo marcador.**
> Verificación final: `grep -rn "COMPLETAR\|VALIDAR" index.html` debe salir vacío.

---

## Cómo leer este documento

| Prioridad | Significado |
|---|---|
| 🔴 **Bloqueante** | Sin este dato la página no puede publicarse. |
| 🟠 **Decisión bloqueante** | Se resuelve respondiendo **o** retirando el contenido de la página. Hay que decidir; no se puede dejar así. |
| 🟢 **Deseable** | Mejora la página. Si no llega, se retira ese contenido y se publica igual. |

La columna **Una respuesta** marca los puntos donde **una sola decisión apaga varios
marcadores a la vez**. Son los de mayor rendimiento: atenderlos primero.

---

## Resumen ejecutivo

| Grupo | Marcadores | 🔴 | 🟠 | 🟢 | Además, sin marcador |
|---|---|---|---|---|---|
| Dr. Bernal (clínico) | 29 | 26 | 2 | 1 | — |
| Financiera / administración | 34 | 34 | 0 | 0 | — |
| Legal | 4 | 4 | 0 | 0 | 3 revisiones |
| Marketing | 13 | 13 | 0 | 0 | 1 deseable |
| **Total** | **80** | **77** | **2** | **1** | **4** |

Las dos fotos reales (`index.html:83` y `:137`) las **entrega el Dr. Bernal** pero están
contabilizadas en el grupo de Marketing, que es quien las carga y optimiza. Aparecen en
los dos grupos como referencia cruzada, no como pendientes duplicados.

### Atajo: 13 respuestas resuelven 46 de los 80 marcadores

| # | Una sola respuesta | Lugares | Grupo |
|---|---|---|---|
| 1 | Años de experiencia (18 o más de 20) | 4 | Dr. Bernal |
| 2 | Hospital, ciudad, estado, calle y código postal | 9 | Dr. Bernal |
| 3 | Esquema de seguimiento incluido (duración y número de consultas) | 3 | Dr. Bernal |
| 4 | Cédula profesional y especialidad | 2 | Dr. Bernal |
| 5 | Días de hospitalización | 2 | Dr. Bernal |
| 6 | Retrato profesional del Dr. Bernal | 2 | Marketing (entrega el Dr.) |
| 7 | Número de WhatsApp | 7 | Administración |
| 8 | Nombre de la institución financiera | 3 | Financiera |
| 9 | Tarjetas o instituciones participantes | 2 | Financiera |
| 10 | Destino del formulario (CRM, correo o webhook) | 2 | Administración |
| 11 | URL definitiva del sitio | 7 | Marketing |
| 12 | URL del aviso de privacidad | 2 | Legal |
| 13 | Mensualidad "desde" del hero — **valor derivado**, no es decisión: sale de la mensualidad del plazo largo (`index.html:612`) | 1 | Financiera |

---

## 1. Dr. Héctor Bernal — clínico (29 marcadores propios + 2 fotos del grupo 4)

### 🔴 Bloqueantes

| # | Qué falta | Una respuesta | Ubicación |
|---|---|---|---|
| 1.1 | **Años de experiencia: ¿18 o más de 20?** Los materiales del proyecto se contradicen. No se eligió ninguna: hay que decidir. | ✅ **1 respuesta → 4 lugares** | `index.html:9` (`meta description`), `:59` (hero), `:95` (barra de confianza), `:145` (sección Experiencia) |
| 1.2 | **Hospital, ciudad, estado, calle, número y código postal** donde se realiza la cirugía y donde está el consultorio, más horarios de atención. | ✅ **1 respuesta → 9 lugares** | `index.html:8` (`<title>`), `:170` (perfil), `:754` (FAQ "¿Dónde se realiza la cirugía?"), `:951` (pie), `:1003` (schema `areaServed`), `:1006` (calle), `:1007` (ciudad), `:1008` (estado), `:1009` (código postal) |
| 1.3 | **Esquema de seguimiento incluido:** cuántas consultas, en qué momentos y durante cuánto tiempo. | ✅ **1 respuesta → 3 lugares** | `index.html:487` (Acompañamiento), `:505` (duración total), `:665` (Qué incluye) |
| 1.4 | **Cédula profesional y especialidad**, verificable en el Registro Nacional de Profesionistas. | ✅ **1 respuesta → 2 lugares** | `index.html:157` (perfil), `:945` (pie) |
| 1.5 | **Días de hospitalización** incluidos en el procedimiento. | ✅ **1 respuesta → 2 lugares** | `index.html:377` (Proceso), `:657` (Qué incluye) |
| 1.6 | **Certificaciones**: qué consejo o consejos lo certifican y vigencia, verificables. | — | `index.html:161` |
| 1.7 | **Qué incluye la evaluación preoperatoria**: estudios y valoraciones concretas. | — | `index.html:647` |
| 1.8 | **Lista de exclusiones**: qué estudios, medicamentos o atenciones se cotizan por separado. Es la contraparte obligatoria de "qué incluye"; sin ella la sección queda a medias. | — | `index.html:671` |
| 1.9 | **Estudios de control del seguimiento** y su frecuencia (detección de deficiencias de vitaminas y minerales). | — | `index.html:496` |
| 1.10 | **Canal y horario de atención** posquirúrgica: a quién escribe el paciente y cuándo si algo no va bien. | — | `index.html:501` |
| 1.11 | **Duración aproximada de la cirugía.** | — | `index.html:373` |

### 🟠 Decisiones bloqueantes (responder o retirar el contenido)

| # | Qué hay que decidir | Ubicación |
|---|---|---|
| 1.12 | **Testimonios de pacientes.** Solo se publican con consentimiento escrito firmado, nombre o iniciales y fecha aproximada. Conviene que al menos uno hable del trato y del seguimiento, no solo de kilos. **Si al publicar no hay testimonios con consentimiento, se elimina la sección completa** (está marcada con un comentario en el HTML). No se usan testimonios inventados ni fotos de banco de imágenes. | `index.html:458` |
| 1.13 | **Cifras de resultados: ¿se publican o no?** Si se publican, deben venir de literatura científica citada y aclarar si son %TWL (porcentaje del peso total perdido) o %EWL (porcentaje del exceso de peso perdido). Sin fuente verificable, la sección se queda sin números. | `index.html:438` |
| 1.14 | **Fotos reales** (foto del equipo para el hero y retrato profesional). El Dr. las entrega; marketing las publica. **Referencia cruzada:** estos dos marcadores están contabilizados en el grupo 4 (puntos 4.2 y 4.3). | `index.html:83`, `:137` |

### 🟢 Deseables

| # | Qué falta | Ubicación |
|---|---|---|
| 1.15 | **Nombres y roles del equipo** (anestesiología, enfermería, nutrición, psicología), *si se desean publicar*. Si no, se retira el marcador y queda la descripción genérica que ya existe. | `index.html:166` |

---

## 2. Financiera / administración (34 marcadores)

**Todos son bloqueantes.** La sección de planes de pago publica montos: si falta un dato, no se
publica esa tarjeta. Regla del proyecto: **no se publica ningún monto, plazo, tasa, anticipo,
mes sin intereses ni nombre de financiera sin documento que lo respalde.**

### 🔴 Bloqueantes — quién financia y cómo se contacta

| # | Qué falta | Una respuesta | Ubicación |
|---|---|---|---|
| 2.1 | **Número de WhatsApp** en formato internacional (ej. 52XXXXXXXXXX). | ✅ **1 respuesta → 7 lugares** | `index.html:68` (hero), `:76` (hero, texto), `:926` (formulario), `:958` y `:959` (pie), `:981` (botón flotante), `:1001` (schema `telephone`) |
| 2.2 | **Nombre de la institución financiera** que otorga el crédito. | ✅ **1 respuesta → 3 lugares** | `index.html:546` (Cómo logramos la accesibilidad), `:623` (aviso legal de planes), `:805` (FAQ "¿Quién proporciona el financiamiento?") |
| 2.3 | **Destino del formulario**: correo, CRM, Google Sheets o webhook. Mientras siga en placeholder, `analitica.js` **bloquea el envío** para no perder datos de pacientes reales. | ✅ **1 respuesta → 2 lugares** | `index.html:849` (atributo `action`), `:851` (aviso visible) |
| 2.4 | **Tarjetas o instituciones participantes** (dónde aplica el financiamiento). | ✅ **1 respuesta → 2 lugares** | `index.html:603` (plazo intermedio), `:616` (plazo largo) |

### 🔴 Bloqueantes — datos de los tres planes

| # | Plan | Qué falta | Ubicación |
|---|---|---|---|
| 2.5 | Contado | ¿Existe un **descuento real** por pago de contado? Si no existe, se retira la ventaja "Mejor costo total"; **no se inventa una ventaja para que la tarjeta compita**. | `index.html:583` |
| 2.6 | Contado | **Monto total** de contado. | `index.html:588` |
| 2.7 | Contado | **Formas de pago aceptadas** (efectivo, transferencia, tarjetas o instituciones participantes). | `index.html:590` |
| 2.8 | Plazo intermedio | Número de **mensualidades**. | `index.html:598` |
| 2.9 | Plazo intermedio | **Monto de la mensualidad**. | `index.html:599` |
| 2.10 | Plazo intermedio | **Monto del anticipo**. | `index.html:600` |
| 2.11 | Plazo intermedio | **Costo total del plan**. | `index.html:601` |
| 2.12 | Plazo intermedio | **Tasa de interés, comisiones y CAT** cuando aplique. | `index.html:602` |
| 2.13 | Plazo largo | Número de **mensualidades**. | `index.html:611` |
| 2.14 | Plazo largo | **Monto de la mensualidad**. → De aquí sale la línea "desde $X al mes" del hero (`index.html:63`): **no es una decisión aparte, es el mismo número**. | `index.html:612`, y derivado en `:63` |
| 2.15 | Plazo largo | **Monto del anticipo**. | `index.html:613` |
| 2.16 | Plazo largo | **Costo total del plan**. | `index.html:614` |
| 2.17 | Plazo largo | **Tasa de interés, comisiones y CAT** cuando aplique. Si la tasa es la misma que la del plazo intermedio, 2.12 y 2.17 son **una sola respuesta**: confírmenlo. | `index.html:615` |

### 🔴 Bloqueantes — respuestas de la FAQ de financiamiento

Seis preguntas distintas, seis respuestas distintas. Redáctenlas como se le explican al paciente
en ventanilla, no como se leen en un contrato.

| # | Pregunta | Ubicación | Nota |
|---|---|---|---|
| 2.18 | ¿Qué sucede si no soy candidato? | `index.html:777` | **Respuesta a tres manos:** el Dr. define la parte clínica, administración qué pasa con el anticipo y legal revisa la redacción. |
| 2.19 | ¿El anticipo es reembolsable? | `index.html:784` | Requiere visto bueno de legal. |
| 2.20 | ¿Puedo adelantar pagos? | `index.html:791` | — |
| 2.21 | ¿Qué ocurre si se pospone la cirugía? | `index.html:798` | — |
| 2.22 | ¿La mensualidad puede cambiar? | `index.html:812` | Requiere visto bueno de legal. |
| 2.23 | ¿Hay penalización o intereses moratorios? | `index.html:819` | Requiere visto bueno de legal. |

> La octava pregunta de esa sección (**"¿Primero se decide si soy candidato o primero el
> financiamiento?"**) **ya está contestada** y no necesita respuesta de nadie: *"Primero. La
> valoración médica determina si la manga gástrica es la mejor opción para ti. Solo después se
> elige cómo financiarla."*

---

## 3. Legal (4 marcadores + 3 revisiones sin marcador)

### 🔴 Bloqueantes con marcador en la página

| # | Qué falta | Una respuesta | Ubicación |
|---|---|---|---|
| 3.1 | **Aviso de privacidad**: el documento publicado y su URL. Sin él, la casilla de consentimiento del formulario no es válida. | ✅ **1 respuesta → 2 lugares** | `index.html:915` (casilla del formulario), `:961` (pie) |
| 3.2 | **Publicidad sanitaria (COFEPRIS)**: revisar requisitos y, si aplica, número de registro o autorización. | — | `index.html:971` |
| 3.3 | **Vigencia real de las condiciones financieras.** Si tienen fecha de término, se publica tal cual. Si no la tienen, **se retira la frase**: no se fabrica urgencia. | — | `index.html:624` |

### 🔴 Bloqueantes sin marcador (revisiones, no huecos de texto)

| # | Qué hay que revisar |
|---|---|
| 3.4 | **Avisos de financiamiento frente a la Ley Federal de Protección al Consumidor (PROFECO).** La página ya trae un aviso visible en el cuerpo —no escondido en el pie— junto a cada mención de precio o mensualidad: hero, planes de pago, qué incluye, FAQ de financiamiento y formulario final. Todos dicen: sujeto a valoración médica y aprobación crediticia, aplican plazo, anticipo, intereses, comisiones y condiciones, y hay que consultar costo total y qué incluye. **Falta que legal valide esa redacción y confirme si el CAT debe expresarse de una forma específica.** |
| 3.5 | **Consentimientos de testimonios** (ver 1.12): formato de consentimiento escrito antes de publicar cualquier testimonio. |
| 3.6 | **Coherencia de las respuestas de la FAQ de financiamiento** (2.19, 2.22, 2.23) con lo que dice el contrato que firma el paciente. |

---

## 4. Marketing (13 marcadores)

### 🔴 Bloqueantes

| # | Qué falta | Una respuesta | Ubicación |
|---|---|---|---|
| 4.1 | **URL definitiva del sitio.** Es también el único punto que baja el SEO en la auditoría (`rel="canonical"`). | ✅ **1 respuesta → 7 lugares** | `index.html:11` (canonical), `:19` (`og:url`), `:997`, `:1000`, `:1015`, `:1018`, `:1020` (los `@id` y `url` del schema) |
| 4.2 | **Retrato profesional del Dr. Bernal** (foto real, en consultorio o quirófano). Lo entrega el Dr. (1.14). | ✅ **1 respuesta → 2 lugares** | `index.html:137` (sección Experiencia), `:1019` (schema `image`) |
| 4.3 | **Foto del Dr. Bernal con su equipo quirúrgico** para el hero. JPG/WebP, 1200×900 px, con texto alternativo descriptivo. Sin banco de imágenes. | — | `index.html:83` |
| 4.4 | **Imagen para redes sociales** (Open Graph, 1200×630 px, foto real). | — | `index.html:20` |
| 4.5 | **Ciudad en el `<title>`.** Depende de 1.2: en cuanto el Dr. confirme la ciudad, se propaga aquí y al schema. | — | `index.html:8` (contabilizado en 1.2) |
| 4.6 | **ID de Google Analytics 4** (`G-XXXXXXXXXX`). | — | `index.html:24` |
| 4.7 | **ID de Meta Pixel.** | — | `index.html:25` |

> **Aviso para campañas:** el evento `click_cta_valoracion` **ya no se dispara**. Los eventos
> que emite la página ahora son `click_cta_plan`, `click_cta_simulacion`, `click_cta_dudas`,
> `click_whatsapp`, `form_submit` y `faq_open`. Si hay informes o audiencias construidos sobre
> el nombre anterior, hay que actualizarlos antes de encender la campaña.

### 🟢 Deseables

| # | Qué falta |
|---|---|
| 4.8 | Verificar el dato de audiencia del brief (rango de edad y proporción de mujeres) con datos reales antes de usarlo en campañas. No está en la página: es documento de estrategia. |

---

## 5. Fuera de la página: documentación que hay que alinear

No bloquean la publicación, pero quedan inconsistentes si no se corrigen junto con 1.1.

| Dónde | Qué dice hoy |
|---|---|
| `docs/BRIEF.md:42` | "Cifras reales (20+ años, 4,000+ cirugías)" |
| `docs/BRIEF.md:67` | "Más de 20 años de experiencia y más de 4,000 cirugías…" |
| `docs/BRIEF.md:71` | "20+ años · 4,000+ cirugías · Equipo certificado…" |
| `docs/BRIEF.md:94` | "Más de 20 años en cirugía y tratamiento de obesidad…" |

`docs/BRIEF.md` ya lleva una nota de vigencia al inicio que advierte del conflicto y del cambio
de posicionamiento. `PENDIENTES.md` ya se corrigió.

---

## 6. Marcadores que **no** son pendientes (no los toquen)

En `assets/js/analitica.js` aparece la palabra `COMPLETAR` tres veces, pero **son código y
comentarios, no huecos por llenar**:

| Ubicación | Qué es |
|---|---|
| `analitica.js:11` | Comentario que explica que los IDs de analítica aún no existen. Se actualiza solo cuando se instalen GA4 y Meta Pixel (4.6, 4.7). |
| `analitica.js:76` | **Lógica de seguridad**: detecta si el `action` del formulario sigue en placeholder. Debe quedarse. |
| `analitica.js:95` | Texto del aviso que ve el usuario si intenta enviar el formulario sin destino. Deja de mostrarse solo cuando se resuelve 2.3. |

---

## 7. Checklist de publicación

- [ ] **Grupo 1 — Dr. Bernal:** 26 bloqueantes resueltos, 2 decisiones tomadas (testimonios y cifras de resultados) y las 2 fotos reales entregadas.
- [ ] **Grupo 2 — Financiera / administración:** 34 bloqueantes resueltos, con documento que respalde cada monto, plazo y tasa.
- [ ] **Grupo 3 — Legal:** 4 bloqueantes resueltos — aviso de privacidad publicado, COFEPRIS revisado, vigencia resuelta o frase retirada, y visto bueno de PROFECO sobre los avisos de financiamiento.
- [ ] **Grupo 4 — Marketing:** 13 bloqueantes resueltos — URL definitiva, fotos reales cargadas y comprimidas (WebP) con texto alternativo, IDs de analítica instalados y campañas migradas a los nuevos eventos.
- [ ] Formulario probado de punta a punta: llega el dato y alguien lo contesta.
- [ ] Enlace de WhatsApp probado desde un teléfono real, con el mensaje prellenado correcto.
- [ ] Si no hay testimonios con consentimiento, la sección **se eliminó** del HTML.
- [ ] `grep -rn "COMPLETAR\|VALIDAR" index.html` sale vacío.
- [ ] Volver a medir Lighthouse con las fotos reales y en el servidor final.
- [ ] Servidor final con compresión (gzip o Brotli) y caché de assets estáticos.
