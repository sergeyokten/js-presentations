for (let i = 0; i < 100; i++) {
}
console.log(i); // error

for (var i = 0; i < 200; i++) {
}
console.log(i); // 200


function foo() {
    console.log('foo function');
}

foo(); // foo function


function calculatorWithReturn(a, b) {
    let result = a + b;
    return result;
}


let x = calculator(10, 20);
console.log(x); // 30


function calculatorWithoutReturn(a, b) {
    let result = a + b;
}

let y = calculatorWithoutReturn(100, 200);
console.log(y); // undefined


function two() {
    function one() {
        return 100;
    }

    let result = one() + 200; // 300
    return result;
}


function bar() {
    let x = 100;
    var y = 200;
    let greeting = 'hello';
}

console.log(x, y, greeting); // errors!

function test() {
    console.log('test this function');
}

console.log(test);







let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


let numbers = [
    12, 24, 33, 1, -100, 21
];


let newLength = numbers.push(100500);
// 12, 24, 33, 1, -100, 21, 100500
console.log(newLength);// 7
//
// numbers.pop();
//
//
// let popedNumber = numbers.pop();
// // 12, 24, 33, 1, -100, 21
// console.log(popedNumber); // 100500
//


numbers.unshift(100500);
// 100500, 12, 24, 33, 1, -100, 21


let newSize = numbers.shift();
//  12, 24, 33, 1, -100, 21
console.log(newSize); // 6


