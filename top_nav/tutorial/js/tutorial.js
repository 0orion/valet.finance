// Renders a markdown tutorial into #t-content and builds a sidebar TOC (#t-toc).
// The host element supplies: data-md (markdown path) and data-assets (prefix for
// relative `assets/...` image paths, so they resolve against the .md's folder).
(function () {
  'use strict';

  function slugify(text) {
    return text.toLowerCase().trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  function stripFrontmatter(md) {
    // Remove a leading YAML frontmatter block (--- ... ---).
    if (md.slice(0, 3) === '---') {
      var end = md.indexOf('\n---', 3);
      if (end !== -1) {
        var after = md.indexOf('\n', end + 1);
        return md.slice(after + 1);
      }
    }
    return md;
  }

  function toTitleCase(s) {
    // Capitalize the first letter of each word (after start, whitespace, or "/").
    return s.toLowerCase().replace(/(^|[\s/])([a-z])/g, function (m, sep, ch) {
      return sep + ch.toUpperCase();
    });
  }

  function buildToc(content, toc) {
    // Only main subheadings (h2) appear in the side navigation.
    var headings = content.querySelectorAll('h2');
    if (!headings.length) { toc.style.display = 'none'; return []; }
    // Pages with all-caps body headings can opt to show the TOC in Title Case.
    var titleCaseToc = content.dataset.tocCase === 'title';

    var ul = document.createElement('ul');
    var seen = {};
    var links = [];

    headings.forEach(function (h) {
      var base = slugify(h.textContent) || 'section';
      var id = base, n = 1;
      while (seen[id]) { id = base + '-' + (++n); }
      seen[id] = true;
      h.id = id;

      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = titleCaseToc ? toTitleCase(h.textContent) : h.textContent;
      a.dataset.target = id;
      li.appendChild(a);
      ul.appendChild(li);
      links.push(a);
    });

    toc.appendChild(ul);
    return links;
  }

  function setupScrollspy(content, links) {
    if (!links.length || !('IntersectionObserver' in window)) return;
    var byId = {};
    links.forEach(function (a) { byId[a.dataset.target] = a; });

    var visible = new Set();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visible.add(e.target.id);
        else visible.delete(e.target.id);
      });
      // Highlight the first heading currently in view.
      var headings = content.querySelectorAll('h2');
      var activeId = null;
      headings.forEach(function (h) { if (!activeId && visible.has(h.id)) activeId = h.id; });
      links.forEach(function (a) { a.classList.toggle('active', a.dataset.target === activeId); });
    }, { rootMargin: '-80px 0px -65% 0px', threshold: 0 });

    content.querySelectorAll('h2').forEach(function (h) { observer.observe(h); });
  }

  // Click-to-expand lightbox shared by all tutorial images (content + cover).
  function createLightbox() {
    var box = document.createElement('div');
    box.className = 't-lightbox';
    box.innerHTML = '<button class="t-lightbox-close" aria-label="Close">&times;</button><img alt="">';
    document.body.appendChild(box);
    var boxImg = box.querySelector('img');

    function close() {
      box.classList.remove('active');
      document.body.style.overflow = '';
    }
    function open(src, alt) {
      boxImg.src = src;
      boxImg.alt = alt || '';
      box.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    box.addEventListener('click', close); // backdrop, image, or × all close
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && box.classList.contains('active')) close();
    });
    return open;
  }

  function makeZoomable(img, open) {
    img.classList.add('t-zoomable');
    img.addEventListener('click', function () { open(img.currentSrc || img.src, img.alt); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var content = document.getElementById('t-content');
    var toc = document.getElementById('t-toc');
    if (!content) return;

    var mdPath = content.dataset.md;
    var assetBase = content.dataset.assets || '';
    var openLightbox = createLightbox();

    // The cover banner (static, outside the markdown) is zoomable too.
    var cover = document.querySelector('.t-cover');
    if (cover) makeZoomable(cover, openLightbox);

    fetch(mdPath)
      .then(function (r) {
        if (!r.ok) throw new Error('Failed to load tutorial (' + r.status + ')');
        return r.text();
      })
      .then(function (md) {
        content.innerHTML = marked.parse(stripFrontmatter(md));

        // Rewrite relative `assets/...` image paths to the .md's folder.
        content.querySelectorAll('img').forEach(function (img) {
          var raw = img.getAttribute('src') || '';
          if (raw.indexOf('assets/') === 0) {
            img.setAttribute('src', assetBase + raw);
          }
          img.setAttribute('loading', 'lazy');
          makeZoomable(img, openLightbox);
        });

        // Open external links in a new tab.
        content.querySelectorAll('a[href^="http"]').forEach(function (a) {
          a.target = '_blank';
          a.rel = 'noopener';
        });

        var links = buildToc(content, toc);
        setupScrollspy(content, links);
      })
      .catch(function (err) {
        content.innerHTML = '<p style="color:#b91c1c">' + err.message + '</p>';
      });
  });
})();
