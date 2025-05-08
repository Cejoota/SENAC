function main() {
  let primeiroNum, segundoNum, contador, limite;

  primeiroNum = Number(prompt("Digite o primeiro número: "));
  segundoNum = Number(
    prompt("Digite o segundo número, maior que o primeiro: ")
  );
  let resultado = "";

  for (contador = primeiroNum + 1; contador < segundoNum; contador++) {
    if (contador % 2 == 0) {
      resultado += contador + " - PAR\n";
    } else {
      resultado += contador + " - ÍMPAR\n";
    }
  }
  alert(resultado);
  alert("Atividade 2 - Finalizada!!\nDesenvolvido por Celso Junior ©");
}

main();
