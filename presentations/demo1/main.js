console.log('this is external script file log');


var a; // декларація
a = 100; // ініціалізація

let b = 'hello oktenweb'; // декларація + ініціалізація

console.log(a); // 100
console.log(b); // hello oktenweb

{
    var c = 'this is var';
    let d = 'this is let';
}
console.log(c); // this is var
console.log(d); // error!

