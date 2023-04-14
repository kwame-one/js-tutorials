//for loop
//while loop
//do while loop

// for(initilization; condition; increment/decrement) {
//     // block of code
// }

const end = 10;
let i;

for(i = 1; i<=5; i++) {
    console.log(i);
}
console.log('current value of i is ', i);

let a = 1;

console.log('while loop here');

while(a <= 5) {
    console.log(a);
    a += 2;
}
console.log('==================');

const arr = [1,2,3,4,5,6];
/**
 * index 0 => 1
 * index 1 => 2
 * index 2 => 3
 * index 3 => 4
 * index 4 => 5;
 * index 5 => 6;
 */
let len = arr.length - 1;

arr[5];
arr[0];


while (len >= 0) {
    console.log(arr[len]);
    len = len - 1;
}

let size = arr.length - 1;
let start = 0;
while (start <= size) {
    console.log(arr[start]);
    start += 1;
}

let numberOfStudents = 12;
do {
    console.log('number of students is ', numberOfStudents)
    numberOfStudents--;
} while(numberOfStudents > 10);