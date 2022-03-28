/*

    함수
    function
        - 특정 기능을 처리하는 자바스크립트 코드 묶음

 */


//함수의 형태

//함수내에 변수를 선언한 형태
function book() {
    var title = "JS 책";
};

//변수 값을 함수로 선언한 형태
var point = function(one, two){
    var total = one + two;
    var bouns = total + 100;
};

/*
    함수 구성요소
    function 키워드(Keyword)
    함수 이름
    파라미터(Parameter) -> 일반적으로 3개나 5개. 5개가 넘어가면 다른 방법을 취해야함
        - 매개변수, 인자, 아규먼트라고도 부금
        - 강좌에서는 파라미터로 표기
        - 파라미터 작성은 선택임

    함수 Body
        - 중괄호{} 안에 작성한 코드
        - 함수 코드, 소스 텍스트로도 부름
        - 강좌에서는 함수 코드로 표기
        - 함수 코드 작성은 선택
*/

/*

    함수 이름 규칙
    첫 문자
        - 영문자, $, 언더바(_) 사용 가능
        - 숫자, &, *, @, +: 사용 불가

    함수 이름 작명 권장
        - 함수 코드를 읽지 않더라도 함수 이름과 파라미터로 기능을 알 수 있도록
        - 시맨틱(의미, 뜻)을 부여하여 작명
*/

function setBoookTitle() {
    var title = "JS 책";
};

var calculatePoint = function(one, two) {
    var total = one + two;
    var bouns = total + 100;
};

/*

    함수 이름 관례
    calculatePoint()처럼 동사로 시작
        - 포인트를 계산한다

    두 개 이상의 단어를 사용할 때
        - 두 번쨰 단어부터 명사 사용
        - 명사의 첫 문자를 대문자로 사용
        - CamelCase 형태라고 부름
    
        동사 + 명사 혀앹로 동적인 모습
        - 강좌에서는 설명 편의를 위해 간단하게 작성한다.

*/