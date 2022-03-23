// - Object 타입
//   Object 형태
//   {name: value} 형태
//   프로퍼티 Property
// name과 value 하나를 지칭
// Object는 프로퍼티 집합!

//Name value, Key Value
var book = {
    title: "책"
    , point: 123
};

console.log(book);

// Boolean 

//타입 정리
//JS의 기본 데이터 타입 정리
//기본 데이터 타입을 Primitive 타입이라고 한다

console.log(typeof 123);
console.log(typeof "문자열");
console.log(typeof true);
console.log(typeof undefined);

/*
= number
string
boolean
undefined

*/

console.log(typeof null);
console.log(typeof {book: "책"});

/*
= object
object
*/

//현 시점에서는(아직 ES6를 배우지 않은 시점에서는) Null과 Property를 구분할 수 없다
