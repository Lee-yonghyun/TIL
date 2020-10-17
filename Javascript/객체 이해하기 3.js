let obj = {}
for(let i=0; i<4; i++){
    obj['key'+ i] = i; // [ ]안에 식을 넣거나 변수를 대입하여 동적으로 객체 속성들을 생성할 수 있습니다.
}
console.log(obj);


let profile = 'chole:30';
let person = {
    profile : true,
    [profile] : true, //[ ]를 쓰면 해당 변수의 값이 속성명으로 들어간다.
    [profile.split(':')[0]] : profile.split(':')[1] // []를 안해주면-> 변수설정을 못하니까 무조건 써줘야함.
}
console.log(person);


//ex) 다른예시.
const profile2 = 'hi'

person.profile1 = 1
person[profile2] = 20

console.log(person)