const number = 10;
const isEven = checkEven(number);

const otherNumber = 51;
const isOtherEven = checkEven(otherNumber)

/*
 * 
 * signature of a fucntion
 * function keyword
 * name of function
 * parameters (optional)
 */

function checkEven(x)  {
    const even = x % 2 === 0;
    return even;
}

function test(param = 'default') {
    console.log(param)
}

// test('alex')
// test()

function test1(param = 'default', param2) {
   console.log('parameter one', param)
   console.log('parmater two',param2)
}

test1('first', 'second')
test1('third')

function test1Fix(param, param2 = 'default') {
    console.log('parameter one', param)
    console.log('parmater two',param2)
 }

 function another(p1, p2, p3, p4=3, p5 = 10, p6=11) {
    console.log('p1', p1)
    console.log('p2', p2)
    console.log('p3', p3)
    console.log('p4', p4)
    console.log('p5', p5)
    console.log('p6', p6)
 }

 another(2,1,3, 1)
//  another(1,2,3, 4, 20)
//  another(1,2,3, 4)

function user(firstname, lastname, middlename = '') {}
// function user(firstname, middlename = '', lastname) {}

user('john', 'doe')
user('alex', 'doe', 'kwame')

function calculate(length, width=1) {}