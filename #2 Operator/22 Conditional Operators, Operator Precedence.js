/*
    조건 연산자
    기호: exp ? exp-1 : exp-2
    3항 연산자라고도 함

    exp 위치의 먼저 평가
    true이면 exp-1의 결과 반환
    false이면 xp-2의 결과 반환
*/

console.log(1 === 1 ? "같음" : "다름");
console.log(1 === "1" ? "같음" : "다름");

/*
    연산자 우선순위
    ECMA-262 스펙에 없음
    우선 순위가 가장 높은 것은 ()
    MDN OPrator precedence에 있음!
*/