/*

    new Object()
    파라미터 = 값opt
    반환 = 생성한 인스턴스
    
    - 인스턴스를 생성하여 반환
    - 파라미터의 데이터 타입에 따라 생성할 인스턴스 결정

*/

var newNum = new Number(123);

console.log(typeof newNum);
// = object
console.log(newNum + 100);
// = 223

var newObj = new Object(123);
console.log(typeof newObj);
// = object
console.log(newObj + 100);
// = 223
// new object의 프리미티브 값으로 number이 들어갔으므로
// new object는 number instance임
// 즉 new object는 파라미터 값에 따라서 인스턴스 타입이 결정됨!

/*

    파라미터 값이 undefined, null이면
    빈 Object 인스턴스 반환

*/

var newObj = new Object();
console.log(newObj);
// = {}

// new Object()처럼 파라미터를 작성하지 않으면 undefined를 작성한 것과 같으며
// 값을 갖지 않은 Object 인스턴스를 생성한다.

/*

    Object()
    파라미터 = 값opt
    반환 = 생성한 인스턴스

    - Object 인스턴스 생성
    파라미터는 {name: value} 형태

*/

var obj = Object({name: "JS책"});
console.log(obj);
// = {name: JS책}

var emptyObj = Object();
console.log(emptyObj);
// = {}

/*
    즉
    new 연산자로 object를 만드나 Object()함수로 오브젝트를 생성하나 같다!!!!!!
    오오 신기해~
*/

/*

    Object 생성 방법
    var abc = {};
    var abc = Object();와 같음
    즉, var abc = {}를 싱행하면 "Object 인스턴스"가 생성됨

    {} 표기를 오브젝트 리터럴 이라고 부름
    => 이게 몰까?
*/

var obj = Object({name: "value"});
console.log(obj);
// = {name: value}
console.log(obj instanceof Object);
// = true
// 이 녀석의 뜻은 obj 인스턴스가 빌트인 Object로 만든 instance이냐? 라는 뜻임!

var obj = {name: "value"};
console.log(obj);
console.log(obj instanceof Object);
// = true

// 즉 두개가 같다!!!

/*

    Object()와 Object 리터럴{}모두 Object 인스턴스를 생성합니다
    그래서 Object()를 사용하지 말고 간단하게 {}를 사용합니다.

*/

/*

    valueOf()
    data = Object 인스턴스, 숫자
    파라미터 = 사용하지 않음
    반환 = 프리미티브 값

    data 위치에 작성한 Object 인스턴스의 프리미티브 값 반환

*/

var obj = {key: "value"};

console.log(typeof obj);
console.log(typeof obj.valueOf());
console.log(obj instanceof Object);
console.dir(obj);
