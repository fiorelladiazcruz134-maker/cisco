// ── QUANTITY ──
function changeQty(d) {
  const i = document.getElementById('qty');
  i.value = Math.max(1, parseInt(i.value || 1) + d);
}

// ── TABS ──
function openTab(id, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

// ── GALLERY ──
function setThumb(el, src) {
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('mainImgEl').src = src;
}

// ── DRAWER ──
function openDrawer() {
  document.getElementById('navDrawer').classList.add('open');
}

function closeDrawer() {
  document.getElementById('navDrawer').classList.remove('open');
}

// ── SEARCH ──
const PRODUCTS = [
  { name: 'Cable UTP AMP Cat 6 CMR 6-1427200-4', cat: 'AMP · Cat 6', url: '#', img: 'https://www.ds3comunicaciones.com/AMP/images/6-1427200-4-1.jpg' },
  { name: 'Cable UTP AMP Cat 6 CM 1427254-4', cat: 'AMP · Cat 6', url: 'https://www.ds3comunicaciones.com/AMP/index.html#cablecat6', img: 'https://www.ds3comunicaciones.com/AMP/images/6-1427200-4-1.jpg' },
  { name: 'Cable Cat 6 LSZH 1859345-2', cat: 'AMP · Cat 6 LSZH', url: 'https://www.ds3comunicaciones.com/AMP/index.html#cablecat6', img: 'https://www.ds3comunicaciones.com/AMP/images/6-1427200-4-1.jpg' },
  { name: 'Cable Cat 6A Apantallado 1859218-2', cat: 'AMP · Cat 6A', url: 'https://www.ds3comunicaciones.com/AMP/index.html#cablecat6', img: 'https://www.ds3comunicaciones.com/AMP/images/6-1427200-4-1.jpg' },
  { name: 'Cable Cat 6A LSZH IEC 1859381-2', cat: 'AMP · Cat 6A LSZH', url: 'https://www.ds3comunicaciones.com/AMP/index.html#cablecat6', img: 'https://www.ds3comunicaciones.com/AMP/images/Caja.jpg' },
  { name: 'Switch Cisco Catalyst C9200L-24P-4G-E', cat: 'Cisco · Switch L3', url: 'https://ds3peru.github.io/cisco/C9200L-24P-4G-E.html', img: '' },
  { name: 'Lista de precios AMP', cat: 'AMP · Catálogo', url: 'https://www.ds3comunicaciones.com/AMP/precios_amp.html', img: '' },
  { name: 'Lista de precios Cisco', cat: 'Cisco · Catálogo', url: 'https://www.ds3comunicaciones.com/cisco/precios_cisco.html', img: '' },
  { name: 'Lista de precios Mikrotik', cat: 'Mikrotik · Catálogo', url: 'https://www.ds3comunicaciones.com/mikrotik/precios_mikrotik.html', img: '' },
  { name: 'Lista de precios Ubiquiti', cat: 'Ubiquiti · Catálogo', url: 'https://www.ds3comunicaciones.com/ubiquiti/precios_ubiquiti.html', img: '' },
];

function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('searchInput').focus(), 80);
}

function closeSearchBtn() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '<div class="search-hint">Escribe para buscar productos…</div>';
}

function closeSearch(e) {
  if (e.target === document.getElementById('searchOverlay')) closeSearchBtn();
}

function doSearch(q) {
  const box = document.getElementById('searchResults');
  q = q.trim().toLowerCase();
  if (!q) {
    box.innerHTML = '<div class="search-hint">Escribe para buscar productos…</div>';
    return;
  }
  const hits = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q));
  if (!hits.length) {
    box.innerHTML = '<div class="search-empty">Sin resultados para "<b>' + q + '</b>"</div>';
    return;
  }
  box.innerHTML = hits.map(p => `
    <a class="search-result-item" href="${p.url}">
      <div class="result-thumb">${p.img ? '<img src="' + p.img + '" alt="">' : '<svg width="20" height="20" fill="none" stroke="#aaa" stroke-width="1.5" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>'}</div>
      <div><div class="result-name">${p.name}</div><div class="result-cat">${p.cat}</div></div>
    </a>`).join('');
}

function searchKeydown(e) {
  if (e.key === 'Escape') closeSearchBtn();
  if (e.key === 'Enter') {
    const first = document.querySelector('.search-result-item');
    if (first) {
      first.click();
      closeSearchBtn();
    }
  }
}

// Atajo teclado: "/" abre el buscador
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    openSearch();
  }
});
