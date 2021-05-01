//Serve para garantir a execução de uma função, quando não passado todos os parametros esperdos
// estabelece um valor padrão para um parametro, caso ele nao seja passado pelo usuario ou contexto

//nesse caso, se a função ser chamada sem o parametro "b", o valor de b será 2
function multiply(a, b = 2) {
    return a * b;
};

console.log(multiply(5));


