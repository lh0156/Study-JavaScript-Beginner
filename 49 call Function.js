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

// 