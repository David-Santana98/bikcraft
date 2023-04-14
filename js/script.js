// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar Ìtems do Orçamento

const parametros = new URLSearchParams(location.search);

function ativaProduto(parametro) {
    const elemento = document.getElementById(parametro)
    if (elemento) {
    elemento.checked = true;
    }
    console.log(elemento);
}

parametros.forEach(ativaProduto)

