function main() {
  // let carros = []; // declarando um array vazio
  let carros = new Array(5); // declarando a quantidade de lenght(posição) no array
  let mensagem = "";

  for (let contador = 0; contador < carros.length; contador++) {
    carros[contador] = prompt(`Digite o nome da ${contador + 1}a marca de carros: `);  
  }

  mensagem = "Segue as marcas de carros digitadas: \n";

  for (let contador = 0; contador < carros.length; contador++) {
    mensagem += carros[contador] + "\n";
  }

  alert (mensagem);
  console.log(carros); // exibe todos os dados do vetor no console.
}


main();
