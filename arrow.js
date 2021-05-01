//Diferentes usos de Arrow Functions 
var sum  = (a, b) => a + b;
console.log(sum(5, 5));

//Se a função tiver apenas 1 parametro, pode-se omitir os parenteses

var sumOneParam = a => a + 5;
console.log(sumOneParam(7));


//destruction
var obj = {
    a: 6,
}
var Destr = ({ a }) => a;
console.log(Destr(obj));

//
var values = {
    num1:1, 
    num2:3
};
var ArrowValues = (...value) => value;
console.log(ArrowValues(values));

// contexto léxico
var objCl = {
    showContext: function showContext() {
        //this = obj
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

objCl.showContext();