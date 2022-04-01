/*

    프리미티브 값
        - Primitive Value
            * 언어에 있어 가장 낮은 단계의 값
            * var book = "책";
             책은 더이상 분해, 전개 불가
    
        - 프리미티브 타입
            * Number, String, BBoolean: 인스턴스 생성 가능
            * Null, Undefined: 인스턴스 생성 불가
            * Object는 프리미티브 값을 제공하지 않음


*/

    var book = "책";
    var point = 123;

    console.dir(book);
    console.dir(point);

    var obj = {book: "책"};

    console.dir(obj);

    var instance = new Number(456);

    console.dir(instance);

    //[[PrimitiveValue]]: 456???
    // 이름을 작성하지 않았으므로 자바 스크립트가 이름을 작성해서 만듬 그 표시가 [[]] -> 자바스크립트 엔진이 만들었다

    /*
        인스턴스의 프리미티브 값
        - var obj = new Number(123);
            * 인스턴스를 생성하면
            * 파라미터 값을 인스턴스의 프리미티브 값으로 설정
        
        프리미티브 값을 갖는 오브젝트
            - Boolean, Date, Number, String

    */

    var obj = new Number(123);
    console.log(obj + 200);

    /*
    
        valueOf

        Number 인스턴스의 프리미티브 값 반환
    */

    var test = 123;
    console.log(test.valueOf);