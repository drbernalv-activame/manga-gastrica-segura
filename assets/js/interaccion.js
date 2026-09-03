/* =========================================================
   Manga Gástrica Segura — movimiento e interacción.

   Mejora progresiva: la página funciona completa sin este archivo.
   El estado inicial oculto lo aplica el CSS sólo cuando <html> tiene la
   clase .js, y siempre dentro de (prefers-reduced-motion: no-preference).
   Si el visitante prefiere menos movimiento, este archivo revela todo de
   inmediato y no anima nada.
   ========================================================= */
(function () {
  'use strict';

  var menosMovimiento = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function evento(nombre, datos) {
    datos = datos || {};
    if (typeof window.gtag === 'function') window.gtag('event', nombre, datos);
    if (typeof window.fbq === 'function') window.fbq('trackCustom', nombre, datos);
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(Object.assign({ event: nombre }, datos));
    }
  }

  /* Observa una vez y deja de observar: nada se repite al volver a subir. */
  function alEntrar(elementos, alHacerVisible, umbral) {
    if (!elementos.length) return;
    if (menosMovimiento || !('IntersectionObserver' in window)) {
      elementos.forEach(function (el) { alHacerVisible(el); });
      return;
    }
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        obs.unobserve(e.target);
        alHacerVisible(e.target);
      });
    }, { threshold: umbral || 0.15, rootMargin: '0px 0px -5% 0px' });
    elementos.forEach(function (el) { obs.observe(el); });
  }

  function lista(selector, raiz) {
    return Array.prototype.slice.call((raiz || document).querySelectorAll(selector));
  }

  /* ---- 1. Aparición por secciones, con cascada dentro de cada una ---- */
  (function aparicion() {
    // El hero queda fuera: está sobre el pliegue y es el LCP.
    lista('main > section:not(.hero)').forEach(function (sec) {
      sec.setAttribute('data-animar', '');
      // Las tarjetas y elementos de lista entran en cascada dentro de su sección.
      // El retraso se corta a los ocho para que una lista larga no termine
      // esperando medio segundo de más.
      lista('.tarjeta, .empatia__lista li, .riesgos__lista li, .lista-marcada li, ' +
            '.proceso li, .faq__item, .plan-unico', sec)
        .forEach(function (hijo, i) {
          hijo.setAttribute('data-animar', '');
          hijo.style.setProperty('--retraso', Math.min(i, 8) * 70 + 'ms');
        });
    });

    alEntrar(lista('[data-animar]'), function (el) { el.classList.add('visible'); });
  })();

  /* ---- 2. Contadores de la barra de confianza ---- */
  (function contadores() {
    var datos = lista('.confianza__dato[data-contador]');
    if (!datos.length) return;

    function pinta(el, valor, sufijo, miles) {
      var texto = miles ? valor.toLocaleString('es-MX') : String(valor);
      el.textContent = texto + sufijo;
    }

    function cuenta(el) {
      var destino = parseInt(el.getAttribute('data-contador'), 10);
      var sufijo = el.getAttribute('data-sufijo') || '';
      var miles = el.hasAttribute('data-miles');
      // Contar hasta 1 no aporta nada y pasaría por "0 año", que está mal escrito.
      if (menosMovimiento || !window.requestAnimationFrame || destino <= 1) {
        pinta(el, destino, sufijo, miles);
        return;
      }
      var inicio = null, duracion = 900;
      pinta(el, 0, miles ? '' : sufijo, miles);
      function paso(t) {
        if (inicio === null) inicio = t;
        var p = Math.min((t - inicio) / duracion, 1);
        var suave = 1 - Math.pow(1 - p, 4);           // easeOutQuart
        var valor = Math.round(destino * suave);
        // El "+" y el resto del sufijo aparecen al terminar la cuenta.
        pinta(el, valor, p === 1 ? sufijo : (miles ? '' : sufijo), miles);
        if (p < 1) window.requestAnimationFrame(paso);
      }
      window.requestAnimationFrame(paso);
    }

    var barra = document.querySelector('.confianza');
    alEntrar([barra], function () { datos.forEach(cuenta); }, 0.4);
  })();

  /* ---- 3. Fórmula de la seguridad ---- */
  (function formula() {
    var formula = document.querySelector('.formula');
    if (!formula) return;
    var piezas = lista('.formula__pieza[data-termino]', formula);
    piezas.forEach(function (p, i) { p.style.setProperty('--retraso', i * 120 + 'ms'); });
    alEntrar([formula], function (el) { el.classList.add('visible'); }, 0.3);

    function tarjeta(clave) { return document.querySelector('.pieza[data-termino="' + clave + '"]'); }

    function enlaza(origen, destino) {
      if (!origen || !destino) return;
      origen.addEventListener('mouseenter', function () { destino.classList.add('destacada'); });
      origen.addEventListener('mouseleave', function () { destino.classList.remove('destacada'); });
    }

    var puntero = window.matchMedia && window.matchMedia('(hover: hover)').matches;
    piezas.forEach(function (p) {
      var t = tarjeta(p.getAttribute('data-termino'));
      if (!t) return;
      if (puntero) { enlaza(p, t); enlaza(t, p); }
      // Sin puntero fino (táctil): tocar el término lleva a su tarjeta.
      p.addEventListener('click', function () {
        t.open = true;
        t.scrollIntoView({ behavior: menosMovimiento ? 'auto' : 'smooth', block: 'center' });
      });
    });
  })();

  /* ---- 4. Esquema del estómago ---- */
  (function esquema() {
    var svg = document.querySelector('.esquema__svg');
    if (!svg) return;

    // Cada trazo necesita su propia longitud para dibujarse por completo.
    lista('.esq-trazo', svg).forEach(function (p) {
      if (typeof p.getTotalLength !== 'function') return;
      var largo = Math.ceil(p.getTotalLength());
      p.style.setProperty('--largo', largo);
    });

    alEntrar([svg], function (el) { el.classList.add('visible'); }, 0.3);

    var controles = document.querySelector('.esquema__controles');
    if (!controles) return;
    controles.hidden = false;
    var botones = lista('.esquema__boton', controles);
    botones.forEach(function (b) {
      b.addEventListener('click', function () {
        var estado = b.getAttribute('data-esquema');
        var activo = svg.getAttribute('data-enfasis') === estado;
        botones.forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
        if (activo) {
          svg.removeAttribute('data-enfasis');
        } else {
          svg.setAttribute('data-enfasis', estado);
          b.setAttribute('aria-pressed', 'true');
        }
        evento('toggle_esquema_estomago', { estado: activo ? 'ambos' : estado });
      });
    });
  })();

  /* ---- 5. Preguntas del inicio → sección que las responde ---- */
  (function preguntas() {
    lista('.empatia__lista a[data-pregunta]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var destino = document.querySelector(a.getAttribute('href'));
        evento('click_pregunta_inicial', { pregunta: a.textContent.trim() });
        if (!destino) return;
        e.preventDefault();
        if (destino.tagName === 'DETAILS') destino.open = true;
        destino.scrollIntoView({ behavior: menosMovimiento ? 'auto' : 'smooth', block: 'start' });
        // El resaltado va en box-shadow: no mueve nada de sitio.
        destino.classList.add('destino-resaltado');
        window.setTimeout(function () {
          destino.classList.remove('destino-resaltado');
        }, 1500);
      });
    });
  })();

  /* ---- 6. Línea del proceso ---- */
  alEntrar(lista('.proceso'), function (el) { el.classList.add('visible'); }, 0.1);

  /* ---- 7. Acordeones de FAQ: uno abierto por grupo ---- */
  lista('.faq').forEach(function (grupo) {
    var items = lista('.faq__item', grupo);
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        items.forEach(function (otro) { if (otro !== item) otro.open = false; });
      });
    });
  });

  /* ---- 8. Botón flotante de WhatsApp ---- */
  (function flotante() {
    var boton = document.querySelector('.wa-flotante');
    var formulario = document.querySelector('#valoracion');
    if (!boton) return;

    var formularioALaVista = false;
    if (formulario && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entradas) {
        formularioALaVista = entradas[0].isIntersecting;
        revisa();
      }, { threshold: 0.15 }).observe(formulario);
    }

    function revisa() {
      var alto = document.documentElement.scrollHeight - window.innerHeight;
      var avance = alto > 0 ? window.scrollY / alto : 1;
      // Oculto sobre el hero, y también cuando el formulario ya está a la vista.
      if (avance < 0.4 || formularioALaVista) boton.setAttribute('data-oculto', '');
      else boton.removeAttribute('data-oculto');
    }

    revisa();
    var pendiente = false;
    window.addEventListener('scroll', function () {
      if (pendiente) return;
      pendiente = true;
      window.requestAnimationFrame(function () { revisa(); pendiente = false; });
    }, { passive: true });
  })();
})();
