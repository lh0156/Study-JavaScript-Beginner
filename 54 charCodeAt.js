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

 */

    console.log(String.fromCharCode(49, 65, 97, 44032));