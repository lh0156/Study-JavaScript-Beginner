/*

    String()
    파라미터 = 변환 대상 opt
    반환 = 변환한 값

    파라미터 값을 String 타입으로 변환하여 반환
    - 값을 작성하지 않으면 빈 문자열 반환

    가독성
    - ("" + 123)도 숫자가 String 타입이 되지만
    - String(123) 형태가 가독성이 높습니다.
    - 다른 목적도 있다고 함!

*/

var value = String(123);
console.log(value);
console.log(typeof value);

console.log(typeof ("" + 123));

/*

    new String()
    파라미터 = 값opt
    반환 = 생성한 String 인스턴스

    String 인스턴스를 생성하여 반환
    파라미터 값을 String 타입으로 변환
    - 파라미터 값이 프리미티브 값이 됩니다.

*/
var obj = new String(123);
console.log(typeof obj);

// object

/*
    valueOf()
    data = String 인스턴스, 문자
    파라미터 = 사용하지 않음
    반환 = 프리미티브 값

    String 인스턴스의 프리미티브 값 반환
*/

var obj = new String(123);
console.log(obj.valueOf());