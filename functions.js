
this.name = 'arrow function';
const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());

// Principal diferença entre arrow function e functions normais, 
// A arrow function nesse código referencia o this de onde ela foi executada, ou seja, de um escopo global, objeto de onde foi criada,
// A function normal, referencia o this do objeto de execução, escopo de execução, ou seja, o this.name não sera o de valor criado no inicio do código.
