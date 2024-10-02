// ex1

var nome = "Guilherme";

console.log (nome);

//ex2

var x = 10;
var y = 20;

console.log(x + y)

//ex3

var idade = 16;

if (idade <= 18) {
    console.log(idade)
} else {
    console.log("Você é maior de idade")
}

//ex4

var a = 10;
var b = 15;
var c = 20;

console.log((a + b + c) / 3)

//ex5

var preco = 100;

console.log(preco * 0.1 + preco);

//ex6

var anoNascimento = 2007;
var anoAtual = 2024;
var mesNascimento = 10
var mesAtual = 9

if (mesNascimento > mesAtual) {
    console.log(anoAtual - anoNascimento - 1)
} else if (mesNascimento < mesAtual) {
    console.log(anoAtual - anoNascimento)
}

//ex7

var n = 2

if (n % 2 === 0) {
    console.log("true");  // O número é par
} else {
    console.log("false");  // O número é ímpar
}

//ex8

var salario = 5000

if (salario >= 2000) {
    console.log(salario - (salario * 0.10));
} else {
    console.log(salario + (salario * 0.05));
}