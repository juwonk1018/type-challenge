/*
  30958 - Pascal's triangle
  -------------------------
  난이도: medium · 태그: array, math · 출제: Aswin S Vijay (@aswinsvijay)

  ### 문제

  Given a number N, construct the Pascal's triangle with N rows.
  [Wikipedia](https://en.wikipedia.org/wiki/Pascal%27s_triangle)

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/30958-medium-pascals-triangle/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Pascal<N extends number> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Pascal<1>, [[1]]>>,
  Expect<Equal<Pascal<3>, [[1], [1, 1], [1, 2, 1]]>>,
  Expect<
    Equal<Pascal<5>, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]>
  >,
  Expect<
    Equal<
      Pascal<7>,
      [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1],
        [1, 6, 15, 20, 15, 6, 1],
      ]
    >
  >,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/30958/solutions
*/
