const links = document.querySelectorAll(".menu a");
function ativarLink(link) {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

const parametros = new URLSearchParams(location.search);
function ativar(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}
parametros.forEach(ativar);

const perguntas = document.querySelectorAll(".perguntas button");
function abrir(event) {
  const controls = event.currentTarget.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativo");
  const ativo = resposta.classList.contains("ativo");
  event.currentTarget.setAttribute("aria-expanded", ativo);
}
function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", abrir);
}
perguntas.forEach(eventoPerguntas);

const galeria = document.querySelectorAll(".bicicleta-fotos img");
const galeriaContainer = document.querySelector(".bicicleta-fotos");

function trocarImagem(event) {
  const media = matchMedia("(min-width:936px)").matches;
  if (media) {
    galeriaContainer.prepend(event.currentTarget);
  }
  console.log(event);
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}
galeria.forEach(eventosGaleria);

if (window.SimpleAnime) {
  new SimpleAnime();
}
