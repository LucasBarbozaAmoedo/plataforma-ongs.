// SIMULAÇÃO DE SPA (navegação sem recarregar)
const links = document.querySelectorAll('nav a');
const mainContent = document.querySelector('main');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const url = e.target.getAttribute('href');

    fetch(url)
      .then(res => res.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const newContent = doc.querySelector('main').innerHTML;
        mainContent.innerHTML = newContent;
      })
      .catch(() => {
        mainContent.innerHTML = '<p>Erro ao carregar o conteúdo.</p>';
      });
  });
});
