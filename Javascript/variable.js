// 1. use strict
"use strict";

// 2. variable / rw(read,wirte)
// let (added in ES6)
// block scope, global scope
let global = "hi";
{
  let name = "yong";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(global);
}
console.log(name);
console.log(global);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// (어디에 선언했는지 상관없이 맨 위로 올려줌.(block 안에서))
// (선언하기도 전에 사용할 수 있음. ㄷㄷ..)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant / r(read only)
// (웬만하면 바뀌지 않는 데이터 타입을 사용해라.)
// favor immutable data type always for a few reasons:
// - security (해커방지)
// - thread safety 
// - reduce human mistakes

// Note!
// Immutable data types : primitive types, frozen objects(i.e. object.freeze())
// Mutable data types : all objects by default are mutable in Js

// 4. variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
const count = 7;
console.log(`type:${typeof count}`);

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) (새롭게 추가된 데이터 타입)
const bigInt = 12345678901234567890123456789012345678901234567890n;
console.log(`value:${bigInt}, type: ${typeof bigInt}`);

// string
const char = "hello";
const hello = `hi ${char}!`; //template literals(string)
console.log(hello);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

// null (명확하게 빈값)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined (선언은 되었지만 값 할당 x)
let x;
// let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol(`id`);
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for(`id`);
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const yong = { name: "yong", age: 20 };
yong.age = 28;
console.log(yong);

// 5. Dynamic typing: dynamically typed language --> TS의 등장 배경
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value:${text},type:${typeof text}`);
text = 1;
console.log(`value:${text},type:${typeof text}`);
text = "7" + 5;
console.log(`value:${text},type:${typeof text}`);
text = "8" / 5;
console.log(`value:${text},type:${typeof text}`);
console.log(text.charAt(0)); // error
