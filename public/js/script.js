/* Junioura Akwensimbom — portfolio interactions
   Everything here is progressive: the page works without JavaScript. */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  /* ---------- Mobile menu ---------- */
  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (toggle.getAttribute('aria-expanded') === 'true' && !header.contains(e.target)) setMenu(false);
    });
    window.matchMedia('(min-width: 960px)').addEventListener('change', function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* ---------- Header border once the page scrolls ---------- */
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Highlight the current section in the nav ---------- */
  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll('a[href*="#"]:not(.btn)')) : [];
  var sections = navLinks
    .map(function (a) { return document.getElementById(a.hash.slice(1)); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var hash = '#' + entry.target.id;
        navLinks.forEach(function (a) {
          if (entry.isIntersecting) {
            if (a.hash === hash) a.setAttribute('aria-current', 'true');
            else a.removeAttribute('aria-current');
          } else if (a.hash === hash) {
            // section left the middle of the screen (e.g. scrolled back to the hero)
            a.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { revealer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Design gallery filters ---------- */
  var filters = document.querySelectorAll('.filter');
  var galleryItems = document.querySelectorAll('.gallery-item');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');
      filters.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      galleryItems.forEach(function (item) {
        item.hidden = !(f === 'all' || item.getAttribute('data-category') === f);
      });
    });
  });

  /* ---------- Design lightbox ---------- */
  var lightbox = document.querySelector('.lightbox');
  if (lightbox && typeof lightbox.showModal === 'function') {
    var lbImg = lightbox.querySelector('img');
    var lbTitle = lightbox.querySelector('#lightbox-title');
    var lbMeta = lightbox.querySelector('.lightbox-meta');
    var lbDesc = lightbox.querySelector('.lightbox-desc');
    var opener = null;

    document.querySelectorAll('.gallery-open').forEach(function (btn) {
      btn.addEventListener('click', function () {
        opener = btn;
        lbImg.src = btn.getAttribute('data-full');
        lbImg.alt = btn.querySelector('img').alt;
        lbTitle.textContent = btn.getAttribute('data-title');
        lbMeta.textContent = btn.getAttribute('data-meta');
        lbDesc.textContent = btn.getAttribute('data-desc');
        lightbox.showModal();
      });
    });
    // Click on the dark backdrop closes it
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) lightbox.close();
    });
    lightbox.addEventListener('close', function () {
      lbImg.removeAttribute('src');
      if (opener) opener.focus();
    });
  } else {
    // Very old browsers: open the image directly
    document.querySelectorAll('.gallery-open').forEach(function (btn) {
      btn.addEventListener('click', function () { window.open(btn.getAttribute('data-full'), '_blank', 'noopener'); });
    });
  }

  /* ---------- Contact form ---------- */
  var form = document.querySelector('.contact-form');

  // "Enquire" on a service pre-fills the subject, then the link scrolls to #contact
  document.querySelectorAll('[data-subject]').forEach(function (link) {
    link.addEventListener('click', function () {
      var subject = form && form.elements.subject;
      // only replace an empty subject or one filled by a previous "Enquire" click
      if (subject && (!subject.value.trim() || subject.value.indexOf('Enquiry: ') === 0)) {
        subject.value = 'Enquiry: ' + link.getAttribute('data-subject');
      }
    });
  });

  if (form) {
    var errorBox = form.querySelector('.form-error');
    var fields = Array.prototype.slice.call(form.querySelectorAll('input, textarea'));

    var labelFor = function (el) {
      var l = form.querySelector('label[for="' + el.id + '"]');
      return l ? l.textContent.trim() : el.name;
    };

    var validate = function () {
      var firstInvalid = null;
      var messages = [];
      fields.forEach(function (el) {
        el.value = el.value.trim() ? el.value : '';
        var ok = el.checkValidity();
        el.setAttribute('aria-invalid', String(!ok));
        if (!ok) {
          if (!firstInvalid) firstInvalid = el;
          if (el.validity.valueMissing) messages.push(labelFor(el) + ' is required.');
          else if (el.validity.typeMismatch) messages.push('Please enter a valid email address.');
          else if (el.validity.tooShort) messages.push(labelFor(el) + ' needs at least ' + el.minLength + ' characters.');
          else messages.push(labelFor(el) + ' is not valid.');
        }
      });
      if (firstInvalid) {
        errorBox.textContent = messages.join(' ');
        errorBox.hidden = false;
        firstInvalid.focus();
        return false;
      }
      errorBox.hidden = true;
      return true;
    };

    fields.forEach(function (el) {
      el.addEventListener('input', function () {
        if (el.getAttribute('aria-invalid') === 'true' && el.checkValidity()) el.setAttribute('aria-invalid', 'false');
      });
    });

    form.addEventListener('submit', function (e) {
      if (!validate()) { e.preventDefault(); return; }

      // Static (GitHub Pages) version: compose an email in the visitor's mail app
      var to = form.getAttribute('data-mailto');
      if (to) {
        e.preventDefault();
        var v = function (n) { return form.elements[n].value.trim(); };
        var body = v('message') + '\n\n— ' + v('name') + '\n' + v('email');
        window.location.href = 'mailto:' + to +
          '?subject=' + encodeURIComponent('[Portfolio] ' + v('subject')) +
          '&body=' + encodeURIComponent(body);
        errorBox.textContent = 'Your email app should open with the message ready. If nothing happens, email ' + to + ' directly.';
        errorBox.hidden = false;
        errorBox.style.color = 'inherit';
      }
    });
  }
})();
