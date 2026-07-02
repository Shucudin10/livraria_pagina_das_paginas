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