/*
    Length 프로퍼티
    문자 수 반환
*/

var value = "ABC";
console.log(value.length);
// 3

/*
    length 프로퍼티 활용
*/

var value = "ABC";
for (var k = 0; k < value.length; k++){
    console.log(value[k]);
}
/*
A
B
C
*/

/*

    length 값이 반환되는 논리
    var value는 오브젝트가 아닌데 어떻게 length 프로퍼티를 썻을까?

*/

console.dir(value);
var obj = new String(3);
console.dir(obj);

/*
    obj를 펼치면 obj내부에 length가 있다.
    obj와 value와 레벨이 같음.
    즉 value가 obj가 된 것이다.

    value.length를 만나면 value가 String타입이므로 내부에서 new String이라고 인스턴스를 만들게된다.
    
    즉 자바스크립트의 구동 매커니즘은
    1. var value를 만났을 때
    2. value에 선언된 타입을 구한다
    3. Stirng이면 new String인스턴스를 만든다
    4. 그럼 length 프로퍼티가 들어옴!

    즉 value = "ABC"과 new String("ABC")는 같음
    그러나 [[PrimitiveValue]]는 내부에서만 사용하겠다 는 것이고,
    length는 외부에서 사용하겠다는 뜻(대괄호가 없으니까)

    "ABC"로 for() 문을 반복할 때마다
    - 문자를 하나씩 읽을 수 있는 것은
    - 인슽넌스에 0: "A", 1:"B", 2: "C"로 분리되어 있기 때문입니다.

    2. for() 문을 반복할 때
    - value[k] 에서 k를 프로퍼티 이름으로 값을 구합니다
*/
