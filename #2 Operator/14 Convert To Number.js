// 숫자로 변환
//연산하기 전에 우선 숫자로 변환
//변환된 값으로 연산

//Undefine -> NaN
//Null -> +0
//Boolean -> true: 1 false: 0
// Number: 변환 전, 후 같음
// string 값이 숫자이면 숫자로 연산, 단, 더하기(+)는 연결

var value;
console.log(value + 10);
//NaN

console.log(10 + null);
console.log(10 + true);
console.log(10 + false);

console.log(10 + "123");
console.log(123-"23");
console.log(typeof 123-"23");

