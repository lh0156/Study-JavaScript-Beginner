// + 연산자
// + 양쪽의 표현식을 평가
// 평가 결과를 더함
var value = 1 + 2 + 4;
console.log(value);

// 평가 결과 연결
//  * 한 쪽이라도 숫자가 아니면 연결
var two = "2";
var value = 1 + two;
console.log(value);
// = 12
console.log(typeof value);
// = string

//1과 "2"를 연결하는 것이 적합한가?
// 일반적인 언어는 에러가 나는데, 자바스크립트는 왠만하면 에러를 내지않도록 설계되어 있음
// 이것이 "자바스크립트의 문법" 이라고 이해하여야 한다.

// 왼쪽에서 오른쪽으로 연산
// 1 + 5 + "ABC" 결과는?

value = 1 + 5 + "ABC";
// = 1+5계산 후 6+"ABC"
console.log(value);
