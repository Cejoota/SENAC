// let nomes = new Array(21); // criando array de 21 posições para nomes
// let idades = new Array(21); // criando array de 21 posições para idades
// let cpfs = new Array(21); // criando array de 21 posições para cpfs

// nomes[0] = "Juquinha";
// idades[0] = 40;
// cpfs[0] = "12345678900";

// // CRIANDO UM OBJETO
// const pessoa = {nome:"Juquinha", idade: 40, cpf: "12345678900"}; // criado objeto pessoa
// const pessoas = new Array(21); // criado array para guardar pessoas

// // exibindo informações do objeto

// alert(pessoas.nome);

// // atribuindo valores ao objeto

// pessoas.nome = prompt("Qual o nome da pessoa?");
// pessoas.idade = prompt("Qual a idade da pessoa?");
// pessoas.cpf = prompt("Qual o CPF da pessoa?");

// alert(`Nome: ${pessoas.nome}
// Idade: ${pessoas.idade}
// CPF: ${pessoas.cpf}`);

const arrayPessoas = [
    {
        nome: "Juquinha",
        idade: 40,
        cpf: "12345678900"
    },
    {
        nome: "Maria",
        idade: 20,
        cpf: "49845910908"
    },
    {
        nome: "Renatinho",
        idade: 31,
        cpf: "15915915999"
    }
];

let mensagem = "";  

for (let index = 0; index < arrayPessoas.length; index++) {
mensagem += `Nome: ${arrayPessoas[index].nome}
Idade: ${arrayPessoas[index].idade}
CPF: ${arrayPessoas[index].cpf}

`;
}

alert(mensagem);
