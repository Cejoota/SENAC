function CalcularMedia() {
  const nomeAluno = document.getElementById("nomeAluno");
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  let media = (nota1 + nota2 + nota3 + nota4) / 4;

  document.getElementById("media").value = media.toFixed(2);

  if (media >= 7) {
    document.getElementById("resultado").value = "Aprovado";
  } else if (media >= 5) {
    document.getElementById("resultado").value = "Em Recuperação";
  } else {
    document.getElementById("resultado").value = "Reprovado";
  }
}

