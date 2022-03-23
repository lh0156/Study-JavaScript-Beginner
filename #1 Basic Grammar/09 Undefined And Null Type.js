//Undefined 타입

//Undefined(대문자) 타입
// 값: undefined(소문자)

//변수의 디폴트(Default)값
//var point;
//변수를 선언한 것 만으로 undefined가 초기값으로 설정

var point;
console.log(point);
console.log("타입오브" + typeof point);
//변수에 값을 할당하지 않은것을 나타내는 시멘틱

//변수에 undefined 할당 가능
point = undefined;
console.log(point);

//하지만 초기값인지 값을 할당한 것인지 구분이 되지 않으므로 권장하지 않음
//대신 null을 할당할 것

//Null타입
// 값: null(소문자)

//null과 undiefined 차이
// undefined는 단지 변수만 선언
// null을 할당해야 값이 null이 됨.
// 의도적으로 값을 할당한 것으로 코드를 수행한 것이 됨

point = null;
console.log(point);