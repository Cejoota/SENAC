document.addEventListener("DOMContentLoaded", () => {
  const pesoInput = document.getElementById("peso");
  const alturaInput = document.getElementById("altura");
  const calcularButton = document.getElementById("calcular");
  const limparButton = document.getElementById("limpar");
  const resultadoIMC = document.getElementById("resultado");
  const classificacao = document.getElementById("classificacao");
  const dicas = document.getElementById("dicas");
  const grafico = document.getElementById("grafico");

  const emojis = {
    baixo: "😟",
    normal: "😄",
    sobrepeso: "⚠️",
    obesidade: "🚨",
  };

  const dicasTexto = {
    baixo: "Coma bem e cuide da saúde!",
    normal: "Continue assim! Excelente!",
    sobrepeso: "Talvez seja hora de se exercitar!",
    obesidade: "Procure ajuda profissional!",
  };

  calcularButton.addEventListener("click", () => {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (!validar(peso)) {
      pesoInput.style.borderColor = "red";
      return;
    } else {
      pesoInput.style.borderColor = "#ccc";
    }

    if (!validar(altura)) {
      alturaInput.style.borderColor = "red";
      return;
    } else {
      alturaInput.style.borderColor = "#ccc";
    }

    const imc = peso / (altura * altura);
    const info = classificarIMC(imc);

    resultadoIMC.style.color = info.cor;
    classificacao.textContent = `${info.texto} ${emojis[info.tipo]}`;
    classificacao.style.color = info.cor;
    dicas.textContent = dicasTexto[info.tipo];

    animarContagem(imc, resultadoIMC);
    animarBarra(imc);
  });

  function classificarIMC(imc) {
    if (imc < 18.5)
      return { texto: "Abaixo do peso", cor: "var(--lowpeso)", tipo: "baixo" };
    if (imc < 25)
      return { texto: "Normal", cor: "var(--normal)", tipo: "normal" };
    if (imc < 30)
      return { texto: "Sobrepeso", cor: "var(--sobrepeso)", tipo: "sobrepeso" };
    return { texto: "Obesidade", cor: "var(--obesidade)", tipo: "obesidade" };
  }

  function animarContagem(valor, elemento) {
    let start = 0;
    const duration = 1000;
    const step = Math.max(0.1, valor / (duration / 30));
    const interval = setInterval(() => {
      start += step;
      if (start >= valor) {
        elemento.textContent = valor.toFixed(1);
        clearInterval(interval);
      } else {
        elemento.textContent = start.toFixed(1);
      }
    }, 30);
  }

  function animarBarra(valor) {
    grafico.innerHTML = "";
    const barra = document.createElement("div");
    barra.className = "barra";
    barra.style.width = "0%";
    grafico.appendChild(barra);
    setTimeout(() => {
      barra.style.width = Math.min((valor / 40) * 100, 100) + "%";
    }, 100);
  }

  function validar(valor) {
    return !isNaN(valor) && valor > 0;
  }

  function limparCampos() {
    pesoInput.value = "";
    alturaInput.value = "";
    resultadoIMC.textContent = "";
    classificacao.textContent = "";
    dicas.textContent = "";
    grafico.innerHTML = "";
  }

  limparButton.addEventListener("click", limparCampos);
});

const darkBtn = document.getElementById("dark-mode");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkBtn.textContent = "🌞";
  } else {
    darkBtn.textContent = "🌜";
  }
});

const bonecoSVG = document.getElementById("boneco-svg");
const alturaInput = document.getElementById("altura");

alturaInput.addEventListener("input", () => {
  const altura = parseFloat(alturaInput.value);

  if (isNaN(altura) || altura <= 0) {
    bonecoSVG.style.transform = "scaleY(0.9)";
    return;
  }

  const minAltura = 1.2;
  const maxAltura = 2.2;

  let escala = (altura - minAltura) / (maxAltura - minAltura);
  escala = Math.min(Math.max(escala, 0), 1);

  const escalaFinal = 0.9 + escala * 0.4;

  bonecoSVG.style.transform = `scaleY(${escalaFinal.toFixed(2)})`;
});