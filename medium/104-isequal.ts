/*
  19749 - IsEqual
  ---------------
  난이도: medium · 태그: utils · 출제: Takahiro Kato (@doz13189)

  ### 문제

  Implements the equal operator that returns a boolean for whether the two given types are equal. 

  For example:

  ```ts
  type X1 = 1
  type Y1 = 1
  type T1 = IsEqual<X1, Y1> // expected to be true

  type X2 = 1
  type Y2 = 2
  type T2 = IsEqual<X2, Y2> // expected to be false
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/19749-medium-isequal/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type IsEqual<X, Y> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<IsEqual<number, string>, false>>,
  Expect<Equal<IsEqual<1, 1>, true>>,
  Expect<Equal<IsEqual<any, 1>, false>>,
  Expect<Equal<IsEqual<1 | 2, 1>, false>>,
  Expect<Equal<IsEqual<any, never>, false>>,
  Expect<Equal<IsEqual<[any], [number]>, false>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/19749/solutions
*/
