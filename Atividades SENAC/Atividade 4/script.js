

function main() {
  let opcao;

  opcao = Number(prompt("Qual a conversão que deseja realizar?\n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius"));

  if (opcao == 1) {
    celsius();
  } else if (opcao == 2) {
    fahrenheit();
  } else {
    alert("Opção inválida!");
  }
  alert("Desafio 4 - Finalizada!!\nDesenvolvido por Celso Junior ©");
}


function celsius() {
  let ºC, ºF;

  ºC = Number(prompt("Qual a temperatura em ºC?"));

  ºF = (ºC * 9) / 5 + 32;

  alert(`A temperatura é:  ${ºF.toFixed(2)}ºF`);
}

function fahrenheit() {
  let ºC, ºF;

  ºF = Number(prompt("Qual a temperatura em ºF?"));

  ºC = ((ºF - 32) * 5) / 9;

  alert(`A temperatura é: ${ºC.toFixed(2)}ºC`);
}

main();

