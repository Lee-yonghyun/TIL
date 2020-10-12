
// 기존의 객체의 속성(키:값)을 변수로 작성할 수 있다.
// 각 속성의 '키 이름'을 '변수명'으로 정의함 const address = 'Seoul'
const address = 'Seoul'
const members = {}
const addFamily = function (age,name,role) {
    this.members[role] = {age,name}
}

const getHeadcount = function () {
    return Object.keys(this.members).length;
}

// 변수들로 할당한다.
const family = {address, members, addFamily, getHeadcount}
console.log(family.address)
family.addFamily(30,'chole', 'aunt')
family.addFamily(3,'lyn','niece')
console.log(family["members"])
console.log(family.getHeadcount())
