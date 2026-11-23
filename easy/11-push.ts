/*
  3057 - Push
  -----------
  난이도: easy · 태그: array · 출제: jiangshan (@jiangshanmeta)

  ### 문제

  `Array.push`의 제네릭 버전을 구현하세요.

  예시:

  ```typescript
  type Result = Push<[1, 2], '3'> // [1, 2, '3']
  ```

  > 원문: https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md
*/

/* _____________ 여기에 코드 작성 _____________ */

type Push<T, U> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]

type errors = [
  // @ts-expect-error
  Expect<Equal<Push<number[], string>, string[]>>,
  // @ts-expect-error
  Expect<Equal<Push<string[], number>, [string, number]>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 다른 사람 풀이 보기: https://tsch.js.org/3057/solutions
*/
