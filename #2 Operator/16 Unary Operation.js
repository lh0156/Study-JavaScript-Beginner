// 단항 + 연산자
// 형태: +value

//값을 Number타입으로 변환
let value = "7";
console.log(typeof value);
console.log(typeof +value);
console.log(typeof Number(value));
//코드 가독성
// - +를 더하기로 착각할 수도 있음
// - Number()도 기능 같음

// 단항 - 연산자
// 형태: -value
// 값의 부호를 바꿈
// -  +는 -로, -는 +로 바꿈

// 연산할 때만 바꿈
//  - 원래 값은 바뀌지 않음

value = 7;
console.log(-value);
console.log(8 + -value);
console.log(value);