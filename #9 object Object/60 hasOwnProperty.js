/*

    hasOwnProperty()
    object = 기준 인스턴스
    파라미터 = 프로퍼티 이름
    반환 = true, false

    - 인스턴스에 파라미터 이름이
        * 존재하면 true 반환
        * 존재하지 않으면 false 반환

*/

var obj = {value: 123};
var own = obj.hasOwnProperty("value");
console.log(own);
// = true

//1. obj 인스턴스에 value 프로퍼티가 존재하며
//2. obj를 만들면서 직접 작성했으므로 true 반환

var obj = {value: undefined};
var own = obj.hasOwnProperty("value");
console.log(own);
//1. undefined가 값이지만 false로 인식됩니다.
//2. 하지만, 값은 체크하지 않고 존재 여부만 체크하므로 true 반환

/*

    - 자신이 만든것이 아니라
        * 상속받은 프로퍼티면 false 반환

*/

var obj = {};
var own = obj.hasOwnProperty("hasOwnProperty");

console.log(own);

/*

    propertyIsEnumerable()
    object = 인스턴스, 오브젝트
    파라미터 = 프로퍼티 이름
    반환 = true, false

    - 오브젝트에서 프로퍼티를
        * 열거할 수 있으면 ture 반환
        * 열거할 수 없으면 false 반환

*/

var obj = {sports: "축구"};
console.log(obj.propertyIsEnumerable("sports"));
// true

Object.defineProperty(obj, "sports", {
    enumerable: false
});
//스포츠 프로퍼티를 열거할 수 없는 상태로 설정함

console.log(obj.propertyIsEnumerable("sports"));

for (var name in obj) {
    console.log(name);
}

// false
