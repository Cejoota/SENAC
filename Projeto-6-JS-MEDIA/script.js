// function main() {

//   let notaBim1, notaBim2, notaBim3, notaBim4, media;

//   notaBim1 = Number(prompt("Entre com o valor da primeira nota"));

//   notaBim2 = Number(prompt("Entre com o valor da segunda nota"));

//   notaBim3 = Number(prompt("Entre com o valor da terceira nota"));

//   notaBim4 = Number(prompt("Entre com o valor da quarta nota"));

//   media = (notaBim1 + notaBim2 + notaBim3 + notaBim4) / 4;

//   alert(media);

//   if (media >= 7) {
//     alert("Juquinha está excepcionalmente aprovado");
//   } else {
//     if (media >= 5) {
//       alert("Juquinha ta de recuperação");
//     } else {
//       alert(
//         "Juquinha vai ter que fazer o ano de novo por que não estudou"
//       );
//     }
//   }
// }
// -----------------------------------------------------------------------------------------------------------------
// function main() {
//   let reais, cotação, resultado;

//   reais = Number(prompt("Quantos reais você quer converter?"));
//   cotação = Number(prompt("Qual a cotação do dólar?"));
//   resultado = reais / cotação;
//   resultado = resultado.toFixed(2);
//   alert('Hoje, você tem ' + resultado + ' dólares!');
// }

// main();
// -----------------------------------------------------------------------------------------------------------------

function main() {
  let reais, cotação, resultado;
  let moeda;

  moeda = prompt("Qual a moeda que você quer converter?");

  if (
    moeda == "dolar" ||
    moeda == "dólar" ||
    moeda == "Dolar" ||
    moeda == "Dólar"
  ) {
    reais = Number(prompt("Quantos reais você quer converter?"));
    cotação = Number(prompt("Qual a cotação do dólar?"));
    resultado = reais / cotação;
    resultado = resultado.toFixed(2);
    alert("Hoje, você tem " + resultado + " dólares!");
  } else {
    if (moeda == "euro" || moeda == "Euro") {
      reais = Number(prompt("Quantos reais você quer converter?"));
      cotação = Number(prompt("Qual a cotação do euro?"));
      resultado = reais / cotação;
      resultado = resultado.toFixed(2);
      alert("Hoje, você tem " + resultado + " euros!");
    } else {
      alert("Não foi possivel identificar a moeda");
    }
  }
}

main();
