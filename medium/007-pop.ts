/*
  16 - Pop
  --------
  난이도: medium · 태그: array · 출제: Anthony Fu (@antfu)

  ### 문제

  > 이 챌린지에는 TypeScript 4.0 사용이 권장됩니다.

  배열 `T`를 사용해 마지막 요소를 제외한 배열을 반환하는 제네릭 `Pop<T>`를 구현합니다.

  예시

  ```ts
  type arr1 = ['a', 'b', 'c', 'd']
  type arr2 = [3, 2, 1]

  type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2> // expected to be [3, 2]
  ```

  **더보기**: 비슷하게 `Shift`, `Push` 그리고 `Unshift`도 구현할 수 있을까요?

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Pop<T extends any[]> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/16/solutions
*/
