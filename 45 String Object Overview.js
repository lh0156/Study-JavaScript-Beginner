/*

    String 오브젝트
    - "ABC"처럼 문자 처리를 위한 오브젝트
    - 즉, String 오브젝트에
        문자 처리를 위한
        함수와 프로퍼티가 포함되어 있으며
        함수를 호출하여 문자 처리를 하게 됩니다.

    문자열 연결 방법
    한 줄에서 연결
    var book = "12" + "AB" + "가나";

    줄을 분리하여 연결
    +로 문자열 연결
*/

var concat = 123 + "abc"
            "가나다라";

console.log(concat);

/*
    역슬래시\로 문자열 연결
*/

var concat = "abc \
    가나다라";
console.log(concat);


/*

    빌트인 스트링 오브젝트의 프로퍼티 리스트
    new String() = 인스턴스 생성
    
    String 함수
    String() = 문자열로 변환하여 반환
    fromCharCode() = 유니코드를 문자열로 변환하여 반환

    String 프로퍼티
    length = 문자열의 문자 수 반환
    
    String.prototype
    valueOf() = 프리미티브 값 반환
    toString() = 문자열로 반환
    charAt() = 인덱스 n번째 반환
        * 인덱스는 정수 형태임
    indexOf() = 일치하는 문자열 중에서 가장 작은 인덱스 반환
    lastIndexOf() = 일치하는 문자열 중에서 가장 큰 인덱스 반환
    concat() = 문자열 연결
    toLowerCase() = 영문 소문자로 변환
    toUpperCase() = 영문 대문자로 변환
    trim() = 문자 앞뒤의 화이트 스페이스 삭제
    substring() 시작 에서 끝 직전까지 값 반환
    substr() = 시작 위치부터 지정한 문자 수 반환
    slice() = 시작에서 끝 직전까지 값 반환. substirng()과 차이 있음
    match() = 매치 결과 반환 = 일치한다.
        * 정규 표현식 사용 가능
        * 즉 다수를 매치 가능
    replace() = 매치 결과를 지정한 값으로 대체
    search() = 검색된 첫 번째 인덱스 반환
    split() = 구분자로 분리하여 반환
    charCodeAt() = 인덱스 번째 문자를 유니코드로 반환
    localeCompare = 값의 위치를 1, 0, -1로 반환

*/