let nome = "Lima";

console.log(nome == "Lima");
console.log(nome == "Bernardo");

//⇜-----------------------------------------------⇝//

let n = 49

console.log(n >= 10);

//⇜-----------------------------------------------⇝//

let idade = 18

if (idade >= 18) {
    console.log("Parabéns")
} else {
    console.log("Você ainda não tem 18 anos, não é digno de um parabéns")
}

//⇜-----------------------------------------------⇝//

if (idade >= 16) {
    console.log("Você ja pode votar")
} else {
    console.log("Você não provê de tamanha dignidade para realizar demasiada façanha eleitoral")
}

//⇜-----------------------------------------------⇝//

if (n < 50 || n > 100) {
    console.log("este número não está entre 50 e 100")
} else {
    console.log("este número está entre 50 e 100")
}

//⇜-----------------------------------------------⇝//

if (idade >= 18) {
    console.log(nome + " ,você é maior de idade")
} else {
    console.log(nome + " ,você não é maior de idade")
}

//⇜-----------------------------------------------⇝//

let num1 = 1;
let num2 = 4;

if (num1 > num2) {
    console.log(num1 + " (num1) é maior que o num2")
} else {
    console.log(num2 + " (num2) é maior que o num1")
}

//⇜-----------------------------------------------⇝//

let algum = "abcdef";

if (algum.length >= 5) {
    console.log(true)
} else {
    console.log(false)
}

//⇜-----------------------------------------------⇝//

if (num1 % 2 === 0 & num2 % 2 === 0) {
    console.log("Os números são pares")
} else {
    console.log("Um ou mais números não são pares")
}

//⇜-----------------------------------------------⇝//

let frase = "Estou aprendendo JavaScript!";

if (frase.includes("JavaScript")) {
  console.log("A frase contém a palavra 'JavaScript'.");
} else {
  console.log("A frase não contém a palavra 'JavaScript'.");
}

//⇜-----------------------------------------------⇝//

let salario = 2100;

if (salario >= 2000) {
    console.log("O salario é maior que 2000")
} else { 
    console.log("O salario é menor que 2000")
}

//⇜-----------------------------------------------⇝//

let senhadosafadao = "rogeriodo69"

if (senhadosafadao.length >= 8 && /\d/.test(senhadosafadao)) {
    console.log("Sua senha é de safadão")
} else {
    console.log("sua senha precisa de um número pra ser de safadão")
}

//⇜-----------------------------------------------⇝//

let nota1 = 10
let nota2 = 7
let nota3 = 8

if (((nota1 + nota2 + nota3) / 3) > 7) {
    console.log(`aprovado`)
} else {
    console.log(`Reprovado`)
}

//⇜-----------------------------------------------⇝//

let usuario = "Ribamar"
let senha = "Senha4469"

if (senha === "Senha4469" && usuario === "Ribamar") {
    console.log("aprovado")
} else if (senha !== "Senha4469" && usuario === "Ribamar") {
    console.log("senha incorreta")
} else if (senha == "Senha4469" && usuario !== "Ribamar") {
    console.log("Usuario incorreto")
} else if (senha !== "Senha4469" && usuario !== "Ribamar") {
    console.log("Usuario e senha incorretos")
}

//⇜-----------------------------------------------⇝//

