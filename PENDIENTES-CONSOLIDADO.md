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

### El formulario usa `mailto:`, que no es un backend

El `action` quedó en `mailto:coordinacion@activame.mx` y el envío ya no está bloqueado. Pero un
`mailto` **no entrega el correo**: abre la aplicación de correo del visitante y deja que él lo
mande. Eso implica que:

- **No hay confirmación de entrega.** Nadie sabe si la solicitud salió.
- **En un teléfono sin correo configurado no pasa nada** al pulsar el botón, y se pierde el dato
  del paciente.
- **No se puede probar de punta a punta** como pedía la verificación: no hay servidor que reciba.

Se agregó una línea bajo el botón —"Al enviar se abre tu aplicación de correo; si no se abre,
escríbenos por WhatsApp"— y el botón de WhatsApp sigue debajo como salida real. **Aun así, la
recomendación es contratar un backend de formularios** (o un webhook al CRM) y cambiar el
`action` por su endpoint. Es un cambio de una línea, y hay un comentario en el HTML que lo dice.

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
- [ ] Decidir si el formulario se queda en `mailto` o se conecta a un backend real.
- [ ] Probar el formulario de punta a punta: que llegue el dato y que alguien lo conteste.
- [ ] Probar el enlace de WhatsApp desde un teléfono real.
- [ ] Probar que el enlace de reseñas abre la ficha de Google correcta.
- [ ] `grep -rn "PENDIENTE\|VERIFICAR" index.html` debe salir vacío.
- [ ] Volver a medir Lighthouse con las fotos reales y en el servidor final.
- [ ] Servidor final con compresión (gzip o Brotli) y caché de assets estáticos.

La bitácora completa de qué se cerró y cómo está en [`CAMBIOS.md`](CAMBIOS.md).
