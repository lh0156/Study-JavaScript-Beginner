/*

    함수와 메소드 연결
    - 함수
        * 오브젝트에 연결
        * Object.create()
    
    - 메소드
        * 오브젝트의 prototype에 연결
        * Object.prototype.toString()

    ES5 기준
    Object.create = Create funciton
    Object.prototype.toString() = Create Method

    ES6는 스태틱 함수도 추가됨
*/

/*

    함수, 메소드 호출
    함수 호출 방법
    Object.create()
*/

console.log(Object.create);
// function create(){ [native code] }
console.log(Object.prototype.create);
// undefined

/*

    메소드 호출 방법
    Object.prototype.toString();
    또는 인스턴스를 생성하여 호출
*/

console.log(Object.prototype.toString());
// function create(){ [native code] }

var obj = [];
console.log(obj.toString);
// function create(){ [native code] }
// 즉 toString함수를 두가지 방법으로 호출할 수 있다.

/* 

    - 함수와 메소드를 구분해야 하는 이유
        * JS 코드 작성 방법이 다르기 떄문
        * 함수는 파라미터 값을 작성하고 메소드는 메소드 앞에 값을 작성

 */

    console.log(String.fromChatCode(49,65));
    // = 1A
/*
    자바스크립트는 함수 앞에 작성한 데이터의 형태에 따라서 Built-in 오브젝트로 인스턴스를 만들고 그를 통해 메소드를 호출하게 된다.
    함수 앞에 배열로 값을 작성하면 Array오베젝트의 함수가 호출되므로
    String 오브젝트의 함수를 호출하면서 파라미터에 값을 작성해야 합니다.

    object에 연결되어 있으면 함수이고 prototype에 연결되어 있으면 메소드
    * 메서드는 객체에 종속적인 함수를 말함!
    * 함수가 메소드를 포함한 개념이다

*/

/*

    메소드와 메서드
    - 메서드(method) -> 발음은 이게 맞다
    - 국립국어원 표준걱어대사전
        * 메소드는 검색되고 메서드는 검색되지 않음
        * 프로그램과 관련지어 설명하고 있음

*/

