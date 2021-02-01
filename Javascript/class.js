// 클래스의 이점: 클래스는 변수나 함수들의 여러가지 코드를 하나의 클래스로 그룹핑함으로써 코드를 훨씬 조직화 시켜준다.
// 클래스를 사용하는 것으로, 클래스에서 탄생하는 여러 새로운 인스턴스를 생성해 낼 수 있다.

// 클래스 만들기(대문자)
class AreyouKorean {
  constructor(country, color) {
    this.nation = country;
    this.color = color;
  }

  // 메소드 만들기(객체가 가지는 메소드가 된다.)
  countryValidator() {
    return this.nation === "Korean";
  }
}

// 인스턴스 만들기 (변수에 담아야 함.)
const yonghyun = new AreyouKorean("Korean", "yellow"); //이것 자체가 객체이다.(new)

const american = () => {
  return new AreyouKorean("america", "black");
};

console.log(yonghyun);
console.log(american());
console.log(yonghyun.countryValidator());
console.log(american().countryValidator());
