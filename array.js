 const persons = Array.of('Jhon', 'Cris', 'Jenny');
 // [ 'Jhon', 'Cris', 'Jenny' ]
 const numbersAndStrings = Array.of(1, 2, 'Text', 'Strings');
//[ 1, 2, 'Text', 'Strings' ]
const arr = Array(3);
//[ <3 empty items> ] - ou seja, um array com 3 posições
const arr2 = Array(3,2);
//[ 3, 2 ]



// Array.from cria uma nova instancia de um array a partir de um parametro array-like ou iterable object.
const divs = document.querySelector('div'); // cria uma nodelist, ou seja, não é um array
const arrDiv = Array.from(divs); // cria um array com o conteudo de divs




// push, adiciona um ou mais elementos no final de um array e retorna o tamanho do array após essa adição
persons.push('João');
//retorna 4
console.log(persons);
//[ 'Jhon', 'Cris', 'Jenny', 'João' ]



//pop, remove o ultimo elemento de um array e retorna esse elemento que foi removido;
const newPersons = persons.pop();
//['Jenny']



//unshift, adiciona um ou mais elementos no inicio do array e retorna o tamanho do novo array, assim como o push
const un = ['item1', 'item2', 'item3'];
const newUn = un.unshift('newitem');
console.log(newUn);
console.log(un);
//4
//[ 'newitem', 'item1', 'item2', 'item3' ]



//shift, remove o primeiro elemento de um array e retorna esse elemento removido
const shi = ['item1', 'item2', 'item3'];
const removeshi = shi.shift();
console.log(removeshi);
console.log(shi);
// item1
// [ 'item2', 'item3' ]




//concat, concaten um ou mais array retornando um novo array
const fruit = ['banana', 'laranja'];
const food = ['arroz', 'feijão'];
const allFoods = fruit.concat(food);
console.log(allFoods);
//[ 'banana', 'laranja', 'arroz', 'feijão' ]



//slice, retorna um novo array fatiando o array de acordo com o inicio e fim
const num = [1, 2, 3, 4, 5];
console.log(num.slice(0, 2)); // retorna 2 elementas a partir da posição 0
//[ 1, 2 ]

console.log(num.slice(2)); // retorna os elementos a partir da posição 2
//[ 3, 4, 5 ]
console.log(num.slice(-1)); // retorna o ultimo elemento do array
//[ 5 ]
console.log(num.slice(-3)); // retorna os ultimos 3 elementos do array
// [ 3, 4, 5 ]




//splice, altera um array adicionando novos elemetnos enquanto remove elementos antigos
const abc = ['a', 'b', 'c', 'd'];
console.log(abc.splice(2)); //remove todos os elementos a partir da posição 2
// [ 'c', 'd' ]

console.log(abc);
//[ 'a', 'b' ]

abc.splice(0, 0, 'first'); // adiciona um elemento na posição 0, sem excluir nenhum, ou seja, o primeiro 0 representa a posição, o segundo 0 representa quantos itens remover a partir da posição, e o 3 paramentro é o item a ser adicionado
console.log(abc);
//[ 'first', 'a', 'b' ]