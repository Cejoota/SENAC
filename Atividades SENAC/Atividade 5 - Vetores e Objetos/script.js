function main() {
  let alunos = new Array(3);
  let mensagem = "";

  for (let contador = 0; contador < alunos.length; contador++) {
    const aluno = {
      nome: "",
      nota1: 0,
      nota2: 0,
      nota3: 0,
      nota4: 0,
      mediaFinal: 0,
      situacao: "",
    };

    aluno.nome = prompt(`Digite o nome do aluno ${contador + 1}: `);
    aluno.nota1 = Number(prompt("Digite a primeira nota: "));
    aluno.nota2 = Number(prompt("Digite a segunda nota: "));
    aluno.nota3 = Number(prompt("Digite a terceira nota: "));
    aluno.nota4 = Number(prompt("Digite a quarta nota: "));
    aluno.mediaFinal =
      (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4;

    if (aluno.mediaFinal >= 7) {
      aluno.situacao = "Aprovado";
    } else if (aluno.mediaFinal >= 5 && aluno.mediaFinal <= 6.9) {
      aluno.situacao = "Recuperação";
    } else {
      aluno.situacao = "Reprovado";
    }

    alunos[contador] = aluno;
  }

  for (let contador = 0; contador < alunos.length; contador++) {
    mensagem +=
      `Nome: ${alunos[contador].nome}\n` +
      `Nota 1: ${alunos[contador].nota1}\n` +
      `Nota 2: ${alunos[contador].nota2}\n` +
      `Nota 3: ${alunos[contador].nota3}\n` +
      `Nota 4: ${alunos[contador].nota4}\n` +
      `Média final: ${alunos[contador].mediaFinal}\n` +
      `Situação: ${alunos[contador].situacao}\n`;
  }
  alert(mensagem);
  alert("Atividade 5 - Finalizada!!\nDesenvolvido por Celso Junior ©");
}

main();
