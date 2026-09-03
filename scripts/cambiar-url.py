#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Cambia la URL base del sitio en index.html.

La URL aparece en ocho lugares que tienen que estar sincronizados: canonical,
og:url, los tres @id del JSON-LD y sus dos url, más la ruta de la foto del
médico. Cambiarlos a mano es donde se cuela el error.

    python3 scripts/cambiar-url.py https://mangagastricasegura.vercel.app

Sin argumentos, muestra la URL actual y dónde aparece.
"""
import io, re, sys, os

RUTA = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'index.html')
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
        for n, linea in enumerate(texto.split('\n'), 1):
            if base in linea:
                print('  %4d  %s' % (n, linea.strip()[:100]))
        print('\nPara cambiarla:  python3 scripts/cambiar-url.py https://NUEVA-URL')
        return

    nueva = sys.argv[1].rstrip('/')
    if not nueva.startswith('https://'):
        sys.exit('La URL tiene que empezar con https://')
    if nueva == base:
        print('La URL ya es %s. No hay nada que cambiar.' % base)
        return

    cambiadas = texto.count(base)
    texto = texto.replace(base, nueva)
    io.open(RUTA, 'w', encoding='utf-8').write(texto)

    # Verificación: el JSON-LD tiene que seguir siendo válido.
    import json
    bloque = re.search(r'<script type="application/ld\+json">(.*?)</script>', texto, re.S)
    json.loads(bloque.group(1))

    print('%s  →  %s' % (base, nueva))
    print('%d apariciones actualizadas. JSON-LD válido.' % cambiadas)
    print('\nRecuerda: mientras la URL sea provisional, vercel.json y netlify.toml')
    print('mandan X-Robots-Tag: noindex. Quítalo solo al pasar al dominio definitivo.')


if __name__ == '__main__':
    main()
