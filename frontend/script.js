
const nome = "Kauan Santos";
const elemento = document.getElementById("typing");

let indice = 0;
let apagando = false;

function digitar() {
  if (!apagando) {
    elemento.textContent = nome.slice(0, indice + 1);
    indice++;

    if (indice === nome.length) {
      apagando = true;
      setTimeout(digitar, 2000);
      return;
    }
  } else {
    elemento.textContent = nome.slice(0, indice - 1);
    indice--;

    if (indice === 0) {
      apagando = false;
      setTimeout(digitar, 500);
      return;
    }
  }

  setTimeout(digitar, apagando ? 60 : 120);
}

digitar();


// ===================== MENU MOBILE =====================

const toggle = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("open");
});

links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
  });
});


// ===================== ANIMAÇÃO AO ROLAR =====================

const elementosReveal = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observer.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.15 }
);

elementosReveal.forEach((el) => observer.observe(el));


// ===================== LINK ATIVO NA NAVEGAÇÃO =====================

const secoes = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar__links a");

window.addEventListener("scroll", () => {
  const posicaoAtual = window.scrollY + 100;

  secoes.forEach((secao) => {
    if (posicaoAtual >= secao.offsetTop) {
      const id = secao.getAttribute("id");

      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });
});


// ===================== ANO AUTOMÁTICO =====================

document.getElementById("ano").textContent = new Date().getFullYear();


// ===================== TROCA DE IDIOMA =====================

const languageToggle = document.getElementById("language-toggle");

let idiomaAtual = "pt";

function alterarIdioma() {

  const elementos = document.querySelectorAll("[data-pt][data-en]");

  elementos.forEach((elemento) => {

    if (idiomaAtual === "pt") {
      elemento.textContent = elemento.dataset.en;
    } else {
      elemento.textContent = elemento.dataset.pt;
    }

  });

  if (idiomaAtual === "pt") {
    idiomaAtual = "en";
    languageToggle.textContent = "PT";
    document.documentElement.lang = "en";
  } else {
    idiomaAtual = "pt";
    languageToggle.textContent = "IN";
    document.documentElement.lang = "pt-BR";
  }
}

languageToggle.addEventListener("click", alterarIdioma);

