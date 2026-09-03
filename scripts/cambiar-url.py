#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Cambia la URL base del sitio en index.html y en aviso-de-privacidad.html.

La URL aparece repartida entre las dos páginas y todas las apariciones tienen
que quedar sincronizadas: canonical, og:url, los tres @id del JSON-LD y sus dos
url, la ruta de la foto del médico, y en el aviso de privacidad su propio
canonical y el enlace del apartado 1. Cambiarlas a mano es donde se cuela el
error.

    python3 scripts/cambiar-url.py https://mangagastricasegura.vercel.app

Sin argumentos, muestra la URL actual y dónde aparece.
"""
import io, re, sys, os

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RUTA = os.path.join(RAIZ, 'index.html')          # de aquí se lee la URL vigente
# Todas las páginas donde aparece la URL base.
PAGINAS = [RUTA, os.path.join(RAIZ, 'aviso-de-privacidad.html')]
PATRON = re.compile(r'https://[a-z0-9.-]+(?:\.com|\.app|\.dev|\.io|\.mx)(?=/)')


def actual(texto):
    encontradas = set(PATRON.findall(texto))
    # Solo la URL del propio sitio: la que aparece en el canonical.
    m = re.search(r'<link rel="canonical" href="(https://[^"/]+)/?"', texto)
    return (m.group(1) if m else None), encontradas


def main():
    texto = io.open(RUTA, encoding='utf-8').read()
    base, _ = actual(texto)
    if base is None:
        sys.exit('No se encontró el canonical en index.html.')

    if len(sys.argv) < 2:
        print('URL actual: %s' % base)
        for ruta in PAGINAS:
            if not os.path.isfile(ruta):
                continue
            nombre = os.path.basename(ruta)
            for n, linea in enumerate(io.open(ruta, encoding='utf-8').read().split('\n'), 1):
                if base in linea:
                    print('  %-26s %4d  %s' % (nombre, n, linea.strip()[:70]))
        print('\nPara cambiarla:  python3 scripts/cambiar-url.py https://NUEVA-URL')
        return

    nueva = sys.argv[1].rstrip('/')
    if not nueva.startswith('https://'):
        sys.exit('La URL tiene que empezar con https://')
    if nueva == base:
        print('La URL ya es %s. No hay nada que cambiar.' % base)
        return

    import json
    cambiadas = 0
    for ruta in PAGINAS:
        if not os.path.isfile(ruta):
            print('Aviso: no existe %s, se omite.' % os.path.basename(ruta))
            continue
        contenido = io.open(ruta, encoding='utf-8').read()
        n = contenido.count(base)
        if not n:
            continue
        io.open(ruta, 'w', encoding='utf-8').write(contenido.replace(base, nueva))
        cambiadas += n
        print('  %-26s %d aparición(es)' % (os.path.basename(ruta), n))

    # Verificación: el JSON-LD tiene que seguir siendo válido.
    bloque = re.search(r'<script type="application/ld\+json">(.*?)</script>',
                       io.open(RUTA, encoding='utf-8').read(), re.S)
    json.loads(bloque.group(1))

    print('%s  →  %s' % (base, nueva))
    print('%d apariciones actualizadas en total. JSON-LD válido.' % cambiadas)
    print('\nRecuerda: mientras la URL sea provisional, vercel.json y netlify.toml')
    print('mandan X-Robots-Tag: noindex. Quítalo solo al pasar al dominio definitivo.')


if __name__ == '__main__':
    main()
