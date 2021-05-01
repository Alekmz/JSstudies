//utilizado para deixar o código menos verboso
// economizando linhas e obtendo a mesma sintaxe

var [avocado, banana, orange] = ['avocado', 'banana', 'orange'];

console.log(avocado, banana, orange);

//é possível também utilizar o destructuring em criação de array dentro de array
//porém a sintaxe tem que ser essa:

var [value1, value2, [value3]] = ['value1', 'value2', ['value3']];//considerando o par de chaves antes do = e depois também
console.log(value3);


//É possível usar destructuring em objetos também
//sendo assim:

var obj = {
    name: "Alex",
};

var { name } = obj;
console.log(name);

//destructuring em objetos dentro de objetos

var obj2 = {
    args: {
        name: "Joana",
    }
};

var { args: { name } } = obj2;
console.log(name);