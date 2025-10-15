function Conversor() {
  const valor = parseFloat(document.getElementById("valor").value);
  const moeda = document.getElementById("moeda").value;
  const resultado = document.getElementById("resultado");

  if (!isNaN(valor) && valor > 0) {
    let convertido;
    let simbolo;

    if (moeda === "dolar") {
      convertido = valor / 5.67;
      simbolo = "US$";
      resultado.style.background =
        "linear-gradient(to right, #3C3B6E, #FFFFFF, #B22234";
      resultado.style.color = "#000";
    } else if (moeda === "euro") {
      convertido = valor / 6.39;
      simbolo = "€";
      resultado.style.background =
        "linear-gradient(to right, #003399, #FFD700)";
      resultado.style.color = "#000";
    }

    resultado.value = `${simbolo} ${convertido.toFixed(2)}`;
  } else {
    resultado.value = "Digite um valor válido";
    resultado.style.background = "red";
    resultado.style.color = "#fff";
  }
}
