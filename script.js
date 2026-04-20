//Pega os elemtnos html
const botao = document.querySelector(".menu-hamburguer");
const nav = document.querySelector("header nav");

//Quando o botão for clicado, executa essa função

botao.addEventListener("click", () => {
  // togle adiciona a classe 'ativo' se não tiver, remove se tiver

  botao.classList.toggle("ativo");
  nav.classList.toggle("ativo");

  //atualiza o aria-expanded para acessibilidade
  // se o nav tem a classe ativo, o menu está aberto(true), se não fechado(false)
  const estaAberto = nav.classList.contains("ativo");
  botao.setAttribute("aria-expanded", estaAberto);
});

// fecha o menu ao clicar em qualquer link dentro do nav
const links = document.querySelectorAll("header nav a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    botao.classList.remove("ativo");
    nav.classList.remove("ativo");
    botao.setAttribute("aria-expanded", false);
  });
});
