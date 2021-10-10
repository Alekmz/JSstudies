// The symbol is used to generate private properties
// they are not inaccessible
//  it's a way of talking to the developer trying to avoid being accessed if it's not intentional


const uniqueID = Symbol();

console.log(uniqueID);

// iterator native
const arr = [1, 2, 3, 4];

for (let value of arr ) {
    console.log(value);
}