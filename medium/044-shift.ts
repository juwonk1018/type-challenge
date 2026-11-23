/*
  3062 - Shift
  ------------
  난이도: medium · 태그: array · 출제: jiangshan (@jiangshanmeta)

  ### 문제

  Implement the type version of ```Array.shift```

  For example

  ```typescript
  type Result = Shift<[3, 2, 1]> // [2, 1]
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/03062-medium-shift/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Shift<T> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  // @ts-expect-error
  Shift<unknown>,
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>,
];

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/3062/solutions
*/
