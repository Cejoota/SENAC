function main(){
    let carros;
    let mensagem = "";

    for (let car = 0; car < 5; car++) {
    carros = prompt("Digite o nome de 5 marcas de carros: ");
    mensagem += carros + "\n";
    }
    alert(mensagem);
}

main();