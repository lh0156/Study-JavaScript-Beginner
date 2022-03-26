/*
    While
    형태: while (표현식) 문장

    표현식의 평가결과가 false가 될떄까지 문장을 반복하여 실행
    반복이 종료되는 조건 필요
*/

var k = 1;
while (k < 3) {
    console.log(k);
    k++;
};

/*

    do-while
    형태: do 문장 while (표현식)

    처리 방법은 while문과 같음 단, do 문을 먼저 실행
*/

var k = 0;
do {
    console.log("do:", k);
    k++
} while (k < 3) {
    console.log("while:", k);
};

//true일때는 do블럭을 실행한다.
//false일 떄 while문을 한 번 실행하고 끝낸다.