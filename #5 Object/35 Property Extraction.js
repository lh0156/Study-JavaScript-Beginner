/*

    Object 프로퍼티 열거

    프로퍼티 값 추출
    오브젝트에서 프로퍼티 값 추출
        - var obj = {book: "책"}
        - var value = obj.book;

    obj 오브젝트에 프로퍼티 이름인
        - book이 있으면 프로퍼티 값 반환
        - book이 없으면 undefined 반환

*/

var obj = {book: "책"};
console.log(obj.book);

/*
    for~in
    오브젝트에서 프로퍼티를 열거

    형태:
    for (변수 in 오브젝트) 문장;
    for (표현식 in 오브젝트) 문장;
*/

var sports = {
    soccer: "축구",
    baseball: "야구"
};

for (var item in sports){
    console.log(item);
    console.log(sports[item]);
}

/*
    프로퍼티 이름이 item에 설정
    sports[item]으로 프로퍼티 값으 구함
    ES3에서는프로퍼티를 작성한 순서대로 읽혀진다는 것을 보장하지 않았었다.
    ES5부터는 순서대로 읽혀진다
*/

