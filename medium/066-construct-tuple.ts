/*
  7544 - Construct Tuple
  ----------------------
  난이도: medium · 태그: tuple · 출제: Lo (@LoTwT)

  ### 문제

  Construct a tuple with a given length.

  For example

  ```ts
  type result = ConstructTuple<2> // expect to be [unknown, unknown]
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/07544-medium-construct-tuple/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type ConstructTuple<L extends number> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/7544/solutions
*/
