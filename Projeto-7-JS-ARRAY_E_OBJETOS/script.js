// function main(){
//     let carros;
//     let mensagem = "";

//     for (let car = 0; car < 5; car++) {
//     carros = prompt("Digite o nome de 5 marcas de carros: ");
//     mensagem += carros + "\n";
//     }
//     alert(` Segue as marcas de carros digitadas:\n${mensagem}`);

//     alert("Projeto 7 - Finalizado!!\nDesenvolvido por Celso Junior ©");
// }

function main() {
  let carros = []; // declarando um array

  carros[0] = prompt("Digite o nome da 1a marca de carros: "); // lendo o vetor na posição 0 que é a primeira posição.
  carros[1] = prompt("Digite o nome da 2a marca de carros: ");
  carros[2] = prompt("Digite o nome da 3a marca de carros: ");
  carros[3] = prompt("Digite o nome da 4a marca de carros: ");
  carros[4] = prompt("Digite o nome da 5a marca de carros: ");

  // alert(` Segue as marcas de carros digitadas:\n${carros}`); // exibe os dados do vetor.
  console.log(carros); // exibe todos os dados do vetor no console.

  alert(` Segue as marcas de carros digitadas:
${carros[0]}
${carros[1]}
${carros[2]}
${carros[3]}
${carros[4]}`); // exibe os dados com quebra de linha
}

main();
