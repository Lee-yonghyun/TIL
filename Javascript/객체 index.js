let a = {};

//객체에 키와 값을 추가하기
a.name = "용현"
console.log(a)

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