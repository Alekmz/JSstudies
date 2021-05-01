const persons = [
    {
        name: 'alex',
        age: 18,
        gender: 'M'
    },
    {
        name: 'Luiza',
        age: 15,
        gender: 'W'
    },
    {
        name: 'joao',
        age: 28,
        gender: 'M'
    }
];

const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);

console.log(totalEvenAges);


// Construção do reduce
// .reduce((nomedanovavariavel, variavel que tem os parametros) => {
//     o que vai ser feito com as propiedades recebidas
//     return nomedanovavariavel;   
// }, aqui é passado o valor inicial da variavel, antes de entrar no bloco, ou seja 0 é number, {} Object, '' String, e etc)