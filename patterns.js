//FACTORY
function FakeUser() {
    return {
        name: 'Alex',
        lastName: 'Muniz'
    }
};

const u = FakeUser();
console.log(u);

//SINGLETON
function Pessoa() {
    if(!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
};

const p = Pessoa.call({ name: 'Alex' });
const p2 = Pessoa.call({ name:'João' });

console.log(p);
console.log(p2); // O PATTERN SINGLETON FAZ COM QUE DEPOIS DE INSTANCIAR UM DETERMINADO BLOCO DO CÓDIGO, NÃO SE POSSA INSTANCIAR NOVAMENTE, NESSE CASO FOI INSTANCIADO COM ALEX PELA PRIMEIRA VEZ, DEPOIS DISSO NAO CONSEGUE SE INSTANCIAR NOVAMENTE

//DECORATOR
let loggedIn = false;

function callIfAuthenticated(fn) {
    return !!loggedIn && fn();
};

function sum(a, b) {
    return a + b;
};

console.log(callIfAuthenticated(()=> sum(2, 3)));
loggedIn = true;
console.log(callIfAuthenticated(()=> sum(2, 3)));
loggedIn = false;
console.log(callIfAuthenticated(()=> sum(2, 3)));
