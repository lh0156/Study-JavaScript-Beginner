/*

    Built-in이란?
        - 값 타입, 연산자, 오브젝트를 사전에 만들어 놓은 것
        - JS 코드를 처리하는 영역에!

    장점
        - 사전 처리를 하지 않고 즉시 사용
        - 자바스크립트 특징

    빌트인
    빌트인 값 타입
        - Undefined, Null, Boolean, Number, String, Object

    빌트인 연산자Operator
        - +, -, *, /, %, ++, --, new등
        - 빌트인 오브젝트

    빌트인 오브젝트 형태
    빌트인 Number 오브젝트
        - 123과 같은 숫자, 상수, 지수를
        - 처리하는 오브젝트
        - 여기서 오브젝트는 소문자 object
            * 대문자 OBJECT는 Key value name value 형태로 데이터를 저장
            * 그러나 소문자 object는 이미 key value 형태로 만들어져 있음!
            * 대문자 OBJECT는 데이터 저장이 중요! 소문자 object는 데이터 사용이 사용!
    빌트인 Number 오브젝트 형태

*/

var obj = Number;

/*
    MAX_VVALUE, MIN_VALUE, length, isNan, isInteger, isFinite 등등등~~
    !!! 자바 스크립트의 모든 자료는 key value형태를 갖는 프로퍼티 (다만 value자리에 함수가 있을 수 있음!)
    즉 다수의 프로퍼티 집합이 빌트인이다!
*/

/*
    그럼 왜 Number가 필요함?
    1. 빌트인 Number  오브젝트는
    Number 처리를 위한 프로퍼티의 집합입니다
    즉, Number 처리를 위한 오브젝트입니다

    2. JS에서 Number 처리를 위한 프로퍼티를 사전에 만들어 제공하므로
    Number.length로 1을 구할 수 있으며
    Number.isNan()로 함수를 호충할 수 있습니다.
*/


console.log("Number.lenght:", Number.length);
console.log("Number.isNan(123)", Number.isNaN(123));

/*

    이제 빌트인에서 제공하는 프로퍼티들을 공부하게 될 예정!
    ex:) prototype이 머임???

*/