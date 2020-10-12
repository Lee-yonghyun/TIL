//@      function is object in JS -> 함수를 매개변수로 받을 수 있다..

//@      Default parameters (added in ES6)
function showMessage(message, from='you'){
    console.log(`${message} by ${from}`)
}
showMessage('hi!')


//@     function expression -> 변수에 할당된 다음부터 호출이 가능하다.
const print = function() {
    console.log('print')
}
print();
const printAgain = print;
printAgain();


//@     function declaration
// 함수가 정의되기 이전에 함수를 호출할 수 있다. 왜냐하면, 자바스크립트 엔진이 선언된 것을 가장 위로 올려주기 때문에)
// hosting이란?

// console.log(sum(1,3))
function sum(a,b){
    return a+b
}

const sumAgain = sum;
console.log(sumAgain(1,2))




//@     Call back function using function expression
//callback 함수란? 매개변수로 함수를 받아 함수를 실행시키는 함수.

function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes!');
};

const printNo = function print(){
    console.log('no!');
};

randomQuiz('wrong',printYes,printNo)
randomQuiz('love you',printYes,printNo)


//@     Arrow function (<- 항상 이름이 없는 always anonymous))
const simplePrint = () => console.log('simplePrint')
const add = (a,b) => a+b; //const add = function (a,b) {return a+b};
const simpleMultiply = (a,b) => {
    return a+b;
}
simplePrint();

//@     IIFE: Immediately Invoked Function Expression
// 함수선언과 동시에 호출하는 방법!
(function hello() {
    console.log('IIFE');
})();