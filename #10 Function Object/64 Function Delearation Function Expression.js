/*

    - 함수 선언문
        * Function Declaration
        * function getBook(book){코드}

    - 함수 표현식
        * Function Expression
        * var getBook = function(book){코드}

*/

/*

    함수 선언문
    function = function 키워드
    식별자 = 함수 이름
    파라미터 = 파라미터 리스트 opt
    함수 블록 = (실행 가능한 코드opt)
    반환 = 생성한 function 오브젝트

    - function getBook(title){함수코드 형태}
        * funciton 키워드, 함수 이름, 블록{}은 작성 필수
        * 파라미터, 함수 코드는 선택

*/

function getBook(title) {
    return title;
}

var result = getBook("JS책");
console.log(result);

// = JS책

//함수 이름을 생성한 function 오브젝트의 이름으로 사용

/*

    함수 표현식
    function = function 키워드
    식별자 = 함수 이름 opt
    파라미터 = 파라미터 리스트 opt
    함수 블록 = (실행 가능한 코드 opt)
    반환 = 생성 가능한 function 오브젝트

    - var getBook = function(title){코드}
        * funciton 오브젝트를 생성하여 변수에 할당
        * 변수 이름이 function 오브젝튼 이름이 됨


*/

    var getBook = function(title) {
        return title;
    };

    var result = getBook("책");
    console.log(result);

/*

    - 식별자 위치의 함수 이름은 생략 가능
    * var name = function 

*/

    var getBook = function inside(value) {
        if (value === 102) {
            return value;
        };

        console.log(value);
        return inside(value + 1);
    }

    getBook(100);
    //1. inside 이름으로 function 오브젝트를 생성하여 getBook 변수에 할당합니다.
    //2. 함수 외부에서 insdie()를 호출할 수 없으며 getBook()을 호출하여 함수 안으로 이동한 후 insdie()를 호출할 수 있습니다.
    //3. 함수 안에서 inside()를 호출하는 것은 자신을 호출하는 것이므로 무한으로 반복하여 호출하게 됩니다.
    //4. 함수가 종료되도록 조치를 취해야 합니다. 이를 재귀함수라고 합니다.

    // 함수 선언문과 함수 표현식 두가지를 왜 굳이 사용해야 하느냐?
    // 이유가 있음!
    // 중고급 과정에서 다루겠지만 간단하게 하나만 말해보자면
    // 함수 선언문이 먼저 function 오브젝트를 만들고 그 다음에 함수 표현식으로 function 오브젝트를 만든다.
    // 순서가 다르다.
    // 이에 따라서 동반되는 처리도 다름!