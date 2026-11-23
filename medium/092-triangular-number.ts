/*
  27152 - Triangular number
  -------------------------
  난이도: medium · 태그: tuple, array, math · 출제: null (@aswinsvijay)

  ### 문제

  Given a number N, find the Nth triangular number, i.e. `1 + 2 + 3 + ... + N`

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/27152-medium-triangular-number/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Triangular<N extends number> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Triangular<0>, 0>>,
  Expect<Equal<Triangular<1>, 1>>,
  Expect<Equal<Triangular<3>, 6>>,
  Expect<Equal<Triangular<10>, 55>>,
  Expect<Equal<Triangular<20>, 210>>,
  Expect<Equal<Triangular<55>, 1540>>,
  Expect<Equal<Triangular<100>, 5050>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/27152/solutions
*/
