/*

    toString()
    data = 변환 대상
    파라미터 = 진수(2~36)opt, 디폴트: 10진수
    반환 = 변환한 값

*/

var value = 20;
console.log(20 === value.toString());
// false

console.log(value.toString(16));
// 20을 16진수로 변환하며 값은 14가 나옴

/*

    변환시 주의 사항
    20.toString형태로 작성하면 에러가 난다.
    20이 아니라 20.을 변환 대상으로 인식하므로 점(.0이 없는 valuetoString()형태가 되기 떄문
    코드처럼 20..을 작성한다
*/

console.log(20..toString());

/*

    toLocaleString()
    data = 변환 대상
    파라미터 = 사용하지 않음
    반환 = 변환한 값

    숫자를 브라우저가 지원하는 지역화 문자로 변환(여기서 지역화란 한국, 중국, 프랑스 등을 뜻함)
        - 지역화 지원 및 형태를 브라우저 개발사에 일임
        - 지역화를 지원하지 않으면 toString()으로 변환
    
    스펙 상태
        - ES5: 파라미터 사용 불가
        - ES6: 파라미터에 언어 타입 사용 가능

*/

var value = 1234.56;
console.log(value.toLocaleString());
console.log(value.toLocaleString('de-De'));
console.log(value.toLocaleString('zh-Hans-CN-u-nu-hanidec'));