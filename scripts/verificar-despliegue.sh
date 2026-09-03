#!/usr/bin/env bash
# Verifica un despliegue de la landing contra el sitio real.
#
#   ./scripts/verificar-despliegue.sh https://manga-gastrica-segura.vercel.app
#
# Comprueba lo que solo se puede comprobar contra el host: que la página carga,
# que los assets se sirven, que la documentación interna NO es accesible y que
# el despliegue provisional lleva noindex. El formulario y el fallback de las
# imágenes se prueban en el navegador (ver el final).
set -u
URL="${1:-https://manga-gastrica-segura.vercel.app}"
URL="${URL%/}"
fallos=0

comprueba() { # nombre, esperado, obtenido
  if [ "$2" = "$3" ]; then printf '  ✅ %-46s %s\n' "$1" "$3"
  else printf '  ❌ %-46s esperaba %s, obtuvo %s\n' "$1" "$2" "$3"; fallos=$((fallos+1)); fi
}

codigo() { curl -s -o /dev/null -w '%{http_code}' --max-time 20 "$1"; }

echo "Verificando $URL"
echo
echo "Carga y assets"
comprueba "página principal" 200 "$(codigo "$URL/")"
comprueba "hoja de estilos"  200 "$(codigo "$URL/assets/css/styles.css")"
comprueba "javascript"       200 "$(codigo "$URL/assets/js/analitica.js")"

echo
echo "Documentación interna NO accesible"
for f in CAMBIOS.md PENDIENTES.md PENDIENTES-CONSOLIDADO.md CONSULTA-DR-BERNAL.md DESPLIEGUE.md README.md docs/BRIEF.md; do
  c="$(codigo "$URL/$f")"
  if [ "$c" = "200" ]; then printf '  ❌ %-46s ACCESIBLE (200)\n' "$f"; fallos=$((fallos+1))
  else printf '  ✅ %-46s %s\n' "$f" "$c"; fi
done

echo
echo "Despliegue provisional: no indexable"
robots="$(curl -sI --max-time 20 "$URL/" | tr -d '\r' | grep -i '^x-robots-tag:' | head -1)"
if echo "$robots" | grep -qi noindex; then printf '  ✅ %-46s %s\n' "X-Robots-Tag" "$(echo "$robots" | cut -d' ' -f2-)"
else printf '  ❌ %-46s ausente o sin noindex\n' "X-Robots-Tag"; fallos=$((fallos+1)); fi

echo
echo "Contenido en la página servida"
html="$(curl -s --max-time 20 "$URL/")"
for patron in "canonical\" href=\"$URL/\"" "wa.me/526144078343" "4134597" "5679320" "maps.app.goo.gl"; do
  if printf '%s' "$html" | grep -qF "$patron"; then printf '  ✅ %s\n' "$patron"
  else printf '  ❌ falta: %s\n' "$patron"; fallos=$((fallos+1)); fi
done
if printf '%s' "$html" | grep -qE 'COMPLETAR|VALIDAR'; then
  printf '  ❌ hay marcadores COMPLETAR/VALIDAR en la página servida\n'; fallos=$((fallos+1))
else printf '  ✅ sin marcadores COMPLETAR/VALIDAR\n'; fi

echo
if [ "$fallos" -eq 0 ]; then echo "Todo correcto."; else echo "$fallos comprobación(es) fallaron."; fi
echo
echo "Falta comprobar a mano en el navegador:"
echo "  1. Llenar el formulario y enviarlo: debe abrir WhatsApp con el mensaje ya armado."
echo "  2. Las dos figuras sin foto deben verse como un bloque neutro, sin ícono de imagen rota."
exit "$fallos"
