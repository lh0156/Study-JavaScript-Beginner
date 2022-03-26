/*
    Break
    break;
    break 식별자;

    반복문 종료

    for, for~in, while, do~while, switch에서 사용

*/

var k = 0, m = 0;

while(k < 3) {
    m++
    if (m === 2){
        break;
    };
    console.log(m);
}

//세미콜론 자동 첨부
for ( var k = 0; k < 3; ++i] {
    if ( k === 1) {
        break
        console.log("k === 1");
    }
    console.log(k);
}


/*
    continue
    형태:
    continue;
    continue 식별자;

    스킵이라고 생각하면 된다!

*/
for (var k = 0; k< 5; ++k){
    if ( k === 2 || k === 3){
        continue;
    };
    console.log(k);
}