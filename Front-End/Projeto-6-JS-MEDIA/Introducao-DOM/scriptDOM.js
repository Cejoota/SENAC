function CalcularMedia() {
  const nomeAluno = document.getElementById("nomeAluno");
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  let media = (nota1 + nota2 + nota3 + nota4) / 4;

  document.getElementById("media").value = media.toFixed(2);

  if (media >= 7) {
    document.getElementById("resultado").value = "Aprovado";
    document.getElementById("resultado").style.backgroundColor = "green";
  } else if (media >= 5) {
    document.getElementById("resultado").value = "Em Recuperação";
    document.getElementById("resultado").style.backgroundColor = "orange";
  } else {
    document.getElementById("resultado").value = "Reprovado";
    document.getElementById("resultado").style.backgroundColor = "red";
  }
}


// function ExecutarTestes(){
// // Pegar conteudo de um elemento de formulario utilizando ID

// let conteudoInput = document.getElementById("nomeAluno").value;

// // Pegar o elemento de formulario utilizando ID

// let input = document.getElementById("nomeAluno");

// // pegar o elemento de formulario utilizando Classe - nota 4

// let inputNota4 = document.getElementsByClassName("form__textbox")[4].value;

// // pegar o elemento de formulario utilizando tag - nota 2

// let nota2 = document.getElementsByTagName("input")[2].value;

// // pegar conteudo de um elemento tag - "p" -- resultado do aluno

// let tagP = document.getElementsByTagName("p")[0].innerHTML;

// // Mudar o valor de um elemento de formulario - nome - colocar Mariazinha

// document.getElementById("nomeAluno").value = "Mariazinha";

// // Mudar o valor de um elemento tag - a tag p - Trocar para "Avaliação final do Aluno"

// document.getElementsByTagName("p")[0].innerHTML = "Avaliação final do Aluno";

// // Inserindo UMA li's em uma ul preexistente

// // const ul = document.getElementById("lista");
// // ul.innerHTML = "<li> Item </li>"

// // Inserindo VARIAS li's em uma ul preexistente

// let ul = document.getElementsByTagName("ul")[0];
// let li = document.createElement("li");
// li.innerHTML = "TEXTO";
// ul.appendChild(li);

// // Mudando a cor da letra do elemento p - utilizando a propriedade style

// document.getElementsByTagName("p")[0].style.color = "red";

// // mudando a cor de fundo do formulario - utlilizando a propriedade style

// document.getElementsByTagName("form")[0].style.backgroundColor = "green";

// Usando o querySelector para pegar a primeira correspondencia existente
// Quando buscamos ID temos que colocar # e quando buscamos Class temos que colocar .

// document.querySelector("#nomeAluno");
// document.querySelector("p");
// document.querySelector(".form__textbox");

// Usando o querySelectorAll para pegar TODOS que atendam ao criterio. SEMPRE retorna um array.
// Tambem temos que colocar # para ID e . para Class

// document.querySelectorAll("#nomeAluno");
// document.querySelectorAll("p");
// document.querySelectorAll(".form__textbox");

// }