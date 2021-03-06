//자바스크립트는 값의 유형을 명시하지 않아도 런타임시 변수의 값에 의해 동적으로 유형이 결정된다. (동적 바인딩)
hi = "hello" // 암시적 선언
var hi2 = "hello2" // 변수 선언 -> scope 때문에
console.log(hi)
console.log(hi2)



//자바스크립트는 크게 두가지 타입으로 되어 있다. 원시타입 vs 참조타입
//원시타입? (값이 변수에 할당될때 메모리상에 고정된 크기로 저장) -> 해당 변수가 직접 값을 보관 ex)객체를 제외한 자료형! 숫자형
//참조타입? 원시 타입과 달리 변수에 고정된 크기를 저장하지 않고, 값의 메모리 주소를 참조한다. -> 따라서 참조 타입은 값의 메모리 주소를 변수에 할당하여 값을 참조한다.

var num  = 5/2
console.log(num)
console.log(Math.floor(num))


// null & undefined -> undefined은 타입이자 값이다. / null의 타입은 object
var nullVar = null;
console.log(typeof nullVar === null) //false
console.log(nullVar === null) //true
console.log(typeof nullVar) //object

var nullVar2 = undefined;
console.log(typeof nullVar2 === undefined) //false
console.log(nullVar2 === undefined) //true
console.log(typeof nullVar2) //undefined



