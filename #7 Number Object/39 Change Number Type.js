/*

    Number()

    파라미터 = 변환할 값opt
    반환    = 함수가 실행된 후 함수에서 반환한 값(넘버 타입으로 반환된 값)

    파라미터 값을 Number 타입으로 변환
    파라미터 값이 String 타입이라도 값이 숫자이면 변환 가능
        - console.log(log(Number("123")) + 500);
        - console.log(Number("ABC"));
    숫자로 변환할 수 있으면 변환
        - console.log(Number(true)); = 1
        - console.log(Number(null)); = 0
        - console.log(Number(undefiend)) = 0;


    Number 상수
    Number.MAX_VALUE
    Number.MIN_VALUE
    Number.NaN

    상수는 값을 변경, 삭제할 수 없음
    영문 대문자 사용이 관례
    상수는 Number오브젝트를 바로 사용하는것이 특징!

*/