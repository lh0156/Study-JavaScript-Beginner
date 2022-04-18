/*

    함수 분류
    - function 분류
        * 빌트인 Function 오브젝트
        * function 오브젝트
        * function 인스턴스(new 연산자 사용)
    
    - function 오브젝트 생성 방법
        * function 키워드 사용
        * function getBook(title){return title};

    - JS 엔진이 function 키워드를 만나면
        * 이름이 getBook function 오브젝트 생성

    성격적으로는 인스턴스에 가까우나 new 연산자가 있으므로 강좌에서는 오브젝트라고 칭함

*/

    function getBook(title) {
        return title;
    }

    var result = getBook("JS");
    console.log(result);

    /*
    함수 생명 주기

    - 함수 호출
        * getBook("JS")북
        * 함수 호출하면서 파라미터 값을 넘겨줌
    
    * 함수 코드 실행
        * JS 엔진 컨트롤이 함수의 처음으로 이동
        * 파라미터 이름에 넘겨 받은 파라미터 값 매핑
        * 함수 코드 실행
        * return 작성에 관계없이 반환 값을 갖고 함수를 호출한 곳으로 돌아감
    */
    
    /*
    
        length 프로퍼티
        - 함수의 파라미터 수가
            * 생성되는 funciton  dhqmwprxmdp tjfwjdehla
    
    */

    function add(one, two) {
        return one + two;
    }

    console.log(add.length);
    // = 2
    // 함수를 호출한 곳에서 보낸 파라미터 수가 아님

    function add(add, two) {
        return one + two;
    }

    add(1, 2, 3, 4);
    console.log(add.length);
    // = 2
    //1. add(1, 2, 3, 4)로 호출하면 one에 1이 설정되고 two에 2가 설정됩니다.
    //2. add() 함수를 호출한 곳에서 보낸 값의 수가 아닙니다.
    //3. length 값은 4가 아니라 2입니다.

    // 자바 스크립트는 매개변수의 수와 데이터 자료형이 달라도 상관없음 ㄷ ㄷ !