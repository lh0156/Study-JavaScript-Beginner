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

console.log("\u0031");
console.log("\u0041");
console.log("\u1101");
console.log("\uac01");