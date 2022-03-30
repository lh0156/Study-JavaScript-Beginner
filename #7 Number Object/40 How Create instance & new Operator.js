/*

    new 연산자
    constructor = 생성자


    오브젝트로 인스턴스를 생성하여 반환
        - 원본을 복사하는 개념
        - new 연산자를 사용하면 인스턴스
        - 코딩 관례로 첫 문자를 대문자로 작성

*/

var obj = new Number(); // 첫 문자가 대문자다 = 인스턴스를 만드려는 의도가 있구나(시멘틱)
console.log(typeof obj);

// 빌트인 Number 오브젝트로 인스턴스를 생성하여 반환
// 생성한 인스턴스 타입은 object     소문자 object는 인스턴스

/*

    !!! 대문자 OBJECT = key value형태의 프로퍼티의 집합
        소문자 object = 인스턴스

*/

/*

    인스턴스 생성 목적
        - 인스턴스마다 값을 갖기 위한 것

*/

var oneObj = new Number("123");
console.log(oneObj.valueOf());

var twoObj = new Number("456");
console.log(twoObj.valueOf());