function main(){
    let carros;
    let mensagem = "";

    for (let car = 0; car < 5; car++) {
    carros = prompt("Digite o nome de 5 marcas de carros: ");
    mensagem += carros + "\n";
    }
    alert(` Segue as marcas de carros digitadas:\n${mensagem}`);	

    alert("Projeto 7 - Finalizado!!\nDesenvolvido por Celso Junior ©");
}

main();