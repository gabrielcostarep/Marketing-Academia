const main = document.getElementsByTagName('main')[0];

document.addEventListener('load', (e) => {
  const el = e.target;
  const href = el.getAttribute('href');

  fetch('home.html')
    .then((pagina) => pagina.text())
    .then((paginaHTML) => loadPage(paginaHTML, href));
});

document.addEventListener('click', (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    request(el);
  }
});

async function request(el) {
  try {
    const href = el.getAttribute('href');
    const pagina = await fetch(href);

    if (pagina.status !== 200) throw new Error('Pagina Not Found');

    const paginaHTML = await pagina.text();

    loadPage(paginaHTML, href);
  } catch (e) {
    console.log(e);
  }
}

function loadPage(responde, href) {
  if (href === 'home.html') main.setAttribute('class', 'mainHome');
  if (href === 'planos.html') main.setAttribute('class', 'mainPlans');
  if (href === 'contato.html') main.setAttribute('class', 'mainContact');

  main.innerHTML = responde;
}
