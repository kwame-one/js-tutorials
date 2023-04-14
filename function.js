let globalNumber = 10;
const sample = 'nothing';
function println(message) {
    globalNumber++;
    console.log(message);
}
console.log(sample);
println('My name is kwame');
println(1);
println(true)

function isPrime(number) {
    globalNumber++;
    let count = 0;
    for(let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    return count === 2;
}

const isThreePrime = isPrime(3);
console.log('is 3 a prime number? ', isThreePrime);
console.log('is 10 prime? ', isPrime(10))

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Enter a number: `, number => {
    console.log(`is ${number} prime? `, isPrime(number))
    readline.close();
  });

  console.log('current value of global number is ', globalNumber)

const isEven = (number) => {
    return number % 2 === 0;
}

const isEven2 = function(number) {
    return number % 2 === 0;
}

const isOdd = (number) => {
    return number % 2 === 1;
}

const items = [1, 2, 3, 4, 5];
function getOdd(number) {
    return number % 2 === 1;
}

function getEven(number) {
    return number % 2 === 0;
}
const even = items.filter(getEven);
items.filter(item => item % 2 === 0);
items.filter(function(item){
    return item % 2 === 0; 
});
const odd = items.filter(getOdd);
console.log('even', even)
console.log('odd', odd)