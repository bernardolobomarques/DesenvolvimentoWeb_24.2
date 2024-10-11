let resultado;

let preco = 30;

/*if(preco < 40){
  resultado = "Livro é barato."
} else {
  resultado = "Livro não é barato."
}*/

preco = 50;

resultado = preco < 40 ? "Livro é barato." : "Livro não é barato.";

const meuArray = [1,2,3];

const meuObjeto = {
  texto : "Uma propriedade.",
  numero : 30
}

let minha_var = "endereco";

function soma(a, b){
  return a + b;
}

const anonima = function (a, b){
  return a + b;
}

const arrow = (a, b) => {
  return a + b;
}

const arrow2 = (a, b) => a + b;

const arrow3 = a => a + 2;

const dobro = elemento => (console.log(elemento *2));