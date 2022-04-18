/*

    프로퍼티 리스트
    Function
    new FUnction() = 인스턴스 생성
    Function() = 인스턴스 생성

    Function 프로퍼티
    length = 함수의 파라미터 수

    Function.prototype
    constructor = 생성자
    call() = 함수 호출
    apply() = 함수 호출: 배열을 파라미터로 사용
    toString() = 함수를 문자열로 반환
    bind() = 새로운 오브젝트를 생성하고 함수 실행

*/

/*

    new Funciton

    - 파라미터
        * 1. 파라미터 opt
        * 2. 실행 가능한 JS 코드 opt

    - Function 인스턴스 생성
    - 파라미터로 문자열로 함수의 파라미터와 함수 코드 작성
        * var obj = new Function("book", "return book;")
        * obj("JS책")
    - 파라미터 수에 따라 인스턴스 생성 기준이 다름
    - 파라미터 2개 이상 작성
        * 마지막 파라미터에 함수에서 실행할 함수 코드 작성
        * 마지막을 제외한 파라미터 이름 작성
*/

var obj = new Function("one", "two", "return one + two;");
console.log(obj(100, 200));
// = 300

/*
    파라미터 하나 작성
    함수에서 실행할 함수 코드 작성
    파라미터가 없을 때 사용
*/

var obj = new Function("return 1+2;");
console.log(obj);

/*

    - 파라미터를 작성하지 않으면
        * 함수코드가 없는 빈 Function 인스턴스 생성

*/

/*

    Function()
    파라미터 = 파라미터 opt
    실행 가능한 opt

    단지 new 연산자를 사용하지 않았다는 차이!
*/