// 객체 : 자바스크립트에서는 원시타입을 제외한 모든 값이 객체입니다.
// 객체는 중괄호 {} 를 사용하여 만들며, 속성(property)과 값(value)으로 구성
// 객체는 객체 리터럴을 사용하여 생성
const person = {
  name: "안유진",
  age: 21,
  addr: "서울시 강남구 삼성동",
  job: "아이브",
  info: function () {
    return `이름:${this.name}, 나이:${this.age}, 주소:${this.addr}, 직업:${this.job}`;
  },
};

console.log(person.name);
console.log(person["age"]);
console.log(person);
console.log(person.info());

const profile = [
  {
    name: "안유진",
    age: 21,
    history: {
      date: "2024-09-01",
      product: "iPhone 14 Pro",
    },
  },
  {
    name: "장원영",
    age: 20,
    history: [
      {
        date: "2024-01-01",
        product: "iPhone 15 Pro Max",
      },
      {
        date: "2023-12-01",
        product: "iPhone 16 Plus",
      },
    ],
  },
  {
    name: "카리나",
    age: 24,
  },
];

console.log(profile);

// 객체 속성용 동적 추가하기
// 객체 속성에 키로 접근해 값을 재할당하면 기존 속성값을 변경할 수 있음
// 키가 없는 경우, 키와 값으로 구성된 새로운 속성이 객체로 추가
const carInfo = {};
carInfo.name = "BMW X6";
carInfo.year = "2023/04/15";
carInfo.maxSpeed = "250km";
delete carInfo.maxSpeed;
console.log(carInfo);

// 생성자 : 자바스크립트에서는 클래스 대신 함수를 생성자를 통해서 객체로 만들 수 있음
function Person(name, age, addr) {
  this.name = name;
  this.age = age;
  this.addr = addr;
  this.info = function () {
    return `이름:${this.name}, 나이:${this.age}, 주소:${this.addr}`;
  };
}
const person1 = new Person("안유진", 21, "서울시 강남구 대치동");
const person2 = new Person("장원영", 20, "서울시 강남구 청담동");
const person3 = new Person("이서", 18, "서울시 강남구 역삼동");

console.log(person1.info());
console.log(person2.info());
console.log(person3.info());

// 클래스 방식
class Person_c {
  constructor(name, age, addr) {
    this.name = name;
    this.age = age;
    this.addr = addr;
  }
  info() {
    return `이름:${this.name} 나이:${this.age} 주소:${this.addr}`;
  }
}
const person4 = new Person_c("안유진", 21, "서울시 강남구 대치동");
const person5 = new Person_c("장원영", 20, "서울시 강남구 청담동");
const person6 = new Person_c("이서", 18, "서울시 강남구 역삼동");

console.log(person4.info());
console.log(person5.info());
console.log(person6.info());
