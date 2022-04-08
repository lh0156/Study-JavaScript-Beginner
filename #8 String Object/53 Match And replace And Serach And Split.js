/*

    match()
    data = 매치 대상
    파라미터 = 정규표현식, 문자열
    반환 = 매치 결과

    매치 결과를 배열로 반환
    - 매치 대셍아 정규 표현식의 패턴을 적용하여 매치하고 매치 결과를 반환
    - 문자열 작성 가능, 엔진이 정규 표현식으로 변환하여 매치

    정규 표현식
    - 문자열을 패턴으로 매치
    - 패턴(pattern) 형태: ^, $, *, +등

*/

var value = "Sports";
console.log(value.match(/s/));
// [s]
console.log(value.match("spo"));
// null 뭔가 프로세스를 했기 때문에 null

//ergexp??
// spo를 /spo/로 변환함

/*

    replace = 대체하여 반환함
    data = 치환 대상
    파라미터 = 정규 표현식, 문자열

*/

var value = "abcabc";
console.log(value.replace("a", "바꿈"));
console.log(value.replace(/a/, "바꿈"));

function change() {
    return "함수";
}

console.log(value.replace(/a/, change()));
// 함수를 호출한다
// 호출해서 리턴된 값을 파라미터로 사용한다



/*

    search()
    정규 표현식으로 검색하고 매치된 위치를 반환한다.
    indexOf와 비슷
    그러나 정규 표현식은 다양한 값 매치 가능

*/

var value = "abcabc";
console.log(value.search(/a/));
console.log(value.search("K"));

/*

    split()
    분리자를 기준으로 문자열을 분리하여 배열로 반환한다.

*/

console.log("12_34_56".split("_"));
// 빈 문자열 작성시 문자열을 하나씩 반환함

var value = "123";
console.log(value.split(""));
//빈문자열 작성시 하나씩 자름

console.log(value.split());
//안적으면 안자름

var value = "12_34_56_78"
console.log(value.split(_), 3);
//두번째 파라미터에 숫자를 작성하면 앞에서부터 수 만큼만 반환

var value = "128947_as9d87";
console.log(value.split("A"));
// 분리자가 문자열에 없으면 하나의 배열로 반환함