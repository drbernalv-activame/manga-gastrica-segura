# Manga Gástrica Segura

Landing page de una sola página para el programa de cirugía bariátrica del **Dr. Héctor Bernal**.

> "No sacrificamos seguridad. Hicimos la cirugía más accesible."

**Objetivo único de conversión:** que el visitante agende una valoración (formulario + WhatsApp).

---

## Estructura del repositorio

```
index.html               Landing completa (una sola página)
assets/css/styles.css    Estilos, CSS puro y mobile-first
assets/js/analitica.js   Mejora progresiva: eventos, acordeón en escritorio, aviso del formulario
assets/img/              Fotos reales (pendientes de entrega)
docs/BRIEF.md            Brief de contenido, psicología y diseño que rige la página
PENDIENTES.md            Todo lo marcado como [COMPLETAR] y su responsable
```

## Cómo verla en local

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

No hay build, dependencias ni gestor de paquetes: es HTML y CSS estáticos.

## Estado actual

La página está completa en estructura, copy y diseño, y **no contiene ningún dato inventado**.
Todo lo que falta aparece como marcador visible `[COMPLETAR]` y está registrado en
[`PENDIENTES.md`](PENDIENTES.md): WhatsApp, destino del formulario, ciudad y hospital, cédula
y certificaciones, fotos reales, precio, testimonios y aviso de privacidad.

Auditoría Lighthouse en móvil (Chromium headless, servida en local):

| Categoría | Puntaje |
|---|---|
| Rendimiento | 100 |
| Accesibilidad | 100 |
| Buenas prácticas | 100 |
| SEO | 91 |

El único punto que baja SEO es el `rel="canonical"`, que todavía es un marcador `[COMPLETAR]`
a la espera de la URL definitiva. Contraste AA verificado en toda la paleta.

## Antes de publicar

1. Resolver los puntos de `PENDIENTES.md`.
2. Verificar que `grep -rn "COMPLETAR" index.html` no devuelva nada.
3. Si no hay testimonios con consentimiento firmado, eliminar esa sección completa
   (está señalada con un comentario en `index.html`).
4. Servir con compresión (gzip/Brotli) y caché de assets estáticos.
