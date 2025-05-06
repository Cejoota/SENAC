// function main() {
//   let tabuada, contador, resultado, resposta;
//   let nome;
//   let mensagem = "";
//   resposta = true;
//   contador = 0;

//   nome = prompt("Qual o seu nome");

//   while (resposta === true) {
//     tabuada = Number(prompt(nome + ", qual tabuada você deseja resolver?"));
//     limite = Number(prompt(nome + ", até qual limite deseja a tabuada?"));

//     alert(nome + ", a tabuada do " + tabuada + " é:");
//     mensagem = "";

//     for (contador = 0; contador <= 10; contador++) {
//       resultado = tabuada * contador;
//       mensagem += tabuada + " x " + contador + " = " + resultado + "\n";
//     }

//     alert(mensagem);

//     resposta = confirm("Deseja fazer outra tabuada?");
//   }
//   alert("Programa finalizado!");
// }

// main();


// ----------------------------------------------------------------------------

function main() {
    let tabuada, contador, resultado, resposta, limite;
    let nome;
    let mensagem = "";
    resposta = true;
    contador = 0;
  
    nome = prompt("Qual o seu nome");
  
    while (resposta === true) {
      tabuada = Number(prompt(nome + ", qual tabuada você deseja resolver?"));
      limite = Number(prompt(nome + ", até qual limite deseja a tabuada?"));
  
      alert(nome + ", a tabuada do " + tabuada + " até o " + limite + " é:");
      mensagem = "";
  
      for (contador = 0; contador <= limite; contador++) {
        resultado = tabuada * contador;
        mensagem += tabuada + " x " + contador + " = " + resultado + "\n";
      }
  
      alert(mensagem);
  
      resposta = confirm("Deseja fazer outra tabuada?");
    }
    alert("Programa finalizado!");
  }
  
  main();