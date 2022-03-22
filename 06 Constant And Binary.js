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

/*
 - 진수
 - 10 진수: 123
 - 16 진수
  * 0xFF: 255
  * 1번쨰 숫자 0 작성
  * 2번째에 영문자 x 작성
  * 3번째 이후 0 ~ f 작성
  * 대소문자 구분하지 않음

 - 8 진수
  * ES3에서 폐지, ES6 재정의
 - 2 진수
  * ES6에서 특별한 방법 제공(머신러닝, 딥러닝 CPU보다는 GPU를 사용하는데 그때는 빠른 2진수를 사용해야함)
*/

console.log(0XF);
// 0XF = 15
console.log(0xff);
// 0xff = (16*15) + 15
console.log(0xfff);
// 0xfff = (16*15*15) + (16*15) + 15