const listaLivros = require("./database");

const readline = require("readline-sync");

let entradauser = readline.question("deseja buscar um livro? 1. sim 2.nao");

function opcoes(num) {
  num = entradauser;
  if (num === "1") {
    console.log("essas são as categoria disponiveis: ");
    console.log("romance | fantasia | literatura | ciencia | economia ");
    const escolha = readline.question("Qual categoria deseja? ");
    const retorno = listaLivros.filter((item) => item.categoria === escolha);
    console.table(retorno);
  } else {
    console.log("esse são todos os livros disponiveis: ");
    console.table(listaLivros);
  }
}
opcoes();
