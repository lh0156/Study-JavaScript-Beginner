/*

    빌트인 Object 특징
    - 인스턴스를 만들 수 있는 모든 빌트인 오브젝트의 __proto__에 Object.prototype의 6개 메소드가 설정됨
    - 따라서 빌트인 오브젝트로 만든 인스턴스에도 설정됨
    - Object.prototype

*/

var numberInstance = new Number(123);
var numberProto = numberInstance.__proto__;

console.log(numberProto);
console.dir(numberProto);

// 전개해보면 빌트인 넘버 오브젝트의 프로토타입에 연결되어있는 메소드들이 설정된다.
// 이것은 인스턴스를 만드는 기준이며
// 이 안의 prototype을 전개하면
// object이다.

// 즉 built-in object의 프로토타입에 연결되어있는 6개의 메소드가 여기에 설정된다는 것
// 이것은 규칙이다.
// 모든 인스턴스에 해당된다
// Number 인스턴스를 만들면 빌트인 nubmer 오브젝트를 첫번째 prototype에 넘버 오브젝트의 프로토타입에 연결되어 있는 6개의 메소들르 설정하고
// 그리고 다시 prototype에 빌트인 오브젝트의 프로토타입에 연결되어 있는 6개의 메소드를 설정하는 것

/*

    isPrototypeOf
    object = 검색할 오브젝트.prototype
    파라미터 = 검색 대상 오브젝트
    반환 = true

*/

var numObj = new Number(123);
console.log(Object.prototype.isPrototypeOf(numObj));

//1. Object.prototype처럼 오브제긑의 prototype을 작성합니다.
//2. numObj에 Object.prototype의 존재를 체크합니다. 존재하므로 true 반환

var Obj = {};
console.log(Number.prototype.isPrototypeOf(Obj));
// flase

var Obj = new Number(123);
console.log(Number.prototype.isPrototypeOf(Obj));

//toString()

/*

    toString()
    object = Object 인스턴스
    파라미터 = 사용 불가
    반환 = 변환한 값

    - 인스턴스 타입을 문자열로 표시

*/

//1. toString() 앞에 Object를 작성했으며
//2. toString()을 실행하면 [실행결과] 처럼 [object Object]를 표시

//3. 앞의 소문자 object는 인스턴스를 나타내고 뒤의 대문자 Object는 빌트인 Object를 나타냅니다.

var point = {book: "책"};
console.log(point.toString());
// = [object Object]

var obj = new Number(123);
console.log(Object.prototype.toString.call(obj));
// = [object Number]
// call도 메소드임!

/*

    toLocaleString
    data = 변환 대상
    파라미터 = 사용하지 않음
    반환 = 변환한 값

    - 지역화 문자 변환 메소드 대체 호출
        * Array, Number, Date 오브젝트의
        * toLocaleString()메소드가 먼저 호출됩니다.

*/

console.log(1234.56.toLocaleString());
// = 1,234.56
// 이때에는 Number.prototype.toLocaleString() 메소드가 호출됩니다.
console.log("4567.89".toLocaleString());
// = 4567.89
// "4567.89"는 String 타입이며
// String.prototype.toLocaleString()이 없으므로
// Object.prototype.toLocaleString() 메소드가 호출됩니다.
// Object의 toLocaleString()이 없으면 에러 발생 즉, 에러 발생을 방지하기 위한 것입니다.