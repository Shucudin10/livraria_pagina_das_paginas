// == Menu mobile == 
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

// ===== BUSCA DINÂMICA NO CATÁLOGO =====
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

// ===== FILTROS POR CATEGORIA =====
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

// ===== VALIDAÇÃO DO FORMULÁRIO =====
const form = document.getElementById('formPedido');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valido = true;

  // Nome
  const nome = document.getElementById('nome');
  const erroNome = document.getElementById('erroNome');
  if (nome.value.trim() === '') {
    erroNome.textContent = 'Por favor, informe seu nome.';
    nome.classList.add('input-error');
    valido = false;
  } else {
    erroNome.textContent = '';
    nome.classList.remove('input-error');
  }

  // Email
  const email = document.getElementById('email');
  const erroEmail = document.getElementById('erroEmail');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    erroEmail.textContent = 'Informe um e-mail válido.';
    email.classList.add('input-error');
    valido = false;
  } else {
    erroEmail.textContent = '';
    email.classList.remove('input-error');
  }

  // Título
  const titulo = document.getElementById('titulo');
  const erroTitulo = document.getElementById('erroTitulo');
  if (titulo.value.trim() === '') {
    erroTitulo.textContent = 'Informe o título da obra.';
    titulo.classList.add('input-error');
    valido = false;
  } else {
    erroTitulo.textContent = '';
    titulo.classList.remove('input-error');
  }

  // Feedback final
  const feedback = document.getElementById('formFeedback');
  if (valido) {
    feedback.textContent = '✔ Pedido enviado com sucesso! Entraremos em contato em breve.';
    feedback.className = 'form-feedback sucesso';
    feedback.style.display = 'block';
    form.reset();
  } else {
    feedback.textContent = '✖ Corrija os campos destacados antes de enviar.';
    feedback.className = 'form-feedback erro';
    feedback.style.display = 'block';
  }
});