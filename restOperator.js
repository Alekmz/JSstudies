// rest operator é amplamente usado para obter todos os parametros passados para uma função de uma vez só
//ou seja
function log(...params){
    console.log(params);
};
log(6, 7, 2, 2, 3);

// usando o rest, a função criou um array com todos os parametros
//podendo ser usado o .reduce para se utilizar os parametros de variadas formas
//sendo assim
function sum(...args){
    return args.reduce((counter, value)=> counter + value, 0);
};
console.log(sum(5, 5, 7, 7));


//pode-se usar o rest operator em arrow functions também
//mostrando essa possibilidade e uma forma de pegar valores especificos e o resto ir para o rest

const possibility = (a, b, ...values) => {
    // os 2 primeiros parametros passados na chamada da função, serão armazenados nas variaves a e b e o resto de parametros irao para o ...values
    //caso sejam passados apenas 2 parametros, a variavel values sera declarada como undefined
    console.log(a, b, values);
};
possibility(2, 3, 4, 5, 6);