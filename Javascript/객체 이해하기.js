// 기본 개념 정리
//# 객체를 쓰는 이유

//객체의 기본
//객체를 만드는 방법: 중괄호를 사용, 키,값을 넣는데 이 한쌍을 속성(property)라고 한다.


//객체의 특징
//하나의 키에는 하나의 값이 매핑된다. 객체 안에 중복된 키값은 허용하지 않는다.

const family = {

    "address" : "Seoul",
    members : {},
    addFamily : function (age, name, role) {
        this.members[role] = {
            age : age,
            name : name
        }
    },
    getHeadcount : function() {
        return Object.keys(this.members).length;
    }
};

console.log(family.addFamily(27,"이용현","student")) //.키값을 쓰면 속성을 반환한다. 호출까지 하려면 ()까지!
console.log(family.addFamily(29,"김대훈","CEO"))
console.log(family.addFamily(25,"박채은","student")) //중복된 키값이면 키는 중복되고 값만 수정된다.
console.log("------")
console.log(family.getHeadcount)
console.log(family.getHeadcount())
console.log(Object.keys(family.members)) //프로토 타입
console.log(family.members)