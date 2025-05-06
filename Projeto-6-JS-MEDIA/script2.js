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

// function main() {
//     let tabuada, contador, resultado, resposta, limite;
//     let nome;
//     let mensagem = "";
//     resposta = true;
//     contador = 0;

//     nome = prompt("Qual o seu nome");

//     while (resposta === true) {
//       tabuada = Number(prompt(nome + ", qual tabuada você deseja resolver?"));
//       limite = Number(prompt(nome + ", até qual limite deseja a tabuada?"));

//       alert(nome + ", a tabuada do " + tabuada + " até o " + limite + " é:");
//       mensagem = "";

//       for (contador = 0; contador <= limite; contador++) {
//         resultado = tabuada * contador;
//         mensagem += tabuada + " x " + contador + " = " + resultado + "\n";
//       }

//       alert(mensagem);

//       resposta = confirm("Deseja fazer outra tabuada?");
//     }
//     alert("Programa finalizado!");
//   }

//   main();

// ----------------------------------------------------------------------------

// function Tabuada(nomeUsuario, tabuadaUsuario, limiteUsuario) {
//   let contador, resultado, resposta, limiteUsuario, tabuadaUsuario;
//   let mensagem = "";
//   resposta = true;
//   while (resposta === true) {

//     alert(nomeUsuario + ", a tabuada do " + tabuadaUsuario + " até o " + limiteUsuario + " é:");
//     mensagem = "";

//     for (contador = 0; contador <= limiteUsuario; contador++) {
//       resultado = tabuadaUsuario * contador;
//       mensagem += tabuadaUsuario + " x " + contador + " = " + resultado + "\n";
//     }

//     alert(mensagem);

//     resposta = confirm("Deseja fazer outra tabuada?");
//   }
//   return tabuadaUsuario;
// }

// function main() {
//   let tabuada, contador, limite;
//   let nome;
//   contador = 0;

//   nome = prompt("Qual o seu nome");
//   tabuada = Number(prompt(nome + ", qual tabuada você deseja resolver?"));
//   limite = Number(prompt(nome + ", até qual limite deseja a tabuada?"));

//   Tabuada(nome, tabuada, limite);
//   alert("Programa finalizado!");
//   console.log(Tabuada(tabuadaUsuario));
// }

// main();

// ----------------------------------------------------------------------------

// Codigo prof

//escopo global
 
function Tabuada(tabuadaUsuario){
  //escopo específico
  let contador, resultado, saidaTabuada;

  while (contador <= 10) {    
      resultado = tabuadaUsuario * contador;
      if (contador === 0) {
          saidaTabuada = tabuadaUsuario + "X" + contador + "=" + resultado;
      } else {
          saidaTabuada = `${saidaTabuada} \n ${tabuadaUsuario} X ${contador} = ${resultado}`; //Template String      
      }
      contador++;        
  }    
  return saidaTabuada;
}


function main() {
  let tabuada;

  tabuada = Number(prompt("Qual a tabuada você deseja resolver?"));
   
  console.log(Tabuada(tabuada));
  alert(Tabuada(tabuada));    
}

// pegar os dados
// faz tabuada
// exibe a saída  

main();