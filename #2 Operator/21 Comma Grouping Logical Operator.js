/*
    콤마 연산자
     - 기호: , Comma
     - 콤마로 표현식을 분리
        * var a = 1, b = 2;
        * 한번만 var 작성
*/

var a = 1, b = 2;

/*
    그룹핑 연산자
    소괄호() 안의 표현식을 먼저 평가
        - 평가한 값을 반환
        - 5 / (2 + 3)
*/

/*
    ||연산자
    논리 OR 연산자
    표현식의 평가 결과가 하나라도 ture이면 ture dㅏ니면 flase
*/

var value, zero = 0, two = 2;
console.log(value||zero||two);

/*
value변숫값이 undefined이므로 false
zero는 0이므로 false이다.
two 변숫값이 2이므로 true가 되며 two 변숫값을 반환
!! true가 아니라 ture가 되는 변숫값을 반환. 2가 true이므로 전체 비교는 ture

*/

var value, zero = 0;
console.log(zero||value);

//마지막까지 비교하였는데 모두가 false이면 false가 아니라 마지막 변숫값 반환 = undefined

var one = 1;
console.log(one === 1 || two === 2);
//앞이 true이므로 뒤의 연산은 비교하지 않는다. 이러면 프로그램에서 에러가 발생함

/*
    && 연산자
    논리 AND 연산자
    표현식의 평가 결과가 모두 true이면 ture 하나라도 false이면 false

*/

var one = 1, two = 2;
console.log(one && two);

// one 변숫값이 1이므로 true, true이므로 오른쪽을 비교
// two 변숫값이 2이므로 true 모두가 true이며 "마지막의 2를 반환"

/*
    왼쪽 결과가 false이면 오른쪽은 비교하지 않음
*/

var one = 1, zero = 0;
console.log(one && zero && nine);

// one 변숫값이 1이므로 true
// true이므로 오른쪽 비교

// zero 변숫값이 0이므로 false
// false이므로 오른쪽을 비교하지 않고 zero 변숫값이 0 반환

// nine을 비교하면 nine 변수가 없으므로 에러 발생