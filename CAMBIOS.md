# CAMBIOS — Ajuste de copy y estructura de MANGA GÁSTRICA SEGURA

Fecha del ajuste: 2026-09-03.

**Idea que gobierna la página después de este ajuste:**

> No bajamos el estándar: cambiamos la forma de pagarlo.

La accesibilidad del programa proviene de un **esquema de financiamiento en mensualidades**,
no de una reducción en cirujano, equipo, hospital, insumos, protocolos o seguimiento. Todo el
copy separa el **valor clínico** (que no cambia) de la **facilidad financiera** (que es lo nuevo).

> 📌 Para repartir el trabajo, usa [`PENDIENTES-CONSOLIDADO.md`](PENDIENTES-CONSOLIDADO.md):
> los 80 marcadores agrupados por responsable y ordenados de bloqueante a deseable.
> Este archivo es la bitácora del cambio de copy y estructura.

> ⚠️ **La página no está lista para publicarse.** Quedan **38 marcadores `[VALIDAR]`** y
> **42 marcadores `[COMPLETAR]`** heredados. Ninguno se inventó ni se rellenó.
> Verificación antes de publicar: `grep -rn "COMPLETAR\|VALIDAR" index.html` debe salir vacío.

---

## 1. Archivos modificados y qué cambió en cada uno

### `index.html`

**a) Nuevo orden de secciones (anclaje de valor antes del precio).**
Las secciones se reordenaron sin rediseñar la página. Orden publicado:

| # | Sección | Origen |
|---|---|---|
| 1 | Hero | reescrito |
| — | Barra de confianza | conservada (años → `[VALIDAR]`) |
| — | Empatía ("Si estás aquí, probablemente te preguntas…") | conservada sin cambios |
| 2 | Experiencia — El Dr. Héctor Bernal y su equipo | conservada, movida y ajustada |
| 3 | Seguridad — La fórmula de la seguridad | conservada, movida, CTA ajustado |
| — | ¿Qué es la manga gástrica? | conservada sin cambios (sección médica) |
| — | Tu proceso paso a paso | conservada (solo se quitó una frase de marca duplicada) |
| — | Hablemos de riesgos con honestidad | conservada sin cambios (sección médica) |
| — | Resultados: qué sí podemos decirte | conservada sin cambios (sección médica) |
| — | Testimonios | conservada sin cambios |
| 4 | Acompañamiento — "La atención no termina al salir del quirófano" | **nueva** |
| 5 | Cómo logramos la accesibilidad | reescrita (era "Más accesible no significa menos segura") |
| 6 | Planes de pago | **nueva** (sustituye a "Inversión") |
| 7 | Qué incluye tu procedimiento | **nueva** |
| — | Preguntas que casi todos hacen (FAQ general) | conservada, menos dos preguntas |
| 8 | Preguntas frecuentes sobre el financiamiento | **nueva** |
| 9 | CTA final + formulario | conservada, CTAs y textos ajustados |

Las secciones médicas ya redactadas conservan su lugar entre el bloque de seguridad y el bloque
financiero, de modo que el paciente lee qué es, cómo es el proceso, qué riesgos hay y qué puede
esperar **antes** de ver un solo número. La única mención de dinero anterior a la sección 5 es la
línea de mensualidad del hero, con su aviso legal inmediatamente debajo.

**b) Hero reescrito** con la jerarquía solicitada: nombre del programa, "La calidad no cambia.
La forma de pagar, sí.", experiencia y cirugías, línea de mensualidad, CTA "Conoce tu plan
personalizado" y el aviso legal del asterisco en texto pequeño.

**c) Sección "Cómo logramos la accesibilidad":** el recuadro placeholder se sustituyó por el
texto definitivo de cuatro párrafos (no bajamos el estándar / obstáculo del pago único /
mismo sistema clínico / primero candidatura, después financiamiento). Se eliminaron el estilo de
borrador (fondo ámbar y borde punteado) y el texto de ayuda interna. La única marca que queda
en ese recuadro es el nombre de la institución financiera.

**d) Sección "Planes de pago":** tres tarjetas reales y comparables (contado, plazo intermedio,
plazo largo). Ninguna opción se degradó artificialmente para empujar otra. Cada tarjeta muestra
sin excepción mensualidades, anticipo, costo total, intereses y comisiones (o CAT cuando aplique)
y dónde aplica (tarjetas o instituciones participantes).

**e) Sección "Qué incluye tu procedimiento":** lista de seis elementos con la línea de
exclusiones. **No se usa "todo incluido" en ninguna parte de la página.**

**f) Sección "Preguntas frecuentes sobre el financiamiento":** acordeón con las ocho preguntas.
Siete tienen la respuesta marcada `[VALIDAR: respuesta]`; la octava lleva la respuesta fija sobre
el orden (primero la valoración médica, después el financiamiento) y también se agregó al
JSON-LD de `FAQPage`.

**g) CTAs (escalera de microcompromisos):**

| Dónde | Antes | Ahora |
|---|---|---|
| Encabezado fijo | "Agendar valoración" → `#valoracion` | "Conoce tu plan" → `#planes` |
| Hero | "Agendar mi valoración" | "Conoce tu plan personalizado" |
| Hero (secundario) | "Hablar por WhatsApp" | "Resuelve tus dudas por WhatsApp" |
| Sección de seguridad | "Agendar mi valoración" | "Resuelve tus dudas" → `#faq` |
| Planes de pago | (no existía) | "Solicita una simulación personalizada" + "Resuelve tus dudas" |
| Botón del formulario | "Solicitar valoración" | "Solicita una simulación personalizada" |
| WhatsApp del formulario | "¿Prefieres WhatsApp? Escríbenos" | "Resuelve tus dudas por WhatsApp" |

El CTA de agendar valoración sigue existiendo, pero ya no está en el hero: vive en la sección
final, después de las dos FAQ, integrado en el formulario ("En esta misma solicitud agendamos tu
valoración médica"). Se agregó la opción "El financiamiento y las mensualidades" al selector de
principal duda del formulario.

**h) Disclaimers legales (Ley Federal de Protección al Consumidor).** Hay un aviso visible, en
el cuerpo de la página y no escondido en el pie, junto a cada mención de precio o mensualidad:
hero (nota del asterisco), planes de pago, qué incluye tu procedimiento, preguntas frecuentes de
financiamiento y formulario final. Todos dicen lo mismo: sujeto a valoración médica y aprobación
crediticia, aplican plazo, anticipo, intereses, comisiones y condiciones, y hay que consultar el
costo total y qué incluye el procedimiento.

**i) Frases de marca**, una por sección y no todas juntas:

| Frase | Sección |
|---|---|
| "Experiencia, equipo, insumos, protocolos y seguimiento." | 2. Experiencia |
| "La seguridad comienza antes de entrar al quirófano." | 3. Seguridad (ya estaba ahí) |
| "La cirugía dura unas horas. El acompañamiento continúa después." | 4. Acompañamiento (se movió desde Proceso) |
| "Más accesible no significa menos segura." | 5. Cómo logramos la accesibilidad |

**j) Metadatos.** `meta description`, `og:title` y `og:description` se reescribieron para hablar
de forma de pago y no de precio más bajo. `title`, `canonical`, `og:url` y `og:image` siguen con
sus `[COMPLETAR]` originales.

### `assets/css/styles.css`

- Se **eliminó** `.inversion__tarjeta` (la sección "Inversión" ya no existe).
- Se **agregaron**, usando los tokens de color y tipografía existentes, sin tocar la paleta:
  `.rejilla-3`, `.plan`, `.plan__ventaja`, `.plan__datos` (tarjetas de planes de pago),
  `.aviso-legal` (texto legal junto a precios), `.lista-incluye` (listas a dos columnas de
  acompañamiento y de qué incluye), `.hero__marca` y `.hero__legal`, y un `max-width` de 24ch
  para el nuevo titular del hero.
- **No se cambió** ningún color, tipografía ni componente existente. El estilo de borrador
  (`.pendiente`) se conserva como convención del proyecto para marcar lo que falta, y se quitó
  únicamente del recuadro de la sección "Cómo logramos la accesibilidad", como se pidió.

### `assets/js/analitica.js`

- Solo un comentario: se actualizó la lista de eventos. El detector es genérico
  (`[data-evento]`), así que los nuevos nombres funcionan sin cambios de código.
- Eventos que emite ahora la página: `click_cta_plan`, `click_cta_simulacion`,
  `click_cta_dudas`, `click_whatsapp`, `form_submit`, `faq_open`. **`click_cta_valoracion` ya
  no se dispara**: si hay informes o campañas que dependan de ese nombre, hay que actualizarlos.
- El bloqueo de envío del formulario mientras `action` siga en `[COMPLETAR]` **sigue activo**.

### `README.md` y `PENDIENTES.md`

Actualizados para reflejar el nuevo posicionamiento, el nuevo objetivo de conversión, la
existencia de este archivo y la nueva verificación previa a publicar
(`grep -rn "COMPLETAR\|VALIDAR" index.html`). Los puntos 8, 14, 15 y 16 de `PENDIENTES.md`
se reescribieron para apuntar a las secciones nuevas.

### `docs/BRIEF.md`

Se agregó una nota de vigencia al inicio. **No se borró nada del brief**: es el documento
histórico del proyecto. La nota advierte que donde el brief hable de "ahorro", "optimizar costos"
o "precio más bajo", rige el copy publicado en `index.html` y este registro.

---

## 2. Todos los `[VALIDAR]` pendientes (38)

Nada de esto se inventó. Ubicación exacta para que el Dr. Bernal y el equipo los completen
antes de publicar.

| Ubicación | Sección | Qué falta |
|---|---|---|
| `index.html:9` | `meta description` | `[VALIDAR: 18 o más de 20 años]` |
| `index.html:59` | 1. Hero | `[VALIDAR: 18 / más de 20]` |
| `index.html:63` | 1. Hero | `[VALIDAR: $ mensualidad]` |
| `index.html:95` | Barra de confianza | `[VALIDAR: 18 o más de 20 años]` |
| `index.html:145` | 2. Experiencia | `[VALIDAR: 18 o más de 20 años]` |
| `index.html:487` | 4. Acompañamiento | `[VALIDAR: número de consultas y en qué momentos]` |
| `index.html:496` | 4. Acompañamiento | `[VALIDAR: estudios de control incluidos y su frecuencia]` |
| `index.html:501` | 4. Acompañamiento | `[VALIDAR: canal y horario de atención]` |
| `index.html:505` | 4. Acompañamiento | `[VALIDAR: duración total del seguimiento incluido]` |
| `index.html:546` | 5. Cómo logramos la accesibilidad | `[VALIDAR: institución financiera / nombre]` |
| `index.html:583` | 6. Planes — contado | `[VALIDAR: solo si existe un descuento real por pago de contado]` |
| `index.html:588` | 6. Planes — contado | `[VALIDAR: monto]` |
| `index.html:590` | 6. Planes — contado | `[VALIDAR: formas de pago aceptadas: efectivo, transferencia, tarjetas o instituciones participantes]` |
| `index.html:598` | 6. Planes — plazo intermedio | `[VALIDAR: número de mensualidades]` |
| `index.html:599` | 6. Planes — plazo intermedio | `[VALIDAR: monto de la mensualidad]` |
| `index.html:600` | 6. Planes — plazo intermedio | `[VALIDAR: monto del anticipo]` |
| `index.html:601` | 6. Planes — plazo intermedio | `[VALIDAR: costo total del plan]` |
| `index.html:602` | 6. Planes — plazo intermedio | `[VALIDAR: tasa de interés, comisiones y CAT cuando aplique]` |
| `index.html:603` | 6. Planes — plazo intermedio | `[VALIDAR: tarjetas o instituciones participantes]` |
| `index.html:611` | 6. Planes — plazo largo | `[VALIDAR: número de mensualidades]` |
| `index.html:612` | 6. Planes — plazo largo | `[VALIDAR: monto de la mensualidad]` |
| `index.html:613` | 6. Planes — plazo largo | `[VALIDAR: monto del anticipo]` |
| `index.html:614` | 6. Planes — plazo largo | `[VALIDAR: costo total del plan]` |
| `index.html:615` | 6. Planes — plazo largo | `[VALIDAR: tasa de interés, comisiones y CAT cuando aplique]` |
| `index.html:616` | 6. Planes — plazo largo | `[VALIDAR: tarjetas o instituciones participantes]` |
| `index.html:623` | 6. Planes — aviso legal | `[VALIDAR: institución financiera / nombre]` |
| `index.html:624` | 6. Planes — aviso legal | `[VALIDAR: vigencia real de las condiciones]` |
| `index.html:647` | 7. Qué incluye | `[VALIDAR: estudios y valoraciones que incluye]` |
| `index.html:657` | 7. Qué incluye | `[VALIDAR: días de hospitalización incluidos]` |
| `index.html:665` | 7. Qué incluye | `[VALIDAR: duración y número de consultas]` |
| `index.html:671` | 7. Qué incluye | `[VALIDAR: lista de exclusiones]` |
| `index.html:777` | 8. FAQ financiamiento | `[VALIDAR: respuesta]` — ¿Qué sucede si no soy candidato? |
| `index.html:784` | 8. FAQ financiamiento | `[VALIDAR: respuesta]` — ¿El anticipo es reembolsable? |
| `index.html:791` | 8. FAQ financiamiento | `[VALIDAR: respuesta]` — ¿Puedo adelantar pagos? |
| `index.html:798` | 8. FAQ financiamiento | `[VALIDAR: respuesta]` — ¿Qué ocurre si se pospone la cirugía? |
| `index.html:805` | 8. FAQ financiamiento | `[VALIDAR: respuesta]` — ¿Quién proporciona el financiamiento? |
| `index.html:812` | 8. FAQ financiamiento | `[VALIDAR: respuesta]` — ¿La mensualidad puede cambiar? |
| `index.html:819` | 8. FAQ financiamiento | `[VALIDAR: respuesta]` — ¿Hay penalización o intereses moratorios? |

> Las líneas se mueven en cuanto alguien edite el archivo. Para regenerar la lista:
> `grep -n "\[VALIDAR" index.html`

**Además siguen abiertos los 42 marcadores `[COMPLETAR]` heredados** (WhatsApp, destino del
formulario, ciudad y hospital, cédula, certificaciones, fotos reales, aviso de privacidad,
COFEPRIS, URL definitiva, IDs de analítica, duración de la cirugía, días de hospitalización,
testimonios y cifras de resultados). Están registrados en `PENDIENTES.md`.

---

## 3. Discrepancia "18 años" vs. "más de 20 años"

**No se eligió ninguna de las dos.** En cada aparición quedó un marcador `[VALIDAR]`.

**Apariciones en la página (`index.html`): 4.**

| # | Ubicación | Texto original | Ahora |
|---|---|---|---|
| 1 | `index.html:9` — `meta description` | "…con más de 20 años de experiencia y más de 4,000 cirugías…" | `[VALIDAR: 18 o más de 20 años]` |
| 2 | `index.html:59` — hero (subtítulo) | "Más de 20 años de experiencia y más de 4,000 cirugías." | `[VALIDAR: 18 / más de 20]` |
| 3 | `index.html:95` — barra de confianza | "20+ / años de experiencia" | `[VALIDAR: 18 o más de 20 años]` / "de experiencia" |
| 4 | `index.html:145` — sección Experiencia | "Más de 20 años dedicados a la cirugía y al tratamiento de la obesidad." | `[VALIDAR: 18 o más de 20 años]` |

**Apariciones fuera de la página, en documentación del proyecto: 5** (4 en el brief y 1 en
`PENDIENTES.md`). No llevan marcador porque no se publican, pero hay que corregirlas cuando se
resuelva la cifra: `docs/BRIEF.md:42`, `docs/BRIEF.md:67`, `docs/BRIEF.md:71` y
`docs/BRIEF.md:94`. La de `PENDIENTES.md` (sección 6, "Decisiones tomadas al construir")
**ya se corrigió** en este ajuste: ahora señala la discrepancia en vez de afirmar los 20 años.

En `docs/BRIEF.md` se agregó una nota de vigencia que avisa del conflicto. **La cifra la decide
el Dr. Bernal**, y debe quedar igual en la página, en el brief y en los materiales de campaña.

---

## 4. Texto eliminado por violar las reglas absolutas

### 4.1 Lenguaje de "precio más bajo" / "ahorro" (regla: hablar de forma de pago, no de reducción de precio)

| Dónde estaba | Texto original eliminado |
|---|---|
| `meta description` | "No sacrificamos seguridad. Hicimos la cirugía más accesible. Manga gástrica con más de 20 años de experiencia y más de 4,000 cirugías. Agenda tu valoración." |
| `og:title` | "Manga gástrica segura y accesible \| Dr. Héctor Bernal" |
| `og:description` | "No sacrificamos seguridad. Hicimos la cirugía más accesible. Conoce qué hace segura una manga gástrica y agenda tu valoración." |
| Hero, `h1` | "Manga gástrica segura y accesible. Sin sacrificar lo que protege tu vida." |
| Hero, subtítulo | "Más de 20 años de experiencia y más de 4,000 cirugías. Hicimos la cirugía más accesible cuidando cada elemento que hace segura una manga gástrica: valoración, equipo, hospital, insumos y seguimiento." |
| Sección "Más accesible no significa menos segura", intro | "Si un precio más bajo te hace desconfiar, tu duda es razonable. Por eso aquí no te pedimos que confíes: te mostramos qué cosas nunca se recortan y de dónde sí viene el ahorro." |
| Misma sección, frase de cierre | "Optimizamos costos. No optimizamos tu seguridad." |
| Sección "Inversión", intro | "Nuestro objetivo fue hacer la cirugía más accesible sin reducir los elementos esenciales para su seguridad." |
| Sección "Inversión", `h2` | "Hablemos del costo, ahora que ya sabes qué incluye" |
| Sección "Inversión", tarjeta | "Conoce la inversión y las opciones de pago en tu valoración" + "Preferimos darte una cifra después de conocer tu caso, porque el costo depende de tu valoración, de los estudios que necesites y de tus condiciones de salud. Así evitamos darte un número que después cambie." |

En todos los casos el reemplazo habla de **forma de pago**, no de reducción de precio.
El texto de la tarjeta de Inversión, además, ya no aplica: ahora la página sí publica una
arquitectura de planes (con sus montos pendientes de validar), en vez de posponer la
conversación de dinero a la consulta.

### 4.2 Texto de trabajo interno visible en la página

| Dónde estaba | Texto original eliminado |
|---|---|
| Tarjeta "Cómo logramos la accesibilidad" | "[COMPLETAR con la explicación real: volumen de cirugías, convenios hospitalarios, procesos optimizados, etc. — el Dr. Bernal debe validar y autorizar esta redacción antes de publicar. No se redacta nada aquí sin su confirmación.]" |
| Misma tarjeta, nota | "Esta sección es el corazón de la promesa. Debe explicar el origen real del ahorro, con datos que se puedan sostener frente a un paciente que pregunte." |

### 4.3 Preguntas de la FAQ general absorbidas por las secciones nuevas

| Pregunta eliminada | Texto original de la respuesta | Dónde vive ahora |
|---|---|---|
| "¿Qué incluye el precio?" | "[COMPLETAR lista oficial de lo que incluye: honorarios, hospital, insumos, estudios, consultas de seguimiento, etc. Solo información autorizada por el Dr. Bernal.]" | Sección 7, "Qué incluye tu procedimiento" |
| "¿Hay financiamiento?" | "[COMPLETAR solo con opciones oficiales de pago o financiamiento, si existen. No se publican meses sin intereses, convenios ni coberturas de seguros sin confirmación documentada.]" | Secciones 5, 6 y 8 |

### 4.4 Frase de marca duplicada

| Dónde estaba | Texto |
|---|---|
| Sección "Tu proceso paso a paso", cierre | "La cirugía dura unas horas. El acompañamiento continúa después." |

No se eliminó del sitio: se movió a la sección 4 (Acompañamiento), para cumplir la regla de
máximo una frase de marca por sección. La sección de proceso no se tocó en nada más.

### 4.5 Copy prohibido que se buscó y **no** se encontró

Se auditó toda la página y la documentación. Estos textos **no existían**, así que no hubo nada
que eliminar:

- **"todo incluido"** y variantes: 0 apariciones. La página usa "tu procedimiento incluye:"
  seguido de una lista concreta.
- **"esto sí termina"** y cualquier variante que presente la manga como solución definitiva:
  0 apariciones. La página ya decía lo contrario ("Es una herramienta metabólica, no una
  solución mágica"). La formulación pedida —*"Una intervención de largo plazo, acompañada por un
  equipo con experiencia"*— se incorporó como intro de la sección 4, Acompañamiento.
- **Copy basado en miedo** ("si no te operas…", "última oportunidad"), contadores regresivos o
  urgencia artificial: 0 apariciones. La única mención de vigencia es la de las condiciones
  financieras, marcada `[VALIDAR: vigencia real de las condiciones]`, y no se redactó como
  urgencia.
- **Promesas de resultado** ("vas a perder X kilos", "peso ideal", "funciona al 100%"):
  0 apariciones.
- **Ataques a otros cirujanos, hospitales o tratamientos**: 0 apariciones. La FAQ de GLP-1 ya
  estaba redactada como complementariedad, no como rivalidad.

---

## 5. Verificaciones hechas

- Estructura HTML balanceada (parser completo, sin etiquetas sin cerrar ni cierres sobrantes).
- Ninguna mensualidad ni precio aparece antes de la sección 5, salvo la línea del hero.
- Cada mención de precio o mensualidad tiene su aviso legal visible en el cuerpo de la página.
- Cada tarjeta de plan muestra los cinco datos obligatorios, sin excepción.
- Render revisado en escritorio (1280 px) para hero, accesibilidad, planes, qué incluye,
  acompañamiento y FAQ de financiamiento.
- No se tocó el framework, el build, las dependencias, la paleta, la tipografía ni los
  componentes existentes.

## 6. Lo que falta antes de publicar

1. Que el Dr. Bernal y el equipo completen los 38 `[VALIDAR]` de la sección 2.
2. Que se resuelvan los 42 `[COMPLETAR]` de `PENDIENTES.md`.
3. Que se resuelva la discrepancia de años (sección 3) en la página y en todos los materiales.
4. Revisión legal de los avisos de financiamiento frente a la Ley Federal de Protección al
   Consumidor y, si aplica, de publicidad sanitaria ante COFEPRIS.
5. `grep -rn "COMPLETAR\|VALIDAR" index.html` debe salir vacío.

**No se publicó ni se desplegó nada.**

---

# Cierre de marcadores — 3 de septiembre de 2026

Segundo pase sobre la página, con las respuestas del Dr. Bernal y de administración.
**72 de los 80 marcadores quedaron cerrados.** Los 8 abiertos y su motivo están en
[`PENDIENTES-CONSOLIDADO.md`](PENDIENTES-CONSOLIDADO.md).

## 7. Decisión de fondo: la página ya no muestra cifras

**No se publica ningún precio, mensualidad, anticipo, tasa ni CAT.** Toda la información
financiera se le explica al paciente por teléfono o en persona, y la simulación personalizada es
la puerta de entrada. Esto reemplaza la arquitectura de tres tarjetas comparables del pase
anterior: no se llenaron sus cifras, se retiraron.

Consecuencias en la página:

- **Hero**: fuera la línea "desde $X al mes" y su asterisco. Entra "Planes de pago de 6 a 36
  meses a través de Mend" y, en texto pequeño, "Sujeto a valoración médica y aprobación de
  financiamiento". El CTA pasa a "Solicita tu simulación personalizada" y apunta al formulario.
- **Planes de pago**: las tres tarjetas con mensualidades, anticipos, costo total, intereses y
  CAT se sustituyen por una sola tarjeta, "Tu plan se diseña contigo", que explica por qué no
  hay cifras publicadas. Se conserva el encabezado "Quizá no fue falta de decisión…".
- **Disclaimers de precio**: eliminados de planes, de qué incluye y de la FAQ de financiamiento,
  porque ya no hay cifra que matizar. Queda uno solo, en el pie: *"Sujeto a valoración médica y
  aprobación de financiamiento por Mend. Los resultados de la cirugía varían según cada
  paciente."*
- Verificado: `grep -n '\$' index.html` no devuelve nada.

## 8. Datos que se cerraron

| Dato | Valor publicado | Dónde |
|---|---|---|
| Años de experiencia | **20 años** (se resolvió la discrepancia 18 / más de 20) | `meta description`, `og:description`, hero, barra de confianza, sección Experiencia, pie y `description` del `Physician` en el schema |
| Hospitales | **Hospital Star Médica Chihuahua** y **Enalta Medical Center**, Chihuahua | `<title>`, perfil, FAQ "¿Dónde se realiza la cirugía?", "Qué incluye", pie y schema |
| Seguimiento | **1 año con equipo multidisciplinario** | Barra de confianza, Acompañamiento, "Qué incluye" |
| Contacto | **Georgina, coordinadora de pacientes — 614 407 83 43** (`wa.me/526144078343`) | Los 7 lugares: hero (enlace y texto), formulario, pie (enlace y texto), botón flotante y `telephone` del schema |
| Financiamiento | **Mend**, institución financiera mexicana enfocada exclusivamente en salud. Plazos de **6 a 36 meses** | Hero, "Cómo logramos la accesibilidad", "Planes de pago", FAQ de financiamiento, pie y schema |
| Dominio | `https://mangagastricasegura.com` | `canonical`, `og:url` y los tres `@id` del schema, con un comentario `VERIFICAR` |

## 9. Marcadores cerrados reescribiendo el texto, no rellenándolo

Estos no tenían dato y **no se inventó ninguno**: se reescribió la frase para que no lo necesite.

| Antes | Ahora |
|---|---|
| "Duración aproximada: `[COMPLETAR duración]`" | "La duración depende de tu caso y se te indica en tu valoración." |
| "Permaneces bajo vigilancia médica `[COMPLETAR días de hospitalización]`" | "Permaneces bajo vigilancia médica el tiempo que tu caso requiera" |
| `[COMPLETAR nombres y roles del equipo si se desea publicarlos]` | Se decidió no publicarlos; queda la descripción por disciplinas. |
| `[VALIDAR: estudios de control incluidos y su frecuencia]` | Se retiró la promesa de detalle; queda la descripción del propósito. |
| `[VALIDAR: canal y horario de atención]` | "Georgina, coordinadora de pacientes, por WhatsApp al 614 407 83 43." |
| `[VALIDAR: lista de exclusiones]` | "En tu valoración te explicamos con detalle qué cubre el paquete y qué se cotiza por separado." |
| Comentario de analítica con `[COMPLETAR G-XXXXXXXXXX]` e `[COMPLETAR ID de Meta Pixel]` | Comentario sin marcador: se pegan los scripts cuando existan los identificadores. |
| `streetAddress` y `postalCode` del schema | Se omitieron los campos. Un `PostalAddress` con localidad, estado y país es válido; dejar un campo vacío o inventado no lo es. |

## 10. Secciones eliminadas o reestructuradas

- **Resultados y expectativas: eliminada por completo.** Sin datos propios auditables, una cifra
  de la literatura general en una landing con el nombre del Dr. Bernal se lee como promesa
  personal. Se retiró el HTML; no había CSS ni ancla propios que limpiar.
- **Testimonios: se conserva la sección** con el comentario `PENDIENTE LEGAL` al inicio y las
  instrucciones de consentimiento en un comentario interno. **Hoy renderiza vacía** —solo el
  título—, porque no se entregó ningún testimonio. Antes de publicar hay que llenarla o
  eliminarla.
- **Fotos**: los recuadros de borrador se sustituyeron por `<img>` reales con su texto
  alternativo y rutas `[RUTA PENDIENTE: …]`.
- **Schema**: `MedicalBusiness` con una sola dirección pasa a `MedicalOrganization` con dos
  `location` de tipo `Hospital`, y el `Physician` gana `hospitalAffiliation` con los dos
  hospitales y una `description` con los 20 años. Se añadió la pregunta "¿Quién proporciona el
  financiamiento?" al `FAQPage`.
- **Alternancia de fondos**: al eliminar la sección de resultados se reordenaron los fondos
  hueso/blanco desde Testimonios hasta la FAQ de financiamiento, para que no queden dos
  secciones seguidas del mismo color.

## 11. CSS limpiado

Se eliminaron las reglas que quedaron huérfanas: `.rejilla-3`, `.plan`, `.plan__ventaja`,
`.plan__datos`, `.aviso-legal`, `.pendiente--media` y `.hero__media .pendiente--media`.
Se agregaron `.plan-unico` y los estilos de las dos imágenes (`.hero__media img` y
`.perfil figure img`), con `aspect-ratio` para que no haya salto de maquetación al cargar.

## 12. Verificación ejecutada

| # | Comprobación | Resultado |
|---|---|---|
| 1 | `grep -rn "COMPLETAR\|VALIDAR" index.html` | ❌ **8 líneas**, no vacío. Son los 5 datos que no se entregaron: cédula, certificaciones, destino del formulario, aviso de privacidad y COFEPRIS. No se inventaron. |
| 2 | `grep -n '\$' index.html` | ✅ Sin resultados: no queda ningún precio ni mensualidad. |
| 3 | "20 años" consistente, sin "18" ni "más de 20" | ✅ En los 6 lugares de la página y en el schema. |
| 4 | Teléfono y enlace de WhatsApp idénticos en los 7 lugares | ✅ `614 407 83 43` y `wa.me/526144078343`. |
| 5 | Sección de resultados eliminada, sin HTML residual, CSS huérfano ni ancla | ✅ |
| 6 | Sección de testimonios con el comentario `PENDIENTE LEGAL` | ✅ (pero renderiza vacía, ver punto 10) |
| 7 | Enlaces internos apuntan a secciones existentes | ✅ `#contenido`, `#inicio`, `#planes`, `#faq`, `#faq-financiamiento`, `#valoracion`. |
| — | Estructura HTML balanceada y JSON-LD válido | ✅ |
| — | Render revisado en escritorio (1280 px) | ✅ Hero, experiencia, acompañamiento, accesibilidad, planes, qué incluye y FAQ. |

**No se publicó ni se desplegó nada.**

---

# Cierre final — 3 de septiembre de 2026

**No queda ningún `[COMPLETAR]` ni `[VALIDAR]`** en `index.html` ni en `assets/`.
Quedan 5 pendientes con otra notación, listados en
[`PENDIENTES-CONSOLIDADO.md`](PENDIENTES-CONSOLIDADO.md).

## 13. Credenciales del Dr. Bernal

Publicadas en los tres lugares que pedía la normativa de publicidad de servicios médicos:

| Dónde | Qué se publicó |
|---|---|
| Perfil (`index.html:150-158`) | "Cirujano general con especialidad en cirugía bariátrica y metabólica. Cédula profesional 4134597 · Cédula de especialidad 5679320." Y las dos certificaciones: Consejo Mexicano de Cirugía General y Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas. **Sin años de vigencia**, porque no se proporcionaron. |
| Pie (`index.html:853-855`) | La misma línea de especialidad y las dos cédulas. |
| Schema (`index.html:948-960`) | `Physician.identifier` con dos `PropertyValue`: "Cédula profesional" 4134597 y "Cédula de especialidad" 5679320. La `description` del `Physician` se actualizó a la especialidad correcta. |

## 14. Testimonios → Reseñas de Google

La sección vacía de testimonios se eliminó por completo: HTML, comentario `PENDIENTE LEGAL` y
el `aria-labelledby="t-testimonios"`. No había CSS ni ancla de menú que limpiar.

En su lugar, y en la misma posición, hay una sección breve que enlaza a la ficha de Google:

- Título "Lo que dicen nuestros pacientes" e id `t-resenas`.
- Botón "Lee las opiniones en Google →" a `https://maps.app.goo.gl/6a7LyAsivaTiBoJq8`, con
  `target="_blank"` y `rel="noopener"`.
- Evento `click_reviews_google`, añadido a la lista documentada en `analitica.js`. El listener
  ya era genérico sobre `[data-evento]`, así que no hizo falta código nuevo.
- **Sin cifras de calificación ni de número de opiniones**, y sin copiar texto de ninguna
  reseña: quedarían desactualizadas y serían una afirmación que la página no puede sostener.
  Hay un comentario en el HTML que lo explica, para que nadie las agregue después.

La alternancia de fondos se mantiene: la sección nueva ocupa el mismo lugar y el mismo fondo
que la que sustituyó.

## 15. Formulario conectado

`action="mailto:coordinacion@activame.mx"` con `method="post"` y `enctype="text/plain"`.
Se retiró de `analitica.js` el bloqueo de envío; quedan la validación y el evento `form_submit`,
y el CTA sigue siendo `click_cta_simulacion`.

**Un `mailto` no es un backend** y conviene no confundirlo con uno: abre el cliente de correo del
visitante en lugar de entregar el mensaje, no confirma entrega y no hace nada en un teléfono sin
correo configurado. Por eso se añadió bajo el botón la línea "Al enviar se abre tu aplicación de
correo; si no se abre, escríbenos por WhatsApp", y un comentario en el HTML indicando que basta
cambiar el `action` cuando exista un CRM o webhook. El detalle y la recomendación están en
`PENDIENTES-CONSOLIDADO.md`.

## 16. Imágenes pendientes sin ícono roto

Las dos fotos conservan su `[RUTA PENDIENTE: …]`. Para que eso no se vea como una imagen rota,
`analitica.js` retira la imagen que no carga y marca su `<figure>` con `.media--pendiente`, un
bloque neutro con la proporción correcta (4/3 en el hero, 4/5 en el perfil), de modo que no hay
hueco ni salto de maquetación. Como el script carga con `defer` y una imagen puede fallar antes
de que se registre el listener, también se revisa `img.complete && img.naturalWidth === 0` al
arrancar. Verificado en el DOM renderizado: las dos figuras quedan con el bloque neutro.

El `alt` del retrato pasó a "Dr. Héctor Bernal, cirujano bariátrico".

## 17. og:image retirada

Apuntaba a un archivo inexistente, lo que produce una tarjeta rota al compartir el enlace.
Se eliminó la etiqueta y `twitter:card` bajó a `summary`, con un comentario que indica cómo
restaurarlas cuando exista la foto. Así el único marcador de ruta pendiente son las dos fotos.

## 18. Notación de los pendientes

Los `[COMPLETAR]` y `[VALIDAR]` desaparecieron. Los dos pendientes legales que siguen sin dato
—aviso de privacidad y COFEPRIS— **no se inventaron**: se renombraron a
`[PENDIENTE LEGAL: …]`, que sigue siendo igual de visible en la página pero deja limpio el grep
de verificación. El comando que los encuentra todos es:

```
grep -rn "PENDIENTE\|VERIFICAR" index.html
```

También se renombró un comentario de `styles.css` que decía "Marcador [COMPLETAR]" y hacía ruido
en el grep sin ser un pendiente.

## 19. Verificación ejecutada

| # | Comprobación | Resultado |
|---|---|---|
| 1 | `grep -rn "COMPLETAR\|VALIDAR" index.html assets/` | ✅ Vacío. Solo quedan 2 `[RUTA PENDIENTE]` (las fotos), 2 `[PENDIENTE LEGAL]` y 1 comentario `VERIFICAR`. |
| 2 | Las dos cédulas idénticas en perfil, pie y schema | ✅ 4134597 y 5679320 en los tres. |
| 3 | Envío de prueba a coordinacion@activame.mx | ⚠️ **No ejecutable.** Un `mailto` no tiene servidor que reciba: la prueba depende del cliente de correo de cada visitante. Ver punto 15. |
| 4 | Sin sección vacía en el render; sin ancla huérfana | ✅ La sección de reseñas tiene contenido y botón; `t-testimonios` ya no existe y ningún `href` ni `aria-labelledby` apunta a algo inexistente. |
| 5 | JSON-LD válido | ✅ Parseado con `json.loads`; `identifier` correcto. |
| — | Estructura HTML balanceada | ✅ |
| — | Render revisado a 1280 px | ✅ Hero con bloque neutro en lugar de imagen rota, perfil con credenciales, sección de reseñas. |

**No se publicó ni se desplegó nada.**

---

# El formulario entrega por WhatsApp — 3 de septiembre de 2026

Sustituye el `mailto:` del cierre anterior, que no era un backend y perdía solicitudes en
dispositivos sin correo configurado.

## 20. Cómo funciona ahora

Al enviar, `assets/js/analitica.js` valida el formulario, arma el mensaje con los datos
capturados y abre `https://wa.me/526144078343` con el texto ya redactado, codificado con
`encodeURIComponent`. El paciente lo revisa y lo manda desde su propio WhatsApp.

Mensaje que se construye:

> Hola Georgina, quiero solicitar una simulación personalizada para manga gástrica.
> Nombre: X. Teléfono: X. Ciudad: X. Dudas: X.

De la lista desplegable de dudas se toma **el texto visible de la opción**, no su valor interno,
y solo si el paciente eligió alguna. **Si además escribió algo en "¿Quieres contarnos algo
más?", ese texto se agrega al final**: dejarlo fuera habría descartado en silencio lo único que
el paciente redactó con sus palabras.

Detalles de implementación:

- Se abre en una pestaña nueva (`window.open` con `noopener`), así que la landing no se pierde;
  si el navegador bloquea la ventana, cae en `window.location.href`.
- La validación del navegador sigue activa: con un campo obligatorio vacío no se abre nada.
- El `action` del formulario pasó de `mailto:` a `https://wa.me/526144078343` con `method="get"`.
  Es la degradación sin JavaScript: abre la misma conversación, aunque sin los datos
  prellenados.
- Se retiró la línea "Al enviar se abre tu aplicación de correo…" y en su lugar dice
  "Al enviar se abre WhatsApp con tus datos listos para mandarle a Georgina".
- El botón "Resuelve tus dudas por WhatsApp" sigue debajo del formulario como alternativa
  directa, sin datos.
- Se conservan los eventos `click_cta_simulacion` (en los CTA del hero y de planes de pago) y
  `form_submit`, que sigue registrando la duda principal.
- `coordinacion@activame.mx` queda **solo en el pie**, como dato de contacto enlazado.

## 21. Prueba ejecutada

Envío real en Chromium, interceptando `window.open`:

```
Hola Georgina, quiero solicitar una simulación personalizada para manga gástrica.
Nombre: María Elena Ríos. Teléfono: 6141234567. Ciudad: Chihuahua.
Dudas: Si soy candidato o no. Tengo diabetes tipo 2 y quiero saber si puedo operarme.
```

Verificado: acentos y signos correctamente codificados, la página no navega fuera, y con el
campo de nombre vacío el envío se bloquea sin abrir ninguna URL.

Lo que este esquema **no** resuelve: no queda registro de la solicitud fuera del WhatsApp de
Georgina, y no se puede medir cuántas personas llenan el formulario y no llegan a mandar el
mensaje. Si se quiere trazabilidad, hay que conectar un CRM o webhook; el comentario en el HTML
señala dónde.


---

# Fotos reales conectadas — 3 de septiembre de 2026

## 22. Las dos imágenes

`scripts/aplicar-fotos.py` conectó los cuatro archivos que el equipo subió a `assets/img/`:

| Foto | Dimensiones | JPG | WebP | Dónde |
|---|---|---|---|---|
| `foto-equipo` | 1800×1200 | 166 KB | 81 KB | Hero y `og:image` |
| `foto-dr-bernal` | 1000×1250 | 122 KB | 64 KB | Sección Experiencia y `image` del schema |

Las dos van en un `<picture>` con el WebP como fuente principal y el JPG de respaldo. El hero
lleva `loading="eager"` y `fetchpriority="high"` (está sobre el pliegue); el retrato,
`loading="lazy"`. Ambas con `width` y `height` explícitos para que no haya salto de maquetación.
Se restauró `og:image` con sus dimensiones y `alt`, y `twitter:card` volvió a
`summary_large_image`.

## 23. Encuadre verificado con las fotos reales

Medido en navegador, con las imágenes cargadas:

| Figura | Fuente | Contenedor | Recorte | Resultado |
|---|---|---|---|---|
| Retrato | 1000×1250 (4:5) | `aspect-ratio: 4/5` | Ninguno | Coincidencia exacta |
| Hero | 1800×1200 (3:2) | `aspect-ratio: 4/3` | 11 % del ancho, 5.5 % por lado | La cara queda holgada |

**No hizo falta tocar `object-position`**, ni a 380 px ni a 1280 px: la cara del Dr. está hacia
el 62 % horizontal y la ventana visible va del 5.5 % al 94.5 %. Se revisó el recorte real de
cada figura en los dos anchos.

Chromium sirve el WebP en las dos, no hay respuestas 4xx y no hay errores de JavaScript. El
fallback `media--pendiente` ya no se activa en ninguna figura; la lógica sigue en
`analitica.js` por si vuelve a hacer falta.

## 24. Cero marcadores

`index.html` ya no tiene ningún `[COMPLETAR]`, `[VALIDAR]`, `[PENDIENTE]` ni `[RUTA PENDIENTE]`.
Los tres pendientes que quedan —aviso de privacidad, COFEPRIS y dominio— viven como comentarios
HTML invisibles.

`scripts/verificar-despliegue.sh` sale en verde en las cuatro comprobaciones de marcadores. Se
corrigió su nota final, que seguía hablando de "las dos figuras sin foto", y se añadió el aviso
de que contra un servidor local fallan a propósito las comprobaciones que aporta la plataforma
(los `.md`, el `X-Robots-Tag` y el canonical).
