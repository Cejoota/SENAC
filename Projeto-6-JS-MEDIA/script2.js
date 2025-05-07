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

// function Tabuada(tabuadaUsuario){
//   //escopo específico
//   let contador = 0, resultado, saidaTabuada = "";

//   while (contador <= 10) {
//       resultado = tabuadaUsuario * contador;
//       if (contador === 0) {
//           saidaTabuada = ` ${tabuadaUsuario} X ${contador} = ${resultado}`;
//       } else {
//           saidaTabuada = `${saidaTabuada} \n ${tabuadaUsuario} X ${contador} = ${resultado}`; //Template String
//       }
//       contador++;
//   }
//   return saidaTabuada;
// }

// ----------------------------------------------------------------------------

// CODIGO COM LIMITADOR

// function main() {
//   let tabuada, limite;

//   tabuada = Number(prompt("Qual a tabuada você deseja resolver?"));
//   limite = Number(prompt("Qual o limite da tabuada?"));

//   console.log(tabuadaLimite(tabuada, limite));
//   alert(tabuadaLimite(tabuada, limite));
// }

// function tabuadaLimite(tabuadaUsuario, limiteUsuario){
//   //escopo específico
//   let contador = 0, resultado, saidaTabuada = "";

//   while (contador <= limiteUsuario) {
//       resultado = tabuadaUsuario * contador;
//       if (contador === 0) {
//           saidaTabuada = ` ${tabuadaUsuario} X ${contador} = ${resultado}`;
//       } else {
//           saidaTabuada = `${saidaTabuada} \n ${tabuadaUsuario} X ${contador} = ${resultado}`; //Template String
//       }
//       contador++;
//   }
//   return saidaTabuada;
// }
// main();

// ----------------------------------------------------------------------------

// USANDO PARAMETROS PARA CONVERSÕES

function main() {
  let valorConverter, valorConvertido;
  let opcaoMoeda;
  let simboloMoeda;

  opcaoMoeda = prompt(
    "Olá, Qual conversão você deseja realizar hoje? 1 - Dólar 2 - Euro"
  );

  if (opcaoMoeda != 1 && opcaoMoeda != 2) {
    alert("Opção inválida!");
  } else {
    valorConverter = prompt("Digite o valor que deseja converter: (em R$)");
    if (opcaoMoeda == 1) {
      simboloMoeda = "Dólar";
      valorConvertido = RealDolar(valorConverter);
    } else {
      simboloMoeda = "Euro";
      valorConvertido = RealEuro(valorConverter);
    }
    alert("O valor convertido para " + simboloMoeda + " resultou em " + valorConvertido);
  }
}

function RealDolar(valorConverter) {
  let valorConvertido;
  const cotacao = 5.76;

  valorConvertido = (valorConverter / cotacao).toFixed(2);

  return "U$" + valorConvertido;
}

function RealEuro(valorConverter) {
  let valorConvertido;
  const cotacao = 6.52;

  valorConvertido = (valorConverter / cotacao).toFixed(2);

  return `€${valorConvertido}`;
}

main();
