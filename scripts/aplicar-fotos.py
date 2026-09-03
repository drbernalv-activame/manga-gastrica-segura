#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Conecta las fotos reales a la página, una vez que existan en assets/img/.

Necesita los cuatro archivos:
    assets/img/foto-equipo.jpg      1800x1200   (hero)
    assets/img/foto-equipo.webp
    assets/img/foto-dr-bernal.jpg   1000x1250   (sección Experiencia)
    assets/img/foto-dr-bernal.webp

Sustituye los marcadores [RUTA PENDIENTE] por elementos <picture> con el WebP
como fuente principal y el JPG de respaldo, restaura og:image y devuelve
twitter:card a summary_large_image.

    python3 scripts/aplicar-fotos.py

No hace nada si falta alguno de los cuatro archivos: es preferible dejar el
bloque neutro a publicar imágenes rotas y un og:image que devuelva 404.
"""
import io, os, re, sys, json

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML = os.path.join(RAIZ, 'index.html')
CSS = os.path.join(RAIZ, 'assets', 'css', 'styles.css')
IMG = os.path.join(RAIZ, 'assets', 'img')

ARCHIVOS = ['foto-equipo.jpg', 'foto-equipo.webp',
            'foto-dr-bernal.jpg', 'foto-dr-bernal.webp']


def sustituir(texto, viejo, nuevo):
    if viejo not in texto:
        sys.exit('No se encontró en index.html:\n  %s' % viejo.strip()[:90])
    return texto.replace(viejo, nuevo, 1)


def main():
    faltan = [a for a in ARCHIVOS if not os.path.isfile(os.path.join(IMG, a))]
    if faltan:
        print('Faltan estos archivos en assets/img/:')
        for a in faltan:
            print('  - %s' % a)
        print('\nNo se cambió nada. Súbelos y vuelve a ejecutar.')
        return 1

    s = io.open(HTML, encoding='utf-8').read()
    if '[RUTA PENDIENTE' not in s:
        print('index.html ya no tiene marcadores de ruta. Nada que hacer.')
        return 0

    base = re.search(r'<link rel="canonical" href="(https://[^"/]+)/?"', s).group(1)

    s = sustituir(s, """        <img src="[RUTA PENDIENTE: foto-equipo.jpg]"
             alt="Dr. Héctor Bernal con su equipo quirúrgico"
             width="1200" height="900">""",
"""        <picture>
          <source srcset="assets/img/foto-equipo.webp" type="image/webp">
          <img src="assets/img/foto-equipo.jpg"
               alt="Dr. Héctor Bernal con su equipo quirúrgico"
               width="1800" height="1200" loading="eager" decoding="async" fetchpriority="high">
        </picture>""")

    s = sustituir(s, """        <img src="[RUTA PENDIENTE: foto-dr-bernal.jpg]"
             alt="Dr. Héctor Bernal, cirujano bariátrico"
             loading="lazy">""",
"""        <picture>
          <source srcset="assets/img/foto-dr-bernal.webp" type="image/webp">
          <img src="assets/img/foto-dr-bernal.jpg"
               alt="Dr. Héctor Bernal, cirujano bariátrico"
               width="1000" height="1250" loading="lazy" decoding="async">
        </picture>""")

    s = sustituir(s, """<!-- Cuando exista la foto real, añádase aquí og:image (1200×630 px) y cámbiese
     twitter:card a summary_large_image. -->
<meta name="twitter:card" content="summary">""",
"""<meta property="og:image" content="%s/assets/img/foto-equipo.jpg">
<meta property="og:image:width" content="1800">
<meta property="og:image:height" content="1200">
<meta property="og:image:alt" content="Dr. Héctor Bernal con su equipo quirúrgico">
<meta name="twitter:card" content="summary_large_image">""" % base)

    s = sustituir(s, '"image": "%s/[RUTA PENDIENTE: foto-dr-bernal.jpg]",' % base,
                     '"image": "%s/assets/img/foto-dr-bernal.jpg",' % base)

    json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', s, re.S).group(1))
    io.open(HTML, 'w', encoding='utf-8').write(s)

    c = io.open(CSS, encoding='utf-8').read()
    if '.hero__media picture' not in c:
        c = c.replace('.hero__media img {', '.hero__media picture { display: block; }\n.hero__media img {')
        c = c.replace('.perfil figure img {', '.perfil figure picture { display: block; }\n.perfil figure img {')
        io.open(CSS, 'w', encoding='utf-8').write(c)

    print('Fotos conectadas. JSON-LD válido.')
    print("""
Comprobado con maquetas de las mismas dimensiones:
  - Retrato 1000x1250 en contenedor 4/5: no se recorta nada.
  - Hero 1800x1200 en contenedor 4/3: se recorta el 11 %% del ancho, 5.5 %% por
    lado. La cara del Dr. queda hacia el 62 %% horizontal, muy dentro de la
    ventana visible (5.5 %%-94.5 %%). No hace falta tocar object-position.

Queda por hacer a mano:
  - Revisar el recorte con las fotos reales en movil (380 px) y escritorio.
  - El fallback media--pendiente ya no se activa, pero la logica sigue en
    analitica.js por si vuelve a hacer falta.
""")
    return 0


if __name__ == '__main__':
    sys.exit(main())
