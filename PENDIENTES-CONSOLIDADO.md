# PENDIENTES — MANGA GÁSTRICA SEGURA

**Actualizado: 3 de septiembre de 2026.** De los 80 marcadores originales **no queda ninguno**:
`grep -rn "COMPLETAR\|VALIDAR" index.html assets/` sale vacío.

Quedan **5 pendientes**, con una notación distinta y a propósito visible:

```
grep -rn "PENDIENTE\|VERIFICAR" index.html
```

Ninguno se ve en la página: los legales son comentarios HTML y los de ruta viven dentro del
`src` de dos imágenes que el JavaScript retira. Para comprobarlo contra el sitio desplegado:

```bash
./scripts/verificar-despliegue.sh https://manga-gastrica-segura.vercel.app
```

---

## Los 5 pendientes

| # | Pendiente | Quién lo cierra | Ubicación |
|---|---|---|---|
| 1 | **Foto del Dr. Bernal con su equipo quirúrgico**, 1800×1200 px, en `.jpg` y `.webp`. | Dr. Bernal entrega · Marketing sube | `assets/img/foto-equipo.jpg` y `.webp` |
| 2 | **Retrato profesional del Dr. Bernal**, 1000×1250 px, en `.jpg` y `.webp`. | Dr. Bernal entrega · Marketing sube | `assets/img/foto-dr-bernal.jpg` y `.webp` |

> **Los cuatro archivos ya existen** —el equipo los tiene— pero no llegaron al repositorio.
> En cuanto estén en `assets/img/`, una sola orden conecta todo (markup `<picture>`, `og:image`
> y el `image` del schema):
>
> ```bash
> python3 scripts/aplicar-fotos.py
> ```
>
> Si falta alguno de los cuatro, el script no toca nada: es preferible el bloque neutro actual
> a publicar imágenes rotas y un `og:image` que devuelva 404.
| 3 | **Aviso de privacidad**: el documento publicado y su URL. Sin él, la casilla de consentimiento del formulario no es válida. Los dos enlaces apuntan por ahora a `#aviso-privacidad`, el bloque legal del pie, para no dejar un enlace roto. | Legal | `index.html:823` (formulario) y `:879` (pie), con comentario HTML en cada uno |
| 4 | **Publicidad sanitaria (COFEPRIS)**: revisar requisitos y, si aplica, número de registro o autorización. La línea **no se renderiza**: está comentada, lista para descomentar con el dato, o para borrarse si la revisión concluye que no aplica. | Legal | `index.html:893` |
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

## Despliegue

El sitio **todavía no está desplegado**. La configuración para Vercel y Netlify ya está en el
repositorio y los pasos están en [`DESPLIEGUE.md`](DESPLIEGUE.md); falta que alguien con cuenta
conecte el repositorio desde el panel. Al hacerlo, hay que poner la rama de producción en
`claude/manga-gastrica-landing-page-s78nhc`: por defecto se toma `main`, que no tiene la landing
terminada.

En cuanto exista la URL provisional:

```bash
python3 scripts/cambiar-url.py https://LA-URL-QUE-SALGA
```

El despliegue provisional va con `noindex` hasta que se cierren los pendientes 3 y 4 (aviso de
privacidad y COFEPRIS) y se pase al dominio definitivo.

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
