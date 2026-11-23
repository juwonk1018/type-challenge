/*
  529 - Absolute
  --------------
  난이도: medium · 태그: math, template-literal · 출제: Andrey Krasovsky (@bre30kra69cs)

  ### 문제

  number, string, 혹은 bigint을 받는 `Absolute` 타입을 만드세요.
  출력은 양수 문자열이어야 합니다.

  예시:

  ```ts
  type Test = -100
  type Result = Absolute<Test> // expected to be "100"
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Absolute<T extends number | string | bigint> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Absolute<0>, "0">>,
  Expect<Equal<Absolute<-0>, "0">>,
  Expect<Equal<Absolute<10>, "10">>,
  Expect<Equal<Absolute<-5>, "5">>,
  Expect<Equal<Absolute<"0">, "0">>,
  Expect<Equal<Absolute<"-0">, "0">>,
  Expect<Equal<Absolute<"10">, "10">>,
  Expect<Equal<Absolute<"-5">, "5">>,
  Expect<Equal<Absolute<-1_000_000n>, "1000000">>,
  Expect<Equal<Absolute<9_999n>, "9999">>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/529/solutions
*/
