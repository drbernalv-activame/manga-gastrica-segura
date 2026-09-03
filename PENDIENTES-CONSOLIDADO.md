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
| 1 | **Aviso de privacidad.** El borrador **no llegó** al repositorio, así que la página `aviso-de-privacidad.html` **no se creó**. Lo que sí está hecho: la segunda casilla de consentimiento para datos de salud, y la auditoría del apartado 9 (abajo), lista para pegar. Los dos enlaces siguen apuntando a `#aviso-privacidad` —el bloque legal del pie— porque cambiarlos a `/aviso-de-privacidad` antes de que la página exista dejaría dos 404. | Legal entrega el texto · yo publico la página | `index.html`: comentario en el formulario y en el pie |
| 2 | **Publicidad sanitaria (COFEPRIS)**: revisar requisitos y, si aplica, número de registro o autorización. La línea **no se renderiza**: está comentada, lista para descomentar con el dato, o para borrarse si la revisión concluye que no aplica. | Legal | `index.html` — comentario en el pie |
| 3 | **Disponibilidad del dominio `mangagastricasegura.com`.** Hoy la página apunta a la URL provisional de Vercel. Al cambiar: `python3 scripts/cambiar-url.py https://EL-DOMINIO` y quitar el `noindex` **de los dos sitios** (el `meta` de `index.html` y el `X-Robots-Tag` de `vercel.json` y `netlify.toml`). | Marketing | Comentario junto al `meta robots` en `index.html` |

### Cerrado el 3 de septiembre de 2026

- ✅ **Las dos fotos reales** están en `assets/img/`, servidas con `<picture>` (WebP con JPG de
  respaldo) y conectadas al `og:image` y al `image` del schema. Encuadre verificado en navegador
  a 380 px y a 1280 px.

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


---

## Apartado 9 del aviso de privacidad: auditoría de rastreo

Hecha el 3 de septiembre de 2026 sobre la página real, cargándola en Chromium y registrando
todas las peticiones mientras se recorría de arriba abajo.

**Resultado: la landing no carga ninguna herramienta de analítica ni de rastreo de terceros.**

| Qué se buscó | Resultado |
|---|---|
| Peticiones a dominios de terceros | **Ninguna.** Las 6 peticiones van al propio origen |
| Cookies | Ninguna |
| `localStorage` / `sessionStorage` | Vacíos |
| Google Analytics (`gtag`), Meta Pixel (`fbq`), `dataLayer` | No existen en tiempo de ejecución |
| Fuentes externas (Google Fonts) | Ninguna: tipografía del sistema |
| Favicon | `data:` URI, no es una petición |
| `@import` o `url(http…)` en el CSS | Ninguno |

Por tanto, para el apartado 9 **aplica la redacción alternativa del borrador**, la de "no se
utilizan herramientas de terceros".

### Cuatro matices que legal debería considerar antes de firmarlo

Que no haya analítica no significa que ningún tercero trate datos. Estos cuatro sí lo hacen, y
un aviso que dijera "ningún tercero" sin más sería inexacto:

1. **El formulario entrega por WhatsApp.** Al enviarlo se abre WhatsApp con el mensaje ya
   redactado: nombre, teléfono, ciudad y motivo de consulta. Eso significa que **Meta trata esos
   datos**, incluidos los de salud. Es el punto más relevante de todos y conviene que el aviso
   lo diga con claridad.
2. **El sitio lo sirve Vercel.** Sus registros de acceso guardan direcciones IP y datos de
   navegación, aunque el sitio no ponga ni una cookie. Vercel es, por tanto, un encargado del
   tratamiento.
3. **Enlaces salientes a WhatsApp y a Google.** El botón de reseñas lleva a Google Maps y los
   botones de contacto a WhatsApp. Son navegaciones que inicia el visitante, no rastreo, pero
   al pulsarlos sale del sitio y entra en las políticas de esas empresas.
4. **GA4 y Meta Pixel están previstos pero no instalados.** El `<head>` tiene un comentario
   reservando su lugar y `analitica.js` ya emite eventos que no van a ninguna parte. **El día
   que se instalen, el apartado 9 deja de ser cierto** y hay que reescribirlo antes de
   publicarlos.
