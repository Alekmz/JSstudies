//com essa sintaxe, o objeto recebe o nome da variavel como propiedade e o valor da variavel como valor da propiedade
// sendo menos verboso para o código dentro do objeto, caso os valores do objeto venham de contextos externos.

var prop = "Enhanced";

var obj1 = {
    prop
};
console.log(obj1);

// funciona também com metodos
function method() {
    console.log('method called');
};

var obj2 = {
    method
};
obj2.method();

// os metodos podem ser passados em funcões como valores de propiedades
var obj3 = {
     sum: function (a, b) {
         return a + b;
     }
 };
console.log(obj3.sum(2, 5));
//ou
var obj4 = {
    sum(a, b) {
        return a + b;
    }
};
console.log(obj4.sum(4, 6));

// possível também criar uma propiedade com o valor de uma variável, e atribuir algum valor a ela
var propName = 'test';
var obj5 = {};
obj5[propName] = 'prop value';
console.log(obj5);
//ou
var obj6 = {
    [propName]: 'prop value different form',
};
console.log(obj6);



var obj = {
    sleep: function() {
      setTimeout(() => {
        console.log(this);
      }, 1000);
    }
  }
  
  obj.sleep();              

  