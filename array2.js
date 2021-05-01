const arr = [1, 2, 3, 4, 5];

//forEach faz uma iteração de cada item que tem dentro de um array
arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
})

//map, retorna um novo array, de mesmo tamanho, iterando cada item de um array
console.log(arr.map(value => value * 2));
//[ 2, 4, 6, 8, 10 ]


//flat, retorna um novo array com todos os elemtnos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada
const flt = [1, 2, 3, [4, 5]];
console.log(flt.flat());
//[ 1, 2, 3, 4, 5 ]
const flt2 = [1, [2, [3, 4]]];
console.log(flt2.flat(2));
//[ 1, 2, 3, 4 ]  


//flatMap, retorna um novo array assim como a função map e executa um flat de profundidade 1
const arrmp = [1, 2, 3, 4];
arrmp.flatMap(value => [value*2]);
// [2, 4, 6, 8]

arrmp.flatMap(value => [[value*2]]);
// [[2], [4], [6], [8]]


// keys, retorna um array iterator que contém as chaves para cada elemento do array
const ar = [1, 2, 3];
const arIterator = ar.keys();
arIterator.next();
//{ value: 0, done: false }
arIterator.next();
//{ value: 1, done: false }
arIterator.next();
//{ value: 2, done: true } // quando chega na utima posição, o valor booleano é true, como nesse caso

//values, retorna um array iterator que contém os valores para cada elemento do array
const arValues = ar.values();
arValues.next();
//{ value: 1, done: false }
arValues.next();
//{ value: 2, done: false }
arValues.next();
//{ value: 3, done: true }

//entries, retorna um array iterator que contém os pares chave-valor para cada elemento do array
const arEntrie = arr.entries();
arEntrie.next();
//{ value: [0, 1], done: false }
arEntrie.next();
//{ value: [1, 2], done: false }
arEntrie.next();
//{ value: [2, 3], done: true }



// find, retorna o primeiro item de um array que satisfaz alguma condição
const ar = [1, 2, 3];
const firstGreaterThanTwo = ar.find(value => value > 2);
// 3

//findIndex, retorna o índice do primeiro item de um array que satisfaz alguma condição
const ar = [1, 2, 3]; 
firstGreaterThanTwo = arr.findIndex(value => value > 2);
// 2



// filter, retorn um novo array co todos os elemtnos que satisfazem a condição
const ar = [1, 2, 3, 4];
const allValuesGreaterThanTwo = ar.filter(value => value > 2);
// [3, 4]



//indexOf, retorna o primeiro índice em que um elemento pode ser encontrado no array
const ar = [3, 2, 3, 4];
const firstIndexOfItem = arr.indexOf(3);
// 0 


//lastIndexOf, retorna o ultimo índice em que um elemento pode ser encontrado no array
const ar = [3, 2, 3, 3];
const lastIndexOfItem = arr.indexOf(3);
// 3


//includes, retorna um booleano verificando se determinado elemento existe no array
const ar = [1, 2, 3, 4];
const hasItemOne = ar.includes(1);
//true
const hasItemFive = ar.includes(5);
//false



//some, retorna um booleando verificando se pelo menos um item de um array satisfaz alguma condição
const ar = [1, 2, 3, 4];
const hasSomeEvenNumber = ar.some(value => value % 2 === 0 );
//true


//every, retorna um booleano verificando se todos os itens de um array satisfazem a condiçao
const ar = [1, 2, 3, 4];
const allEvenNumbers = arr.every(value => value % 2 === 0 );
//false


//sort, ordena os elementos de um array de acordo com a condição
//reverse, inverte os elemtnos de um array



//join, junta todos os elementos de um array, separados por um delimitador e retorna uma string
const ar = [1, 2, 3, 4];
ar.join('-');
// "1-2-3-4"

const colaboradores = [
    { nome: "Cris", horasTrabalhadas: 220 },
    { nome: "Rebeca", horasTrabalhadas: 210 }
  ];
  
  function adicionaSalario(colaborador) {
    const salario = colaborador.horasTrabalhadas * 50;
    colaborador.salario = salario;
  
    return {
      salario: salario
    };
  }
  
  const colaboradoresComSalario = colaboradores.map(adicionaSalario);
  
  console.log(colaboradoresComSalario);


  const familiaPai = ["Avó Zeca", "Avô Aroldo"];
  const familiaMae = ["Avô Carlos", "Primo João Paulo"];
  
  const familiaFilho = familiaPai.concat(familiaMae);
  
  console.log(familiaPai);
  console.log(familiaMae);
  console.log(familiaFilho);


  const alunos = [
    { nome: "Cris", nota: 10 },
    { nome: "Alexandre", nota: 7 },
    { nome: "Pablo", nota: 4 }
  ];
  
  function alunoAprovado(aluno) {
    return aluno.nota >= 7;
  }
  
  console.log(alunos.filter(alunoAprovado));
  console.log(alunos.some(alunoAprovado));
  console.log(alunos.every(alunoAprovado));


  const pessoas = ["Cris", "Alexandre", "Pablo", "Cris"];

console.log(pessoas.indexOf("Cris"));
console.log(pessoas.findIndex(nome => nome === "Cris"));
console.log(pessoas.lastIndexOf("Cris"));
console.log(pessoas.find(nome => nome === "Cris"));