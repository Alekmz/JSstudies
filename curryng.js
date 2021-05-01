function soma(a) {
    return function(b) {
        return a+b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

//curryng é uma tecnica para transformar uma função com muitos parametros em apenas uma função que recebe 1 parametro, e para cada parametro retorna-se uma nova função
// uma forma funcional de se programar em js, 
// esse código otimiza o processo onde o parametro "a" sempre será 2, somente o parametro b tem os valores mudados durante a execução
// com isso armazena-se a o parametro a na const soma2, onde ela é chamada passando o valor do parametro "b"