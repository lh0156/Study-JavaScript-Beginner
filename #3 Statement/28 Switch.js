/*

    Switch
    형태:
    switch (표현식){
        case 표현식: 문장 리스트opt
        default: 문장 리스트opt
    };

    swtich 표현식의 평가값과 일치하는 case문 수행
*/

var exp = 1;
switch(exp) {
    case 1:
        console.log(100);
    case 2:
        console.log(200);
};
// 주의!!!!!
// case 1 아래의 모든 문장을 수행하므로 200이 출력된다
// 따라서 이를 방지하기 위하여 break를 작성해야 한다!

//break 사용
switch(exp) {
    case 1:
        console.log(100);
        break;
    case 2:
        console.log(200);
};


//일치하는 case가 없으면 default수행
var exp = 7;
switch(exp) {
    case 1:
        value = 100;
    default:
        value = 700;
    case 2:
        value = 200;
};

console.log(value);

//OR(||) 형태 = 결론적으로 2||3이라는 말과 같다는 말!
var exp = 3;
switch(exp) {
    case 2:
    case 3:
        console.log(100);
};