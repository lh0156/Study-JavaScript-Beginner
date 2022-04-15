/*

    빌트인 오브젝트 구조(이 내용의 핵심은 구조이다!)

    - 오브젝트 이름(Object, String, Number)
    - 오브젝트.prototype
        * 인스턴스 생성 가능 여부 기준(즉 prototype이 없으면 인스턴스를 못만듬)
            -> 예를들어 String오브젝트는 프로토타입이 있다. 그러나 수학 내용을 계산하는
               Math오브젝트는 프로토 타입이 없다!
        * 프로퍼티를 연결하는 오브젝트

        프로토타입이 있으면 인스턴스를 생성 가능하게 하고, 여기에 프로퍼티를 연결한다!

    - 오브젝트.prototype.constructor
        * 오브젝트의 생성자
        프로토 타입이 있으면 constructor가 디폴트를 따라 붙고 인스턴스를 생성함.

    - 오브젝트.prototype.method
        * 메소드 이름과 함수 작성

    오브젝트의 구조
 */

    var obj = Object();
    console.log(obj);
    console.dir(obj);

    /*
    
    contructor는 Object()를 호출하면 내부에서 constructor를 호출한다.
    
    ES5에서는 constructor를 변경할 수 없지만
    ES6에서는 constructor를 변경할 수 있다(생산성)

    정리
    오브젝트에 prototype이 있으면 인스턴스를 만들 수 있다.
    그리고 프로퍼티를 연결함

    자바스크립트에서 프로토타입은 중요한 의미를 갖지만 실제 기능을 보면 별거 없다!
    
    오브젝트.prototype.constructor
    new number()를 호출하면 constructor를 호출해서 만드는 것

    메소드 = 프로토타입과 연결되어 있는 함수

    */
