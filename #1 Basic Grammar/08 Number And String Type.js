// 데이터 타입 분류

// 언어 타입과 스펙 타입

//언어 타입
// JS 프로그램에서 사용할 수 있는 타입
// Undefined, Null, Boolean, String, Number, Object

//스펙(문서)타입
//언어 알고리즘을 위한 타입으로 JS 프로그램에서 사용 불가
// Reference, List, Completion, Property Descriptor, Data Block, Lexical Environment, Lexical Record 등

// Number 타입
// 부호를 가진 값

var point = 123;
console.log (typeof point);
// = number

point = -1.23;
console.log (typeof point);
// = number

//숫자값의 범위
//18, 3490, 9283, 903
// (2의 64승, -2의 53승 + 3)

//Number 타입의 특수한 3개 값
//NaN: Not-a-Number
// 숫자가 아니라는 값을 가지고 있으면서도 값임

point = 1 * "A";
console.log(point);
// = NaN (숫자가 아닌것을 연산할때도 연산 결과가 "숫자가 아닙니다"를 나타내는 NaN를 할당함. 이것이 자바 스크립트의 성향인데 되도록이면 프로그램을 죽지 않게 하기 위함임)

//Infinity: 양수 무한대
//-Infinity: 음수 무한대   

//String 타입
// 문자 타입
// 값을 "" 또는 ''사이에 작성
// 최대 문자수: 2의 53승 -1

// 큰따옴표와 작은 땇옴표를 같이 사용할 때
point =  "책, '123'";
console.log(point);

point = '책, "123"';
console.log(point);

point = "123";
console.log(typeof point);