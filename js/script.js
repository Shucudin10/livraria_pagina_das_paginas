// == Menu mobile == 
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

// ===== 2. BUSCA DINÂMICA NO CATÁLOGO =====
const campoBusca = document.getElementById('buscaLivros');
const cards = document.querySelectorAll('.card');
const emptyMsg = document.getElementById('emptyMsg');

campoBusca.addEventListener('input', function () {
  const termo = this.value.toLowerCase();
  let visiveis = 0;

  cards.forEach(function (card) {
    const texto = card.innerText.toLowerCase();
    if (texto.includes(termo)) {
      card.style.display = 'flex';
      visiveis++;
    } else {
      card.style.display = 'none';
    }
  });

  emptyMsg.style.display = visiveis === 0 ? 'block' : 'none';
});

// ===== 3. FILTROS POR CATEGORIA =====
const filtrosBtns = document.querySelectorAll('.filtro-btn');

filtrosBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Remove active de todos
    filtrosBtns.forEach(function (b) { b.classList.remove('active'); });
    this.classList.add('active');

    const categoria = this.dataset.categoria;
    let visiveis = 0;

    cards.forEach(function (card) {
      if (categoria === 'todos' || card.dataset.categoria === categoria) {
        card.style.display = 'flex';
        visiveis++;
      } else {
        card.style.display = 'none';
      }
    });

    emptyMsg.style.display = visiveis === 0 ? 'block' : 'none';

    // Limpa a busca ao trocar filtro
    campoBusca.value = '';
  });
});