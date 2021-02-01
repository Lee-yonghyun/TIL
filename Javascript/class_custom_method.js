// 문제: class를 활용하여 제니퍼의 fullname을 구하시오. 그리고 제니퍼가 투표할 수 있는지 여부를 ture나 false로 반환하시오 (투표는 18살 이상부터 가능.)

class User {
  constructor(name1, name2, age) {
    (this.family = name1), (this.last = name2), (this.age = age);
    //   this.family = name1;
    //   this.last = name2;
    //   this.age = age;
  }

  getFullName() {
    return this.last + " " + this.family;
  }

  canVote() {
    if (this.age > 18) {
      return true;
    }
  }
}

const jennifer = new User("Jennifer", "Doe", 28); //이름, 성, 나이
console.log(jennifer.getFullName());
console.log(jennifer.canVote());
