//심볼은 객체 속성(object property)을 만들 수 있는 원시 데이터 형식(primitive data type) 이다.
// 정의하면 독립적인 값이 되기때문에, 같은 string 으로 정의해도 같은 값이 아니다.
var symbolProperty1  = Symbol('key'); // Symbol(key)
var symbolProperty2  = Symbol('key'); // Symbol(key)
var ob = {};

ob[symbolProperty1] = 'value1'
ob[symbolProperty2] = 'value2'

console.log(ob[symbolProperty1] === 'value1');
console.log(ob[symbolProperty2] === 'value2');
console.log(symbolProperty1 !== symbolProperty2);

console.log(ob); // {Symbol(key): "value1", Symbol(key): "value2"}

console.log(`------`)

// symbol은 독립적인 값으로 정의되어 진다.
// const symbol = Symbol()
// const hello = Symbol('hello')

// console.log(symbol)
// console.log(hello)
console.log(Number(3)===Number(3));
console.log(Symbol('symbol') === Symbol('symbol'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

const nationility = Symbol('nationility');
const user = {
    name:'jay'
};
user[nationility] ='korean';
console.log(user[nationility]);
console.log(user)

for (let key in user) {
    console.log(key); // 심볼이 객체의 키로 사용되면 for in 루프를 통해 키를 가져올 수 없음.
}

console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user)); //
//JSON 과 객체의 차이는? 키:값으로 이루어져 있는 것은 같지만,
// JSON의 키는 항상""로 표시된 문자열 이여야 한다.
// 값은 오직 문자열, 숫자, 배열, true,false,null 또는 다른 JSON 객체만 가능합니다. (ex) "key" : value)
console.log(`----`)

const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(symbolProperties[0])
console.log(user[symbolProperties[0]])




