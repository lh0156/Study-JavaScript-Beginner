/*

    Try-Catch
    형태: try 블록 catch (식별자) 블록
    try 블록 finally 블록
    try 블록 catch (식별자) 블록 finally 블록

    try 문에서 예외 발생을 인식
    예외가 발생하면 catch 블록 실행
*/

    var value;
    try {
        value = ball;
    } catch(error) {
        console.log("catch 실행");
    }

    // 1. try 블록에서 ball을 value에 할당할 때 ball변수가 없으므로 에러 발생
    // 2. 에러가 발생하면 catch(error) 블록 실행 파라미터 error에 JS의 Error 오브젝트 설정
    // 3. error는 식별자로 임의의 이름 사용 가능
    // 4. 에러가 발생할 가능성이 있으면 반드시 try-catch를 사용해야 합니다!

    //finally 블록은 예외 발생과 상관없이 실행
    var sports;
    try {
        sports = ball;
    } catch(error) {
        console.log("catch 실행");
    } finally {
        console.log("finally 실행");
    }

    //1. try에서 에러가 발생하면 catch() 블록을 실행한 후 finally 블록 실행
    //2. try에서 에러가 밝생하지 않더라도 finally 블록 실행


/*

    Throw
    형태: throw 표현식;
    명시적으로 예외를 발생시킴
    예외가 발생하면 catch 실행
*/

try {
    throw "예외 발생시킴";
    var sports = "스포츠";
} catch(error) {
    console.log(error);
    console.log(sports);
}

// 1. "throw"표현식에 문자열을 작성한 형태
// 2. throw를 만나면 에러가 발생하며 catch 블록이 실행됩니다. throw 아래의 코드는 실행하지 않습니다.
// 3. catch(error)의 error에 throw 표현식의 문자열이 설정됩니다.

try  {
    throw {
        msg: "예외 발생시킴",
        bigo: "임의의 이름 사용"
    };
} catch(error){
    console.log(error.msg);
    console.log(error.bigo);
};


// 1. throw 표현식에 오브젝트를 작성한 형태
// 2. catch(error)의 error에 Error오브젝튼가 설정됩니다.

try {
    throw new Error("예외 발생시킴");
} catch(error) {
    console.dir(error);
    console.log(error.message);
};

// 1. throw 표현식에 Error 오브젝트 작성 Error()의 파라미터에 메세지 작성 오브젝트의 message에 메세지가 설정됩니다.
// 2. catch(error)의 error에 Error 오브젝트가 설정됩니다.
// 3. error.message로 작성한 메세지 사용