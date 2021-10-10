// generators
// need to use * at the end of the word function

function* hello() {
    console.log('Hello');
    yield

    console.log('From');
    yield

    console.log('Function');

}

const it = hello();

console.log(it.next());
//Hello
console.log(it.next());
//From
console.log(it.next());
// Function