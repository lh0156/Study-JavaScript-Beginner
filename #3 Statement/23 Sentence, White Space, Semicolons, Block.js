/*

    문장(Statement)
    형태 : ; (세미콜론)
    var book = "책";

    화이트 스페이스
    White Space
    사람 눈에 보이지 않는 문자
        가독성을 위한 것
        문자마다 기능을 갖고 있음(스페이스 = 한 칸 띄운다, 엔터 = 개행)

    탭키 = 공백을 n개 발생
    스페이스바 = 공백
    NBSP = 공백

    LF = 첫 줄로 이동
    CR


    세미콜론 자동 삽입
    세미콜론은 문장 끝에 작성
    세미클론을 삽입하여
        * 자동으로 문장이 끝나게 한다
        * JS 엔진이 분석 및 삽입(ES5부터 지원)
*/

var one = 1
var two = 2;
console.log(one);

//에러가 나지 않은 것은 엔진이 1의 끝에 세미콜론을 삽입하여 문장을 완성시키기 때문

/*
    블록
    형태: {문장 리스트 opt}
    중괄호 {}
        * 실행 그룹으로 블록안의 모든 문장 실행

    문장 리스트
        * {} 안의 모든 문장
        * 모든 리스트 작성은 선택(option)
        * 강좌에서 option을 opt로 표기
*/

var one = 1, two = 1;
if ( one === two) {
    var result = one + two;
    console.log(result);
};


