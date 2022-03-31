/*

    new Number()
    빌트인 Number 오브젝트로
        - 새로운 Number 인스턴스를 생성

*/

var numberObject = Number;
console.dir(numberObject);

var obj = new Number("123");
console.dir(obj);
/*

    새로 새엇ㅇ한 Number 인스턴스가 obj에 할당됩니다.

    오른쪽에 Local의 obj를 펼칩니다.
    __proto__가 있으며
    [[primitiveValue]]: 123이 있습니다.

    정리
    인스턴스를 만드는 기준 = 프로토타입
    프로토타입에 연결되어있는 함수들을 복사해서 주는 것
    프로토타입이 아닌 다른것들은 가려서 복사해주는 것(인스턴스에 복사해주지 않겠다)

    __proto__ 오브젝트에 넣어서 주겠다!



    내 해석 = 빌트인 넘버 오브젝트로 만들면 프로토타입 기능들만 내장(할당)함
    프로토 타입에 있지 않은것들은 복사해서 봐라 ㅋ


*/

var proto =obj.__proto__;
console.dir(proto);
console.dir(obj);