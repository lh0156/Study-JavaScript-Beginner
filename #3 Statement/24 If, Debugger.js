/*

    if
    형태: if (표현식) 문장1
        if (표현식) 문장1

    조건에 따른 처리
        - 먼저 표현식을 평가
        - 평가 결과를 true/flase로 변환
        - true이면 문장 1 실행
        - false이면 문장 2 실행
*/

    var a = 1, b = 1;
    if (a === b) console.log("블록을 사용하지 않음");

    if(a === b)
    console.log("1번 줄")
    console.log("2번 줄");

    //세미콜론이 나올때까지 실행

    var a = 1, b = 1;
    if (a === b){
        console.log("블록 사용");
    }

    var a = 1, b = 2;
    if (a === b) {
        console.log("하하");
    } else {
        console.log("ㅠㅠ");
    }
/*
    debugger
    debugger위치에서 문장 멈춤
    브라우저의 개발자 도구 창이 열려있을 떄만 멈춤
    열려있지 않으면 멈추지 않음
    ES5부터 지원
    debugger 실행
*/

var sports = "스포츠";
debugger;
console.log(sports);