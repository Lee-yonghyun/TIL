// 비구조할당? 객체, 배열의 값을 새로운 개별 변수에 쉽게 할당.

// - 객체의 비구조 할당 -
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

let {a,c} = obj; //비구조 할당을 하기 위해선! 객체가 이미 가지고 있는 속성명을 변수로 선정해야 한다!!!
console.log(`a >>> ${a}`)
console.log(`c >>> ${c}`)

let {a:newA=10 , f:newF , g:newG=20} = obj; //기존의 속성명을 새로운 변수명으로 할당하기, 값이 없는 경우 기본값할당
//name:req.body.name -> name:name -> {name}
//const {name} = req.body
console.log(`newA >>> ${newA}`);
console.log(`newF >>> ${newF}`);
console.log(`newF >>> ${newG}`);
console.log(obj) // 객체가 바뀌는 것은 아님!


// - 배열의 비구조 할당 => 속성명이 없어도 됨! 위치만 맞으면 된다. 
let arr = [1,2,3,4,5];

[b,h,...rest] = arr;
console.log(`0) b >>> ${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`)

var [i=10, f=9] = [1];
console.log(`1) i >>> ${i}`)
console.log(`1) f >>> ${f}`)

// [i,f] = [f,i]; //???
// console.log(i)
// console.log(f)


function getArr(){
    return [1,2,3,4,5,6]
}


[a,,,e,,f] = getArr(); //-> 배열의 비구조할당은 객체의 비구조할당보다 더 단순. 타입을 지정해주지 않아도댐. / 대신 값을 지정해줄때는 타입 지정 해줘야함.
console.log(`3) a >>> ${a}`)
console.log(`3) f >>> ${f}`)
console.log(`3) f >>> ${e}`)