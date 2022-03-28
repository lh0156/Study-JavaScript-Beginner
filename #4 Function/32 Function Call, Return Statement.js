/*

    함수 호출
    
    호출받는 함수(함수가 호출되었을 떄 실행되는 함수, 함수라고 하면 호출받는 함수를 지칭한다.)
    함수는 호출되어야 실행됩니다.

    파라미터
    호출한 함수 안에서 넘겨준 값을 받음
    (one, two)처럼 소괄호 ()안에 파라미터 이름 작성
    
*/

function setValue(one, two){
    var total = one + two;
};

setValue(10, 20);

/*

    함수 호출
    setValue()형태로 호출
        - 함수 이름과 소괄호()를 작성
        - setValue만 작성하면 호출되지 않음

    파라미터
        - 호출된 함수에 넘겨줄 값 작성
        - setValue(10, 20)처럼 소괄호() 안에 작성
        - JS에서 지원하는 타입 작성
        - 콤마(,0로 구분하여 다수 작성 가능)
*/


setValue(10, 20);
// 1. 호출받는 함수 작성
// 2. setValue(10, 20)형태로 함수 호출 파라미터 값으로 10과 20을 넘겨줍니다
// 3. 호출된 하뭇에서 10을 one에, 20을 two에 설정합니다. 즉, 왼쪽에서 오른쪽으로 설정
// 4. setValue() 함수의 함수 코드 실행
// 5. 일반적으로 호출받는 함수를 소스 파일위에 작성하고 함수 호출을 아래에 작성합니다.

/*

    return
    형태: return 표현식out
    표현식의 평가 결과 반환

*/
    function getPoint() {
        return 10*30;
    }

    var result = getPoint();
    console.log(result);

/*
    return 또는 표현식을 작성하지 않으면 undefined 반환
    !!! undefined는 여기저기 많이 쓰인다!!
*/

function getPoint2(){

}
var result = getPoint2();
console.log(typeof result);

/*
    return과 표현식을 한 줄에 작성
        - return 끝에 세미콜론을 자동으로 첨부하므로 그 다음 행의 내용들을 수행하지 않는다.
*/

function getPoint3(){
    return
    10 * 30;
};
var result = getPoint3();
console.log(getPoint3);
