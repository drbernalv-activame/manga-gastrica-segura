/* =========================================================
   Manga Gástrica Segura — JavaScript mínimo.
   La página funciona completa sin este archivo: aquí solo hay
   mejora progresiva (analítica, acordeón en escritorio y aviso
   del formulario mientras no exista endpoint).
   ========================================================= */
(function () {
  'use strict';

  /* ---- 1. Envío de eventos a GA4 / Meta Pixel ----
     Mientras no se instalen los scripts de GA4 y Meta Pixel, esta
     función simplemente no hace nada. */
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

  /* click_cta_plan, click_cta_simulacion, click_cta_dudas,
     click_reviews_google y click_whatsapp */
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
     El destino es coordinacion@activame.mx a través de un mailto. Aquí solo
     se valida y se registra el evento; el envío lo hace el navegador. */
  var formulario = document.querySelector('.formulario');
  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      if (!formulario.checkValidity()) {
        e.preventDefault();
        formulario.reportValidity();
        return;
      }
      evento('form_submit', {
        principal_duda: (formulario.querySelector('#duda') || {}).value || ''
      });
    });
  }

  /* ---- 5. Imágenes pendientes de ruta ----
     Mientras una foto no exista, el navegador mostraría el ícono de imagen
     rota. En su lugar se retira la imagen y su contenedor queda como un
     bloque neutro, sin hueco ni ícono roto.
     Este archivo carga con defer, así que una imagen puede haber fallado
     antes de que se registre el listener: por eso también se revisa el
     estado de las que ya terminaron de cargar. */
  function marcaPendiente(img) {
    var figura = img.parentNode;
    if (figura && figura.classList) figura.classList.add('media--pendiente');
    if (img.parentNode) img.parentNode.removeChild(img);
  }
  document.querySelectorAll('figure img').forEach(function (img) {
    img.addEventListener('error', function () { marcaPendiente(img); });
    if (img.complete && img.naturalWidth === 0) marcaPendiente(img);
  });

})();
