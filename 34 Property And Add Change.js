/*

    오브젝트(Object)

    프로퍼티
    Property
    {name: value}형태

    name에 프로퍼티 이름/키를 작성

*/

var book = {
    title: "책",
    point: 123
};

/*
    1. 프로퍼티 name(key)에서 key는 유일하지만 name은 중복될 수 있다는 뉘앙스가 풍깁니다
    2. ES3에서는 같은 이름이 등록되기도 합니다
    3. ES5에서는 key와 name을 구분하지 않아도 되지만 ES6에서는 구분해야 합니다
*/

var book = {
    title: "책"
};

/*
    1. {title:"책"}에서 "title"처럼 따옴표를 사용해야 합니다. 즉, title은 String타입입니다!
    2. 그런데, 따옴표를 작성하지 않는 것은 따옴표를 작성하지 않아도 문자열로 간주하기 때문입니다!
*/

//value에 JS에서 지원하는 타입 작성
var book = {
    title: "책",
    point: {
        ten: 10,
        bouns: 200,
        promotion: function(){}
    }
};

/*
    오브젝트(Object)를 객체라고 부르지만
        - 뉘앙스가 좀 다름; 강좌에서는 오브젝트로 표기
        - 오브젝트와 객체 구분이 필요할 때, 별도 표기!


        오브젝트는 실체가 있음! 근데 객체는 개념적인 얘기가 될수도 있다!

*/

/*

    프로퍼티 추가, 변경
    오브젝트에 프로퍼티 추가, 변경
        - var obj = {};
        - obj.abc = 123;
        - obj 오브젝트에 프로퍼티 이름으로 abc가 없으면 abc:123이 추가되고 abc가 있으면 프로퍼티 값이 123으로 변경됨
*/

var book = {};
book.title = "JS책";
console.log(book);

/* 궁금증 ㅋ = let도 되려나? */
let person = {};
person.goodBoy = 'Yunseop';
console.log(person);

//오 된다!!!