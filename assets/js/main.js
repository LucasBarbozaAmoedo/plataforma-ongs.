
const btnMenu = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav ul');

if (btnMenu && navMenu) {
  btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// ANIMAÇÃO DE BOTÕES (efeito de passar o mouse)
const botoes = document.querySelectorAll('button, .botao');

botoes.forEach(botao => {
  botao.addEventListener('mouseenter', () => {
    botao.style.transform = 'scale(1.05)';
  });
  botao.addEventListener('mouseleave', () => {
    botao.style.transform = 'scale(1)';
  });
});
