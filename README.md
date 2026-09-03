# Manga Gástrica Segura

Landing page de una sola página para el programa de cirugía bariátrica del **Dr. Héctor Bernal**.

> "No bajamos el estándar: cambiamos la forma de pagarlo."

**Objetivo único de conversión:** que el visitante solicite una simulación personalizada
(formulario + WhatsApp), que incluye agendar su valoración médica.

---

## Estructura del repositorio

```
index.html               Landing completa (una sola página)
assets/css/styles.css    Estilos, CSS puro y mobile-first
assets/js/analitica.js   Mejora progresiva: eventos, acordeón en escritorio, aviso del formulario
assets/img/              Fotos reales (pendientes de entrega)
docs/BRIEF.md            Brief de contenido, psicología y diseño que rige la página
PENDIENTES.md            Todo lo marcado como [COMPLETAR] y su responsable
CAMBIOS.md               Ajuste de copy y estructura (financiamiento) y sus [VALIDAR]
```

## Cómo verla en local

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

No hay build, dependencias ni gestor de paquetes: es HTML y CSS estáticos.

## Estado actual

La página está completa en estructura, copy y diseño, y **no contiene ningún dato inventado**.
Todo lo que falta aparece como marcador visible `[COMPLETAR]` o `[VALIDAR]`. Los `[COMPLETAR]`
están registrados en [`PENDIENTES.md`](PENDIENTES.md): WhatsApp, destino del formulario, ciudad
y hospital, cédula y certificaciones, fotos reales, testimonios y aviso de privacidad. Los
`[VALIDAR]` del bloque de financiamiento están registrados en [`CAMBIOS.md`](CAMBIOS.md).

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
2. Verificar que `grep -rn "COMPLETAR\|VALIDAR" index.html` no devuelva nada.
3. Si no hay testimonios con consentimiento firmado, eliminar esa sección completa
   (está señalada con un comentario en `index.html`).
4. Servir con compresión (gzip/Brotli) y caché de assets estáticos.
