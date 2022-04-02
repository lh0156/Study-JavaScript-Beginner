/*

    trim()
    data = 삭제 대상
    파라미터 = 사용하지 않음
    반환 = 삭제한 결과

    - 문자열 앞뒤의 화이트 스페이스 삭제

*/

var value = "    abcd   ";
console.log(value.length);

console.log(value.trim().length);

/*
    abcd.length라고 작성하더라도
    자바 스크립트 엔진 내부에서 이것의 타입을 보고서
    new String("abcd")로 인스턴스를 만들고
    만들면 여기에 length property가 만들어지고 그 length값을 구하는 것!!!!!

    .을 찍네? ㅋ
    - value.trim()은 abcd가 반환되겠지?
    - 이것을 "메소드 체인"(Method chain)이라고 함!!!
*/

