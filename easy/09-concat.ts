/*
  533 - Concat
  ------------
  난이도: easy · 태그: array · 출제: Andrey Krasovsky (@bre30kra69cs)

  ### 문제

  JavaScript의 `Array.concat` 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, 인수를 왼쪽부터 concat한 새로운 배열을 반환해야 합니다.

  예시:

  ```ts
  type Result = Concat<[1], [2]> // expected to be [1, 2]
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Concat<T, U> = any;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const tuple = [1] as const;

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >,
];

// @ts-expect-error
type error = Concat<null, undefined>;

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/533/solutions
*/
