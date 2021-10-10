// it's possible thing using arrow function
const someThing = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const otherThing = new Promise((resolve, reject)=> {
    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

someThing.then(data => console.log(data));
otherThing.then(data => console.log(data));

// second form
someThing
    .then(data => {
        console.log(data);
        return otherThing;
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log(error));

// parallel processing, execution of promises together at the same time
Promise.all([someThing, otherThing]).then(data => {
    console.log(data[0]);
    console.log(data[1]);
}).catch(error => console.log(error));

// using Promise.race will return the promise that resolves first