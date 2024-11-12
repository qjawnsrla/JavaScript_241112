// 문자열을 다루는 String 객체
const pwd = "123456789";
console.log(pwd.length); // 문자열의 길이 확인 length

// 특정 문자열의 포함 여부 확인 : include("문자열") - 포함 여부를 true/false
// indexOf("문자열") : 시작 인덱스를 반환하고 없으면 -1
const email = "test!naver.com";
if (!email.includes("@")) {
  console.log("올바른 이메일 형식이 아닙니다.");
}

const email2 = "test!naver.com";
if (email2.indexOf("@") == -1) {
  console.log("올바른 이메일 형식이 아닙니다.");
}

// lastIndexOf() : 찾고자 하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된 문자열의 index 반환
const email3 = "test@naver.com";
console.log(email3.lastIndexOf("@"));

// slice() : 시작 위치와 종료 위치를 주면 해당 문자열을 잘라내서 반환
const fruits = "Apple, Banana, Orange";
const sliceVal = fruits.slice(7, 13); // 시작 인덱스, 종료 인덱스 미만 개념
const sliceVal_a = fruits.slice(-6); // 시작 인덱스, 종료 인덱스 미만 개념
console.log(sliceVal);
console.log(sliceVal_a);

// subString() : 시작 위치와 종료 위치를 주면 해당 문자여을 잘라내서 반환
const fruits2 = "Apple, Banana, Orange";
const sliceVal2 = fruits2.substring(7, 13); // 시작 인덱스, 종료 인덱스 미만 개념
console.log(sliceVal2);

// replace() : 문자열 내의 문자열을 지정한 문자열로 바꾸는 함수
const names = "안유진, 이영지, 미미, 이은지, 나영석";
const newNames = names.replace("나영석", "장원영");
console.log(newNames);

const engStr = "A stitch in time saves nine";
console.log(engStr.toUpperCase());
console.log(engStr.toLowerCase());

// 두개의 문자열의 합치기
let str1 = "A";
str1 += " stitch";
str1 += " in time saves nine.";
console.log(str1);

const str4 = "A";
const str5 = str4.concat(" stitch in");
const str6 = str5.concat(" time saves nine.");
console.log(str6);

// trim() : 문자열의 앞, 뒤 공백을 제거
// let 이 아닌 const 도배로 코딩해야함
const str = "Hello World!";
console.log(str.trim()); // 출력 결과 : Hello World!

// padStart(), padEnd() : 문자열 앞과 뒤에 지정된 문자를 길이만큼 추가하는 함수
const fixStr = "1234";
const newStr = fixStr.padStart(10, 0);
console.log(newStr);

// charAt() : 문자열에서 특정 인덱스에 해당하는 문자 하나를 반환하는 함수
const addr = "서울시 강남구 역삼동";
console.log(addr.charAt(2));

// charCodeAt()
const addr2 = "서울시 강남구 역삼동";
console.log(addr2.charCodeAt(4));

// split()
let birthday = "1997-06-12";
let arr2 = birthday.split("-"); // 하이픈(-)을 기준으로 문자열을 분리해서 배열로
console.log(arr2); // ["1997","06","02"]
