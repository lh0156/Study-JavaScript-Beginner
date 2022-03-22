/*

 - 상수
  * 변경할 수 없는 값

 - 상수 변수
  * 상수가 설정된 변수
  * JS는 변수의 값을 변경할 수 있으므로 상수 변수는 선언적 의미

 - 상수 변수 표기 방법
  * 코딩 관례로 영문 대문자 사용
  * var ONE = 1;
  * 상수로 사용한다는 시멘틱 선언

 - JS가 제공하는 상숫값은 변경 불가
  * MAX_VALUE, MIN_VALUE등

*/

var ONE = 123;
ONE = 456;
console.log(ONE);

// Number.MAX_VALUE는 최댓값으로 JS상수이며 값을 바꾸면 에러가 난다.
console.log(Number.MAX_VALUE);