const family = {   //family.addFamily = function(age, name, role) { ~~~}

    "address" : "Seoul",
    members : {},
    addFamily : function(age, name, role){
        this.members[role] = {   // this.members = {} family.members기 때문에. this.members[role] = { role : {age : age, name : name} }
            age : age,
            name : name
        };
    },
    getHeadcount : function() {
        return Object.keys(this.members).length; //Object.keys => 객체안에 있는 keys를 반환하는것.
    }
};

console.log(family.addFamily(27,"용현","남동생"));
console.log(family.addFamily(25,"채은","여동생"));
console.log(family.addFamily(29,"대훈","형오"));//추가
console.log(family.getHeadcount())
console.log(family.members)
console.log(Object.keys(family.members))


const printMembers = function () {
    const members = family.members;
    // 객체에 대해 for in을 하면은 키값을 뽑아내는것. 배열에 대해 for in을 하면 index를 뽑아낸다.
    // 배열에 대해 for of을 하면 요소를 뽑아낸다.
    for (role in members){
        console.log("role => " + role + ", name => " + members[role].name + ", age => "+ members[role].age)
        // console.log(members[role])
    }
}

var members = family.members
members["nephew"]={age:3 , name: "hyun"}
members.niece = {age:5, name:'lyn'}

delete members.nephew; // 키와 값을 모두 없애는 방법
delete  members['niece']
members["이모"] = {age:20, name: "lee"}

printMembers()