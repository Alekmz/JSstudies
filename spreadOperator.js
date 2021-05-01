const sum = (...rest) => rest.reduce((counter, value)=> counter + value, 0);

//o uso do spread se dá geralmente em chamada de métodos
const sum2 = (...spread) => {
    return sum(...spread);
}

console.log(sum2(2, 3, 5));


//outra possibilidade é usar spread em strings, arrays, literal objects 
//exemplo, fazer spread em uma variavel com uma string, fazendo assim, uma separação por letras da string 
const string = "Estudando JS";

function logArguments(...rest) {
    console.log(rest);
};

logArguments(...string);

// outra forma de usar o spread operator, é pra passar arrays como parametros de funções
//ou seja
const arr = [1, 2, 3, 4, 5];
//tendo a possibilidade de selecionar os parametros que quiser
function logArr(a, b, c) {
    console.log(a, b, c);
};
//spread
logArr(...arr);

//mais uma possibilidade - concatenar arrays
//sendo assim

const arrValues = [1, 2, 3, 4, 5];
const newArr = [...arrValues, 6, 7, 8];

// possivel também usar em objetos

const obj = {
    value: 123,
};

const obj2 = {
    ...obj,
    value2: 456,
}
console.log(obj2);
