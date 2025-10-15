function calcularTabuada(){
    const tabuada = Number(document.getElementById('tabuada').value);
    const limiteInit = Number(document.getElementById('limiteInit').value);
    const limiteFinal = Number(document.getElementById('limiteFinal').value);
    const corpoTabela = document.getElementById('corpoTabela');
    corpoTabela.innerHTML = ""

    for(let i = limiteInit; i <= limiteFinal; i++){
        const resultado = tabuada * i
        const linha = document.createElement('tr')
        const coluna1 = document.createElement('td')
        coluna1.textContent = tabuada
        const coluna2 = document.createElement('td')
        coluna2.textContent = 'x'
        const coluna3 = document.createElement('td')
        coluna3.textContent = i
        const coluna4 = document.createElement('td')
        coluna4.textContent = '='
        const coluna5 = document.createElement('td')
        coluna5.textContent = resultado
        linha.appendChild(coluna1)
        linha.appendChild(coluna2)
        linha.appendChild(coluna3)
        linha.appendChild(coluna4)
        linha.appendChild(coluna5)
        corpoTabela.appendChild(linha)
    }
}