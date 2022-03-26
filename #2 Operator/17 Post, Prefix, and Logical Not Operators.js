/*

    후치, 전치, 논리 Not 연산자

    후치++ 연산자
    형태: value++
    값을 자동으로 1 증가시킨다
      - 문장을 수행한 후에 1 증가
      - 즉, 세미콜론 (;) 다음에서 증가

*/

var one = 1;
var value = one++ + 3;
//one을 적용하는 시점에서는 아직 1을 증가시키지 않는다
console.log(value);
console.log(one);

/*

    전치 ++ 연산자
    형태: ++value
    값을 자동으로 1 증가시킴
        문장 안에서 1증가
        표현식을 평가하기 전에 1증가

*/

one = 1;
value = ++one +3;
console.log(value);

/*

    후치 -- 연산자
    형태: value--

    값을 자동으로 1 감소시킴
        문장을 수행한 후에 1감소
        즉, 세미콜론 (;) 다음에 감소

*/

var two = 2;
value = two-- + 3;
console.log(value);
console.log(two);

/*

    전치 --연산자
    형태: --value

    값을 자동으로 1 감소시킴
      문장 안에서 1감소
      표현식을 평가하기 전에 1 감소

*/

two = 2;
value = --two + 3;
console.log(value);

/* 

    !연산자
    논리(Logical) Not연산자
    형태: !value

    표현식 평가 결과를
    true, false로 변환한 후
    true이면 false를
    false이면 ture를 반환

    원래 값은 바뀌지 않으며 사용할 떄만 변환

*/

value = true;
console.log(!value);
//ES3에서는 많이 사용하는 형태였다고 한다.
console.log(!!"A");