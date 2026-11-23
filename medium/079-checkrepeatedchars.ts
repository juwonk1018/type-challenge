/*
  9142 - CheckRepeatedChars
  -------------------------
  난이도: medium · 태그: union, string · 출제: Hong (@RThong)

  ### 문제

  Implement type ```CheckRepeatedChars<S>``` which will return whether type ```S``` contains duplicated chars? 

  For example:

  ```ts
  type CheckRepeatedChars<'abc'>   // false
  type CheckRepeatedChars<'aba'>   // true
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/09142-medium-checkrepeatedchars/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type CheckRepeatedChars<T extends string> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<CheckRepeatedChars<"abc">, false>>,
  Expect<Equal<CheckRepeatedChars<"abb">, true>>,
  Expect<Equal<CheckRepeatedChars<"cbc">, true>>,
  Expect<Equal<CheckRepeatedChars<"">, false>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/9142/solutions
*/
