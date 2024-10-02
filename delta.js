const documentoIdentidade = {
    nome: "Guilherme",
    sobrenome: "Lopes",
    cpf: "519.362.458-84",
    empresa: "SENAI103",
    idade: 17,
};

console.log(documentoIdentidade.nome);
console.log(documentoIdentidade['cpf']);
console.log(documentoIdentidade.idade);

const investimentoMensal = [1000, 2000, 3000, 2000, 1500, 1200, 1300];

console.log(`O valor investido no mês de janeiro é: ${investimentoMensal[0]}`);
console.log(`O valor investido no mês de fevereiro é: ${investimentoMensal[1]}`);
console.log(`O valor investido no mês de fevereiro é: ${investimentoMensal[2]}`);
console.log(`O valor investido no mês de fevereiro é: ${investimentoMensal[3]}`);
console.log(`O valor investido no mês de fevereiro é: ${investimentoMensal[4]}`);
console.log(`O valor investido no mês de fevereiro é: ${investimentoMensal[5]}`);
