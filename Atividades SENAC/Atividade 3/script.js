function main() {
  let salario, vendas;
  let nomeVendedor 
  
  nomeVendedor = prompt("Qual o nome do vendedor?");
  salario = Number(prompt("Qual o salário do vendedor?"));
  vendas = Number(prompt("Qual o valor das vendas?"));
 
  calculo(salario, vendas, nomeVendedor);

  alert(mensagem)

  alert("Atividade 3 - Finalizada!!\nDesenvolvido por Celso Junior ©");
}

function calculo(salarioVendedor, vendasVendedor, nomeVendedor) {
  let comissao
  let mensagem

  if (vendasVendedor >= 3001) {
    comissao = (vendasVendedor * 15) / 100;    
  } else if (vendasVendedor >= 1500 && vendasVendedor <= 3000){
    comissao = (vendasVendedor * 10) / 100;
  }
  else{
    comissao = (vendasVendedor * 5) / 100;
  }
  pagTotal = comissao + salarioVendedor;

  mensagem = alert(`
    Nome: ${nomeVendedor}
    Salário: R$ ${salarioVendedor}
    Vendas: R$ ${vendasVendedor}
    Comissão: R$ ${comissao}
    Salário Total: R$ ${pagTotal}
    `);

  return mensagem

}

main();
