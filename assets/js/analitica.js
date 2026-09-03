/* =========================================================
   Manga Gástrica Segura — JavaScript mínimo.
   La página funciona completa sin este archivo: aquí solo hay
   mejora progresiva (analítica, acordeón en escritorio y aviso
   del formulario mientras no exista endpoint).
   ========================================================= */
(function () {
  'use strict';

  /* ---- 1. Envío de eventos a GA4 / Meta Pixel ----
     Los IDs de GA4 y Meta Pixel están [COMPLETAR]: hasta que se
     instalen sus scripts, esta función simplemente no hace nada. */
  function evento(nombre, datos) {
    datos = datos || {};
    if (typeof window.gtag === 'function') {
      window.gtag('event', nombre, datos);
    }
    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', nombre, datos);
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(Object.assign({ event: nombre }, datos));
    }
  }

  /* click_cta_plan, click_cta_simulacion, click_cta_dudas y click_whatsapp */
  document.querySelectorAll('[data-evento]').forEach(function (el) {
    el.addEventListener('click', function () {
      evento(el.getAttribute('data-evento'), {
        ubicacion: el.getAttribute('data-ubicacion') || 'sin-definir'
      });
    });
  });

  /* faq_open */
  document.querySelectorAll('.faq__item').forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      var titulo = item.querySelector('summary');
      evento('faq_open', { pregunta: titulo ? titulo.textContent.trim() : '' });
    });
  });

  /* ---- 2. Fórmula de la seguridad: acordeón en móvil, todo
     visible en escritorio (el brief pide interacción en desktop). ---- */
  var piezas = document.querySelectorAll('.pieza');
  var escritorio = window.matchMedia('(min-width: 62rem)');

  function ajustaPiezas(mq) {
    piezas.forEach(function (pieza, i) {
      if (mq.matches) {
        pieza.open = true;
      } else {
        pieza.open = (i === 0);
      }
    });
  }
  if (piezas.length) {
    ajustaPiezas(escritorio);
    if (typeof escritorio.addEventListener === 'function') {
      escritorio.addEventListener('change', ajustaPiezas);
    }
  }

  /* ---- 3. Año del pie ---- */
  var anio = document.getElementById('anio');
  if (anio) anio.textContent = String(new Date().getFullYear());

  /* ---- 4. Formulario ----
     Mientras el atributo action siga siendo un placeholder, el envío
     se bloquea para no perder datos de pacientes reales. */
  var formulario = document.querySelector('.formulario');
  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      var destino = formulario.getAttribute('action') || '';
      var sinDestino = destino.indexOf('[COMPLETAR') !== -1 || destino === '';

      if (!formulario.checkValidity()) {
        e.preventDefault();
        formulario.reportValidity();
        return;
      }

      if (sinDestino) {
        e.preventDefault();
        var aviso = document.getElementById('aviso-formulario');
        if (!aviso) {
          aviso = document.createElement('p');
          aviso.id = 'aviso-formulario';
          aviso.className = 'pendiente pendiente--bloque';
          aviso.setAttribute('role', 'status');
          formulario.appendChild(aviso);
        }
        aviso.textContent =
          '[COMPLETAR] El formulario aún no tiene destino configurado, por eso no se envió ' +
          'nada. Configura el atributo action antes de publicar la página.';
        aviso.scrollIntoView({ block: 'center' });
        return;
      }

      evento('form_submit', {
        principal_duda: (formulario.querySelector('#duda') || {}).value || ''
      });
    });
  }
})();
