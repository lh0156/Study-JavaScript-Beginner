/*

    유니코드, UTF

    Unicode
    - 세계의 모든 문자를 통합하여 코드화
    - 언어, 이모지 등
    - 코드 값을 코드 포인트(code point)라고 부름
    - 0000~FFFF, 10000~1FFFF 값에 문자 매핑
    - 유니코드 컨소시엄 http://wwww.unicode.org/

    표기 방법
    - u와 숫자 형태: u0031은 숫자 1
    - JS는 u앞에 역슬래시(\) 작성
*/

console.log("\u0031"); // = 1
console.log("\u0041"); // = A
console.log("\u1101"); // = ㄱ
console.log("\uac01"); // = 각

/*
    역슬래시(\)를 문자로 표시하려면 역슬래시 (\\)2개 작성
*/

console.log("\\u0031");
console.log("\\u0031");

//ES6에서 표기 방법 추가됨(ES5에서는 4자리였으나, ES6에서는 5자리 지원!)

/*

    UTF(Unicode Transformation Format)
    - 유니코드의 코드 포인트를 매핑하는 방법
    - UTF-8, UTF-16, UTF-32로 표기
    - <meta charset="utf-8">
    - UTF-8은 8비트로 코드 포인트 매핑
    - 8비트 인코딩(Encoding)이라고 부름
    - 반대로 디코딩도 있다!

*/
