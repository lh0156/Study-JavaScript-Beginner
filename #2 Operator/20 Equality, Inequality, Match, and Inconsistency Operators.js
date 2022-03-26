/*
    동등, 부등, 일치, 불일치 연산자

    == 연산자

    동등 연산자
    왼쪽과 오른쪽 값이 같으면 true, 다르면 false

    값 타입은 비교하지 않음, 1과 "1"이 같음
*/

console.log(1 == "1");
//문자 타입을 숫자로 바꾼다

var value;
console.log(value == undefined);
//양쪽이 모두 undefined이므로 true

console.log(value == null);
//undefine이 값이고 타입이 undefined
//null도 값이고 타입이 object

// *= 연산자
// 부등 연산자
// 왼쪽과 오른쪽 값이 다르면 true, 같으면 false
// a != b 와 !(a == b)가 같다

// ===연산자
// 일치 연산자
// 왼쪽과 오른쪽의 값과 타입이 모두 같음녀 true, 값 또는 타입이 다르면 false

console.log(1 === 1);
console.log(1 === "1");

var value; // 변숫값은 undefined
console.log(value==null); //undefined와 null은 값이다. (동등 연산자로는 true)

console.log(value===null); //일치 연산자는 타입이 다르므로 false
//이 떄문에 한 번은 삽질한다에 500원 거신다고 ㅋㅋㅋㅋㅋ

// **** 우선 먼저 이퀄 3개로 비교하고 2개로 비교하는 로직이라고 함

// !==
// 불일치 연산자
// 값 또는 타입이 다르면 true, 같으면 false