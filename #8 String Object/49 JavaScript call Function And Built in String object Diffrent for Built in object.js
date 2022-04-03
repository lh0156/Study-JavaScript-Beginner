/*

    toString()
    data = 문자열, String 인스턴스
    파라미터 = 사용하지 않음
    반환 = 변환한 값

    data 위치의 값을 String으로 변환

*/

var value = 123;
var result = value.toString();
console.log(typeof result);
// = string

// 문제 이 코드가 String Object 설명에 적절하지 않습니다. 왜그럴까요

// 내 생각: toString은 String Object로 변환되는 것이 아니라 value값의 데이터 형을 변환 시키는 것이여서?
// 혹은 String Object는 [[]]형태의 내부 프로퍼티 값을 가질텐데 toString은 그게 불가능하므로?

/*

    "123".toString();
    - String 타입을 String 타입으로 변환
    - 의미가 없다?

    toString()함수가 필요한 이유

*/

var obj = String;
// 인스턴스를 만들때 "프로토 타입에 있는것을 복사해서 준다고 했다." 즉 인스턴스를 만들 때 toString이 인스턴스에 할당됨
var instance = new String("123");
// 이 안에도 toString이 있다 (여기까지 논리적으로 부족합이 없음)

var oneProto = instance.__proto__;

console.dir(instance);
console.dir(oneProto);
//이걸 전개하면 toString안에 .__proto__가 또 있음
// 첫번째 .__proto__는 빌트인 String이고 .__proto__는 빌트인 Object임
// 그럼 결국 toString이 두개가 있는 모습이 된 것임.

// 이게 왜 필요한가?
// String object(첫번째 .__proto__)에 toString이 없으면 두번째 object(빌트인 오브젝트)에서 toString을 찾음.
// 스트링 오브젝트는 단일 값만 저장하는데 bulit-in 오브젝트는 키 - value 형태로 저장함.

// 즉 빌트인 오브젝트에는 object는 key - value의 구조를 갖는데
// 단순한 String은 value만 존재하기 떄문에
// 빌트인 오브젝트의 프로토타입에 있는 toString을 호출하는 일이 없도록
// toString을 한 번 호출해줘서 스트링 프로젝트의 toString을 호출함으로써 리턴시켜서
// 빌트인 오브젝트까지 접근하지 못하게 하는 것(key - value의 형태가 되지 않게)

// __proto__:(built-in String Object의 toString)
//  toString();
//  __proto__(built-in Object의 toString)
//   toString();

/*

    JS함수 호출 구조
    - 우선, 데이터 타입으로
        * 오브젝트를 결정하고
        * 오브젝트의 함수를 호출합니다.

*/

var value = 123;
// 1. 데이터의 자료형이 Number로 지정되었고 내부적으로는 new Number(); 실행
//  = 빌트인 넘버 오브젝트로 넘버 인스턴스를 만든 것
value.toString();
// 2. Number 오브젝트의 toString()을 호출한다.

"123".toString();
// 3. 데이터의 자료형이 123인 녀석은 자료형이 String이고
// 4. String 오브젝트의 toString()을 호출한다.

/*
    - toStirng(123);
        * 123을 파라미터에 작성 = 오브젝트가 없다
*/

var result = toString(123);
console.log(result);
// 1. 빌트인 오브젝트의 toString()이 호출됩니다.
// 2. 123을 오브젝트로 간주하여 Object 형태를 문자열로 변환합니다(key-value니까!)
// = [object Undefined]