# PENDIENTES — MANGA GÁSTRICA SEGURA

**Actualizado: 3 de septiembre de 2026.** De los 80 marcadores originales **no queda ninguno**:
`grep -rn "COMPLETAR\|VALIDAR" index.html assets/` sale vacío.

Quedan **5 pendientes**, con una notación distinta y a propósito visible:

```
grep -rn "PENDIENTE\|VERIFICAR" index.html
```

---

## Los 5 pendientes

| # | Pendiente | Quién lo cierra | Ubicación |
|---|---|---|---|
| 1 | **Foto del Dr. Bernal con su equipo quirúrgico.** Existe; falta subirla a `assets/img/` y poner la ruta. JPG o WebP, 1200×900 px. | Dr. Bernal entrega · Marketing sube | `index.html:78` — `[RUTA PENDIENTE: foto-equipo.jpg]` |
| 2 | **Retrato profesional del Dr. Bernal.** Se entrega después. | Dr. Bernal entrega · Marketing sube | `index.html:131` (figura) y `:962` (schema `image`) — `[RUTA PENDIENTE: foto-dr-bernal.jpg]` |
| 3 | **Aviso de privacidad**: el documento publicado y su URL. Sin él, la casilla de consentimiento del formulario no es válida. | Legal | `index.html:821` (formulario) y `:873` (pie) — `[PENDIENTE LEGAL: URL del aviso de privacidad]` |
| 4 | **Publicidad sanitaria (COFEPRIS)**: revisar requisitos y, si aplica, número de registro o autorización. | Legal | `index.html:887` — `[PENDIENTE LEGAL: …]` |
| 5 | **Disponibilidad del dominio `mangagastricasegura.com`.** Ya está puesto en `canonical`, `og:url` y los tres `@id` del schema; falta confirmar que es el dominio real. | Marketing | Comentario `VERIFICAR` en `index.html:7` |

Mientras 1 y 2 no lleguen, `analitica.js` retira la imagen y deja el contenedor como un bloque
neutro: no se ve el ícono de imagen rota ni queda hueco en la maquetación.

---

## 🔴 Dos cosas que hay que resolver aunque no lleven marcador

### El formulario entrega por WhatsApp, no por correo

Al enviar, `analitica.js` arma el mensaje con los datos capturados y abre la conversación de
WhatsApp con Georgina, ya redactado. El paciente lo revisa y lo manda desde su propio WhatsApp.

Ventajas frente al `mailto` que había antes: funciona en el canal que el paciente ya usa, el
mensaje llega con nombre, teléfono, ciudad y dudas, y **el dato no pasa por ningún tercero**.
Sin JavaScript, el `action` del formulario abre la misma conversación, aunque sin los datos
prellenados.

Lo que sigue sin haber es **registro**: no queda constancia de la solicitud en ningún sistema
más que en el WhatsApp de Georgina, y no hay forma de saber cuántas personas empezaron el
formulario y no llegaron a mandar el mensaje. Si en algún momento se quiere trazabilidad o un
CRM, basta cambiar el `action` por el endpoint y quitar el manejador del submit en el JS; hay
un comentario en el HTML que lo indica.

### La imagen para redes sociales se retiró

`og:image` apuntaba a un archivo inexistente, lo que produce una tarjeta rota al compartir el
enlace. Se eliminó la etiqueta y `twitter:card` bajó a `summary` hasta que exista la foto.
Cuando lleguen las fotos (pendientes 1 y 2), hay que componer la imagen de 1200×630 px,
volver a añadir `og:image` y subir `twitter:card` a `summary_large_image`. Hay un comentario
con la instrucción en `index.html:20`.

---

## Checklist antes de publicar

- [ ] Subir las dos fotos y sustituir sus `[RUTA PENDIENTE]`.
- [ ] Componer la imagen de redes y restaurar `og:image` y `summary_large_image`.
- [ ] Publicar el aviso de privacidad y enlazarlo en los dos lugares.
- [ ] Cerrar la revisión de COFEPRIS.
- [ ] Confirmar el dominio y quitar el comentario `VERIFICAR`.
- [ ] Probar el formulario desde un teléfono real: que abra WhatsApp con el mensaje armado y que Georgina lo conteste.
- [ ] Probar el enlace de WhatsApp desde un teléfono real.
- [ ] Probar que el enlace de reseñas abre la ficha de Google correcta.
- [ ] `grep -rn "PENDIENTE\|VERIFICAR" index.html` debe salir vacío.
- [ ] Volver a medir Lighthouse con las fotos reales y en el servidor final.
- [ ] Servidor final con compresión (gzip o Brotli) y caché de assets estáticos.

La bitácora completa de qué se cerró y cómo está en [`CAMBIOS.md`](CAMBIOS.md).
