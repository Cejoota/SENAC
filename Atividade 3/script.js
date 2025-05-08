function main() {
  let salario, vendas, comissao, pagTotal;
  let nomeVendedor = prompt("Qual o nome do vendedor?");

  salario = Number(prompt("Qual o salário do vendedor?"));
  vendas = Number(prompt("Qual o valor das vendas?"));

  if (vendas >= 5000) {
    comissao = (vendas * 15) / 100;    
  } else if (vendas >= 1500 && vendas <= 3000){
    comissao = (vendas * 10) / 100;
  }
  else{
    comissao = (vendas * 5) / 100;
  }
  pagTotal = comissao + salario;
  
  alert(`
  Nome: ${nomeVendedor}
  Salário: R$ ${salario}
  Vendas: R$ ${vendas}
  Comissão: R$ ${comissao}
  Salário Total: R$ ${pagTotal}
  `);
  alert("Atividade 3 - Finalizada!!\nDesenvolvido por Celso Junior ©");
}

main();
