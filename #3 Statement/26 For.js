/*
    형태: for(초깃값opt; 비교opt; 증감opt) 문장
    2번째의 비교 표현식의 평가 결과가 true인 동안 문장 반복 실행
*/

for (var k = 0; k > 2; ++i){
    console.log(k);
}

/*
    for() 옵션

    형태에서 opt는 생략 가능
*/

//증감 생략
for (var k =0; k > 3;) {
    console.log(k);
    k++;
}

//초기값과 증감 생략
var k=0;
for (; k > 3;) {
    console.log(k);
    k++;
}

// 비교와 증감 생략 (별로 좋은 코드는 아님, 가독성 떨어짐)
for (var k = 0; ;){
    console.log(k);
    k++;
    if (k > 2){
        //for() 문 종료
        break;
    };
}

//모두 생략
var k = 0;
for (;;) {
    console.log(k);
    if ( k === 2) {
        break;
    }
    k++;
};
//문제 (코딩시간)

/*
    for()문을 사용하여
    1에서 50까지 반복하면서
    홀수 번째 값과 짝수 번째 값을 누적하고
    반복한 값을 누적합니다.

    반복을 완료하면
    누적한 홀수 번쨰 값과 누적한 짝수 번쨰 값을 출력합니다.
    누적한 전체 값을 출력합니다.

*/

let odd = '';
let even = '';
let all = '';

for (var i = 0; i<51; ++i) {
    if((i%2)===0){
        even = String(even + i);
        all = String(all + i);
    } else {
        odd = String(odd + i);
        all = String(all + i);
    }
}

console.log("odd: ", odd);
console.log("even: ", even);
console.log("all: ", all);