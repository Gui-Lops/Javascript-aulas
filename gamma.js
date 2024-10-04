//⇜---------------------------[Crie um array vazio e adicione três números a ele.]---------------------------⇝//

let numeros = [300, 200, 400];

//⇜----------------------[Acesse o primeiro elemento de um array e exiba-o no console.]----------------------⇝//

console.log(numeros[0]);

//⇜-------------------[Altere o valor do segundo elemento de um array para o número 100.]------------------⇝//

numeros[1] = 100;

console.log(`O segundo valor da array numeros foi alterado para ${numeros[1]}`);

//⇜[Crie um array que contenha cinco strings e mostre no console a quantidade de elementos que ele possui.]⇝//

let strings = ["bmw", " mercedes", " jaguar", " mclaren", " alfa romeo"];

console.log(`A array strings contém ${strings.length} palavras que são: ${strings}`);

//⇜---------------------[Crie um array com cinco números e some todos eles.]---------------------⇝//

let ex5 = [1, 2, 3, 4, 5];

console.log(ex5[0] + ex5[1] + ex5[2] + ex5[3] + ex5[4]);

//⇜---------------[Remova o último elemento de um array e exiba o novo array no console.]---------------⇝//

let ex6 = [6, 7, 8, 9, 10];

ex6.pop();

console.log(ex6);

//⇜---------------------[Adicione um elemento ao início de um array.]--------------------------⇝//

let ex7 = [1, 2, 3, 4, 5];

ex7.unshift(0)

console.log(ex7);

//⇜---------------------[Combine dois arrays diferentes em um único array.]---------------------⇝//

const ray1 = [[1, 2, 3, 4, 5,]];

const ray2 = [[6, 7, 8, 9, 10]];

const gamma = ray1.concat(ray2);

console.log(gamma);

//⇜---------------------[Percorra um array com um for e exiba todos os elementos.]---------------------⇝//

let array = [10, 20, 30, 40, 50];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//⇜[Crie um array de objetos que representem livros (com nome e autor) e percorra-o exibindo o nome de cada livro.]⇝//

let escrituras = [{nome: 'Harry Potter', autor: 'J. K. Rowling'}, {nome: 'Lord of the rings', autor: 'J. R. R. Tolkien'}]

for (let i = 0; i < escrituras.length; i++) {
    console.log(escrituras[i])
}

//⇜---------------------[Utilize o método map() para dobrar os valores de um array de números.]---------------------⇝//

let alpha = [2, 4, 6, 8, 10];

let resultado = alpha.map(x => x * 2);

console.log(resultado);

//⇜---------------------[Filtre um array para conter apenas números maiores que 10.]--------------------------⇝//

let zimbabue = [1, 3, 5, 11, 13, 15]

let zimbabueR = zimbabue.filter(zimbabue => zimbabue >= 10);

console.log(zimbabueR);

//⇜-----[Crie um array de números e verifique se todos os elementos são pares usando o método every().]-----⇝//

let barramas = [5, 12, 8, 21, 7, 18];

let barramasR = barramas.every(x => x % 2 === 0);

console.log(barramasR);

//⇜----------------[Encontre o primeiro número negativo em um array utilizando o método find().]---------------------⇝//

let findImpar = barramas.find(x => x % 1 === 0);

console.log(findImpar);

//⇜---------------------[Ordene um array de números em ordem crescente.]--------------------------⇝//

let organizar = barramas.sort((a,b) => a - b);

console.log(organizar);

//⇜-----[Adicione um novo elemento a um array em uma posição específica, sem substituir nenhum outro elemento.]-----⇝//

barramas.splice(2, 0, 24);

console.log(barramas);

//⇜[Crie uma função que recebe dois arrays e retorna um array com os elementos que estão presentes em ambos (interseção).]⇝//

let array1 = [1, 2, 5, 7, 9]
let array2 = [2, 4, 7, 10]
let array3 = array1.filter(elemento => array2.includes(elemento));

console.log(array3)