# Study-JavaScript-Beginner
<br>
(김영보 개발자님의 인프런 강의를 정리 및 재해석 하였습니다.)

- 자바 스크립트의 코딩법
- 자바스크립트 기본(ES5 기준) 지식을 습득할 수 있다.
- 자바스크립트 개발 경험자로써 전반적으로 정리할 수 있다.

---

# 코드가 적혀있는 제 블로그의 URL을 링크로 첨부합니다.(정리는 아무나 하는게 아닌거 같습니다 ^^..)

## Basic Grammer(기본 문법)

### [#01 StateMent(문장)](https://blog.naver.com/lh0156/222680315915)

- 자바 스크립트에서의 문장은 세미콜론까지 하나의 단위이며 일반적으로 2~4칸의 들여쓰기로 문장을 표현합니다

### [#0**2 Variable(변수)**](https://blog.naver.com/lh0156/222680316081)

- 자바 스크립트에서의 변수는 변수에 저장된 값을 재사용 하기 위해서 사용하며 현재 단계에서는 var의 형태로 사용하지만 이후 ES6에서는 let,const를 주로 사용합니다.
- 변수를 작성할 때에는 반드시 “명확한"의미를 부여하여 구체적으로 작명하여야 합니다.
- 변수의 값 할당은 왼쪽에서 오른쪽으로, 위에서 아래로 할당되며 최후에 할당된 값이 최종 값입니다.

### [#03 Comment(주석)](https://blog.naver.com/lh0156/222680316196)

- JavaScript에서의 주석은 당! 연! 히! JS로 인정하지 않습니다

### [#04 Console.log()](https://blog.naver.com/lh0156/222680316299)

- Console.log는 Java에서의 System.out.print, Python에서의 Print함수와 같이 프린트 함수입니다.
- 소괄호 안에 작성된 값을 브라우저 콘솔 창에 출력하며 문자, 숫자 등을 출력합니다.
- 콤마로 구분하여 다수 작성 가능합니다. 소괄호 안에 작성한 값을 파라미터 값이라고도 합니다.
- 콘솔로그는 자바스크리븥가 아니라 Console log API에서 제공합니다.

### **[#05 Integer And Actual Number(정수, 실수, 숫자 처리)](https://blog.naver.com/lh0156/222680316430)**

- 정수 = 소수가 없는 문자 | 실수 = 소수를 가진 숫자
- JS는 정수, 실수를 구분하지 않습니다
    - 1, 1.2, 1.0모두 1.0으로 간주합니다, 단 표시는 1로 표시합니다.
- 이는 64비트 (0과 1만을 숫자로 구성) 부동 소수점 처리 떄문입니다.
    - 부동 소수점 처리란 정수를 실수로 처리하는 것을 뜻합니다.
- IEEE 754 표준을 따릅니다
    - IEEE 754란 전기 전자 기술자 협회에서 갭라한 컴퓨터에서 만든 표준입니다.
- ES6에서 정수, 실수 구분이 추가되었습니다.

### [#**06 Constant And Binary(상수, 진수)**](https://blog.naver.com/lh0156/222680316557)

- 상수 = 변경할 수 없는 값 | 상수가 설정된 변수는 관례적으로 영문 대문자를 사용합니다.
- JS가 제공하는 상숫값은 변경 불가능합니다. * MAX_VALUE, MIN VALUE등

### [#07 Data Type(데이터 타입)](https://blog.naver.com/lh0156/222680316772)

- JS의 데이터는 반드시 자료형을 가집니다.
    - 단 자바나 C처럼 자료형을 먼저 선언해주는것이 아니라 데이터의 값에 따라 유동적으로 자료형이 지정됩니다.
    - 이는 왠만하면 오류를 내지 않도록 하려는 자바스크립트의 철학이 반영된 부분입니다.(적응 참 힘드네요)
- 타입을 알기 위해서는 “typeof”키워드를 사용할 수 있습니다.

### [#08 Number And String Type(숫자형 타입과 문자형 타입)](https://blog.naver.com/lh0156/222680316772)

- 데이터 타입은 언어 타입과 스펙(문서)타입으로 나뉩니다.
    - 언어 타입은 JS 프로그램에서 사용할 수 있는 타입입니다.
        - Undefined, Null, Boolean, String, Number, Object
    - 스펙 타입은 언어 알고리즘을 위한 타입으로  JS 프로그램에서 사용할 수 없습니다.
        - Reference, List, Completion, Property Descriptor, Data Block, Lexical Environment, Lexical Record 등
- Number 타입은 부호를 가진 값을 뜻합니다.
    - 숫자값의 범위는 -2의 53승 + 3 ~ 2의 64승까지입니다.
    - Number타입에는 특수한 3가지 값이 있습니다.
        - NaN(숫자가 들어가야 할 자리에 숫자가 아닌 값이 들어감)
        - Infinity(양수 무한대)
        - -Infinity(음수 무한대)
- String 타입은 문자 타입을 뜻합니다.
    - 값을 “” 또는 ‘’에 작성합니다.
    - 최대 문자수는 2의 53승 -1입니다.
    

### #09 Undefined And Null Type

- 하 ㅋ;

# 역시 공부한걸 정리하는건 아무나 하는게 아닌듯 싶습니다. 체력이 허락할 때 이어 작성하겠습니다.
