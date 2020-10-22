let a = {};
//객체에 키와 값을 추가하기
a.name = "용현"
a["age"]= "27"
console.log(a)

// 프로토 타입 사용. 키값 뽑아내기
console.log(Object.keys(a))



//1)~3) dot notation vs bracket notation
const food = "carrot"

//1)
a.food1 = "delicious"
//2) 변수의 값을 키로 넣고 싶을 때 (bracket notation만 가능!)
a[food] = "delicious"
//3)
a["food"] = "delicious"

console.log(a)


//자바스크립트에서는 클래스라는 개념이 없고, 객체 리터럴이나 생성자 함수 등 별도의 생성 방식이 존재한다.
//객체 생성하는 방법 3가지
//      1) Object() 생성자 함수 이용
var foo = new Object()
foo.name = "foo"
foo.age = 30
foo.gender = 'male'
console.log(foo)

//      2) 객체 리터럴 방식 이용(표기법 사용)
var foo = {
    name:'foo',
    age:30,
    gender:'male'
}
console.log(foo)

//      3) 생성자 함수 이용


//객체의 프로퍼티에 접근하기
var foo = {
    name:'foo',
    major:'computer science'
}

// 객체 프로퍼티 읽기
console.log(foo.name)
console.log(foo['name'])
console.log(foo.nickname)

// 객체 프로퍼티 갱신
foo.major = 'electronics engineering'
console.log(foo.major)
console.log(foo['major'])

// 객체 프로퍼티 동적 생성
foo.age = 30
console.log(foo.age)

// 대괄호 표기법만을 사용해야 할 경우 (프로퍼티가 표현식(-)이거나 예약어 일경우)
console.log(`--------`)
foo['full-name'] = 'foo bar'
console.log(foo['full-name'])
// console.log(foo.full-name) -> 연산오류가 일어날 수 있음. foo.full - name으로 이해할 수있음!
// console.log(name) //undefined


// for in문 과 객체 프로퍼티 출력
var foo = {
    name:'foo',
    age:30,
    major:'computer science'
}

for (var prop in foo) {
    console.log(prop, foo[prop])
}

//객체 프로퍼티 삭제 -> delete 이용. 객체의 프로퍼티를 삭제한다.객체 자체를 삭제하지는 못한다.
var foo ={
    name:'foo',
    nickname:'babo'
}
console.log(`--------`)
console.log(foo.nickname)
delete foo.nickname
console.log(foo.nickname,",", foo)

delete foo
console.log(foo) //객체 삭제는 실패!


//동일한 객체를 참조하는 두 변수
var objA = {
    val:40
}
var objB = objA //둘다 동일한 값의 주소를 참조하고 있음.
console.log(objA.val)
console.log(objB.val)

objB.val = 50 //참조 값을 갱신하였음. -> 동일한 객체를 참조하고 있으므로 둘다 값이 바뀜
console.log(objA.val)
console.log(objB.val)



