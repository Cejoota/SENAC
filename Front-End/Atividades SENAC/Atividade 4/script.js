function main() {
  let num1, num2, contador;
  let mensagem = "";

  num1 = Number(prompt("Digite o primeiro número: "));
  num2 = Number(prompt("Digite o segundo número: "));

  if (num1 == num2) {
    alert("Impossível incrementar ou decrementar!");
  } else if (num1 < num2) {
    mensagem += num1 + " - Início\n";
    for (contador = num1 + 1; contador < num2; contador++) {
      mensagem += contador + "\n";
    }
    mensagem += num2 + " - Fim";
    alert(mensagem);
  } else {
    mensagem += num1 + " - INÍCIO\n";
    for (contador = num1 - 1; contador > num2; contador--) {
      mensagem += contador + "\n";
    }
    mensagem += num2 + " - FIM";
    alert(mensagem);
    alert("Atividade 4 - Finalizada!!\nDesenvolvido por Celso Junior ©");
  }
}

main();
