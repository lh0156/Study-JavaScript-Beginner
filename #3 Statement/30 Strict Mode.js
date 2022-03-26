/*
    Strict 모드
    형태: "use strict"
    엄격하게 JS 문법 사용의 선언
    작성한 위치부터 적용
    ES5부터 지원

*/

//book = "책";
//console.log(book);

// var을 작성하지 않은 형태(그렇게 좋은 코드는 아님)
// var을 사용하여 변수를 선언해야 하지만 변수가 선언되고 "책"이 할당됩니다.

"use strict";
try {
    book = "변수 선언하지 않음"
    console.log(book);
} catch(error){
    console.log(error.message);
}

// 1. var 키워드를 작성하지 않은 형태
// 2. book 변수에 "변수 선언하지 않음"을 할당하면 에러 발생
// 3. error.message에 에러 메세지로 설정됩니다.
// 4. 코딩 실수를 에방할 수 있으므로 use strict 선언은 필수입니다.

/*
Q1 ) JS 프로그램에서 사용하지 않는 문장이 있습니다
    - label 문장의 코드를 작성하고 사용하지 않는 이유를 설명하세요.

Q2 ) "use strict" 아래에 with 문을 사용한 코드를 작성하세요.
    - 에러가 발생하는 것을 확힎하시오
    - 에러 발생 이유는 차차 설명 될 예정입니다.
*/
