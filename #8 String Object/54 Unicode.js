/*

    charCodeAt()
    유니코드의 코드 포인트값으로 변환하여 반환함.
    인덱스가 문자열 길이보다 크면 NaN 반환

*/

var value = "aAa가";
for (var k = 0; k < value.length; ++i) {
    console.log(value.charCodeAt(k));
}

console.log(value.charCodeAt(30));
//NaN

/*

    fromCharCode()
    fromCharCode

    data위치에 String 오브젝트 작성

    작성 방법
    data 위치에 String 오브젝트 작성
    변환 대상 값을 작성하지 않음

 */

    console.log(String.fromCharCode(49, 65, 97, 44032));

    /*
    
    localeCompare()

    값을 비교하여 위치를 나타내는 값으로 반환
    위치 값: 1(앞), 0(같음), -1(뒤)

    */

    var value = "나";
    console.log(value.localeCompare("가"));
    console.log(value.localeCompare("나"));
    console.log(value.localeCompare("다"));

    //0 앞에 있다
    //1 같다
    //-1 뒤에있다
