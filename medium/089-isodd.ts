/*
  30301 - IsOdd
  -------------
  난이도: medium · 태그: string · 출제: jiangshan (@jiangshanmeta)

  ### 문제

  return true is a number is odd

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/30301-medium-isodd/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type IsOdd<T extends number> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<IsOdd<5>, true>>,
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<2.3>, false>>,
  Expect<Equal<IsOdd<3e23>, false>>,
  Expect<Equal<IsOdd<3>, true>>,
  Expect<Equal<IsOdd<number>, false>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/30301/solutions
*/
