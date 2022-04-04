/*

    At은 위치의 시멘틱을 갖는다
    data = 변환 대상
    파리미터 = 반환 기준 인덱스
    반환 = 인덱스 번째 문자

*/

//인덱스의 문자를 반환
var value = "sports";
console.log(value.charAt(1));

//ES5부터 사용 가능, 프로퍼티 값
console.log(value[1]);

// 강좌에서 인덱스 표기기준
// 0번 인덱스는 첫번 째 인덱스이고
// 1번 인덱스는 두번 째 인덱스입니다.


var value = "sports";
console.log(value.charAt(12));
// 빈 문자열 "" 반환

var value = "sports";
console.log(value[12]);
// undefined 반환.

// 김영보 선생님은 undefined가 낫다고 보심.
// 작성하지 않았다는 시멘틱이 강하기 때문

/*

    indexOf
    ~의 index라는 시멘틱
    data = 검색 대상
    파라미터 = 검색할 문자열, 검색 시작 위치
    반환 = 인덱스

    data 위치의 무낮여레엇 파라미터의 문자와 같은 첫 번째 인덱스를 반환

*/


//    검색 기준
//- 왼쪽에서 오른쪽으로 검색


var value = "123123";
console.log(value.indexOf(2));
//1
console.log(value.indexOf(23));
//1

//두번쨰 파라미터를 작성하면 작성한 인덱스부터 검색
var value = "123123";
console.log(value.indexOf(2,3));
// 4

var value = "123123";
console.log(value.indexOf(15));
// -1

// ES6에서 나온 include는 존재하면 true를 반환한다.

//두번째 파라미터 값이 0보다 작으면 처음부터 검색
console.log(value.indexOf(2, -1));
console.log(value.indexOf(2, 9));
console.log(value.indexOf(2, "A"));

//인덱스 of의 중요한 기능만 잡고 있으면 된다!!!!!!!

/*

    lastIndexOf()
    오른쪽에서 왼쪽으로 검색하는 lastIndexOf()

*/

/*
    코딩시간!

    indexOf()와 lastIndexOf()를 통합하여 발생 가능한 케이스를 기술하고 이에 맞는 코드를 작성하세요

*/

/*
    indexOf
    1. 파라미터를 유효한 문자열로 1개만 쓴 경우
        * 제대로 나오겠지?
    2. 파라미터를 1개만 썻으나 올바르지 존재하지 않는 값을 넣었을 경우
        * -1이 반환되겠지?
    3. 첫번쨰 파라미터를 유효한 값을 작성하고 두번쨰 파라미터를 인덱스의 수 범주 내에서 올바르게 작성한 경우
        * 두번쨰 파라미터부터 검색하여 올바른 값이 나오겠지?
    4. 첫번쨰 파라미터를 유효하지 않은 문자열을 작성하고 두번쨰 파라미터를 인덱스의 수 범주 내에서 올바르게 작성한 경우
        * 탐색하는 수가 줄어들었을 뿐 -1이 반환되겠지?
    5. 첫번쨰 파라미터를 유효한 값을 작성하고 두번쨰 파라미터를 인덱스의 값보다 큰 수를 작성한 경우
        * -1이 반환되려나? = -1을 반환한다
    6. 첫번쨰 파라미터를 유효한 값을 작성하고 두번쨰 파라미터를 음수 값으로 작성한 경우
        * -1이 반환되겠지? = 아닌데? 올바르게 찾는데???
    7. 두번쨰 파라미터에 NaN를 작성한 경우
        * 처음부터 검색하겠지? 즉 올바른 값이 나올듯?

*/

var codingTime = "나는 윤섭이입니다. 홍길동은 멋지다 나는 윤섭이다";
//indexOf
var indexOf_Type1 = codingTime.indexOf("윤섭");
var indexOf_Type2 = codingTime.indexOf("철수");
var indexOf_Type3 = codingTime.indexOf("윤섭", 6);
var indexOf_Type4 = codingTime.indexOf("철수", 4);
var indexOf_Type5 = codingTime.indexOf("윤섭", 100);
var indexOf_Type6 = codingTime.indexOf("윤섭", -1);
var indexOf_Type7 = codingTime.indexOf("윤섭", "멋져");


console.log(`첫번째 케이스: ${indexOf_Type1}`);
console.log(`두번째 케이스: ${indexOf_Type2}`);
console.log(`세번째 케이스: ${indexOf_Type3}`);
console.log(`네번째 케이스: ${indexOf_Type4}`);
console.log(`다섯번째 케이스: ${indexOf_Type5}`);
console.log(`여섯번째 케이스: ${indexOf_Type6}`);
console.log(`일곱번째 케이스: ${indexOf_Type7}`);

console.log(codingTime.indexOf("홍", -1));

/*

    lastIndexOf
    1. 파라미터를 유효한 문자열로 1개만 쓴 경우
    2. 파라미터를 1개만 썻으나 올바르지 존재하지 않는 값을 넣었을 경우
    3. 첫번쨰 파라미터를 유효한 값을 작성하고 두번쨰 파라미터를 인덱스의 수 범주 내에서 올바르게 작성한 경우
    4. 첫번쨰 파라미터를 유효하지 않은 문자열을 작성하고 두번쨰 파라미터를 인덱스의 수 범주 내에서 올바르게 작성한 경우
    5. 첫번쨰 파라미터를 유효한 값을 작성하고 두번쨰 파라미터를 인덱스의 값보다 큰 수를 작성한 경우
    6. 첫번쨰 파라미터를 유효한 값을 작성하고 두번쨰 파라미터를 음수 값으로 작성한 경우
    7. 두번쨰 파라미터에 NaN를 작성한 경우

*/

var array = [2, 9, 9];
console.log(array.indexOf(2));     // 0
console.log(array.indexOf(9, 2));     // 0
console.log(array.indexOf(2, -1));     // 0
console.log(array.indexOf(2, -3));     // 0
