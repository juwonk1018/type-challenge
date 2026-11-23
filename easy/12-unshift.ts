/*
  3060 - Unshift
  --------------
  난이도: easy · 태그: array · 출제: jiangshan (@jiangshanmeta)

  ### 문제

  `Array.unshift`의 타입 버전을 구현하세요.

  예시:

  ```typescript
  type Result = Unshift<[1, 2], 0> // [0, 1, 2]
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Unshift<T, U> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/3060/solutions
*/
