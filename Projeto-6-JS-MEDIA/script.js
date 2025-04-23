function main() {
  
  let notaBim1, notaBim2, notaBim3, notaBim4, media;


  notaBim1 = Number(prompt("Entre com o valor da primeira nota"));


  notaBim2 = Number(prompt("Entre com o valor da segunda nota"));


  notaBim3 = Number(prompt("Entre com o valor da terceira nota"));


  notaBim4 = Number(prompt("Entre com o valor da quarta nota"));

  media = (notaBim1 + notaBim2 + notaBim3 + notaBim4) / 4;

  alert(media);

  if (media >= 7) {
    alert("Juquinha está excepcionalmente aprovado");
  } else {
    if (media >= 5) {
      alert("Juquinha ta de recuperação");
    } else {
      alert(
        "Juquinha vai ter que fazer o ano de novo por que nao estudou"
      );
    }
  }
}

main();
